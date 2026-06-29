import { randomBytes } from 'node:crypto'
import axios, { type AxiosError, type AxiosRequestConfig, type InternalAxiosRequestConfig } from 'axios'
import * as AxiosLogger from 'axios-logger'
import rateLimit, { type RateLimitedAxiosInstance } from 'axios-rate-limit'
import { HttpsProxyAgent } from 'https-proxy-agent'
import { YooKassaErr, type YooKassaErrResponse } from '../types/api.types'
import { serializeYooKassaListParams } from './queryParams'

/** Таймаут запроса по умолчанию, мс */
const DEFAULT_TIMEOUT = 5000

/** Число повторных попыток по умолчанию */
const DEFAULT_RETRIES = 5

/** Пауза между повторными попытками, мс */
const RETRY_DELAY = 1000

/**
 * URL прокси-сервера
 */
export type ProxyConfig = string

/**
 * Проверяет, допустим ли повтор запроса
 */
function isRetryableError(error: AxiosError): boolean {
    // Сетевые ошибки
    if (!error.response) {
        return true
    }
    // Ошибки сервера (5xx)
    const status = error.response.status
    if (status >= 500 && status < 600) {
        return true
    }
    // Too Many Requests
    if (status === 429) {
        return true
    }
    return false
}

/**
 * Пауза на указанное время
 */
function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Возвращает копию конфига с замаскированными заголовками.
 * Скрывает `secret_key` и OAuth-токен в логах debug-режима.
 */
function redactSensitiveConfig(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    const clone = { ...config }

    if (clone.auth) {
        clone.auth = { username: clone.auth.username, password: '***' }
    }

    if (clone.headers) {
        const authValue = clone.headers.get('Authorization')
        if (typeof authValue === 'string') {
            const prefix = authValue.startsWith('Bearer') ? 'Bearer' : 'Basic'
            clone.headers.set('Authorization', `${prefix} ***`)
        }
        const idempotenceKey = clone.headers.get('Idempotence-Key')
        if (typeof idempotenceKey === 'string') {
            clone.headers.set('Idempotence-Key', '***')
        }
    }

    return clone
}

/**
 * Configuration options for YooKassa SDK.
 *
 * ## Rate Limiting
 *
 * SDK includes built-in rate limiting via `maxRPS` parameter. All requests are automatically
 * throttled to prevent API rate limit errors. In distributed systems with multiple instances,
 * set `maxRPS` lower (e.g., 2-3) per instance to share the rate limit across nodes.
 *
 * ## Concurrent Requests
 *
 * SDK handles concurrent requests safely:
 * - Rate limiter queues requests exceeding `maxRPS`
 * - Each request gets unique idempotency key (auto-generated or provided)
 * - Instance caching by `shop_id` ensures connection reuse
 *
 * @example
 * ```typescript
 * // High-load configuration for single instance
 * const sdk = YooKassa({
 *     shop_id: 'your_shop_id',
 *     secret_key: 'your_secret_key',
 *     maxRPS: 10,      // Higher limit for single instance
 *     retries: 3,      // Fewer retries for faster failure
 *     timeout: 10000,  // Longer timeout for stability
 * });
 *
 * // Distributed system configuration (per instance)
 * const sdk = YooKassa({
 *     shop_id: 'your_shop_id',
 *     secret_key: 'your_secret_key',
 *     maxRPS: 2,       // Low limit per instance (5 instances = 10 total RPS)
 *     retries: 5,      // More retries for resilience
 * });
 * ```
 */
export type ConnectorOpts = {
    /**
     * Shop identifier from YooKassa dashboard
     */
    shop_id: string
    /**
     * Secret key from YooKassa dashboard
     */
    secret_key: string
    /**
     * OAuth token for partner API (webhooks, shop info).
     * Required for `sdk.webhooks.*` and `sdk.shop.*` methods.
     * @see https://yookassa.ru/developers/partners-api/basics
     */
    token?: string
    /**
     * API endpoint URL (without trailing slash)
     * @default "https://api.yookassa.ru/v3"
     */
    endpoint?: string
    /**
     * Debug mode — logs all requests and responses
     */
    debug?: boolean
    /**
     * Maximum requests per second (rate limiting).
     *
     * SDK automatically queues requests exceeding this limit.
     * For distributed systems, divide your total RPS limit by number of instances.
     *
     * @default 5
     * @example
     * // Single instance: use full rate limit
     * maxRPS: 10
     *
     * // 5 distributed instances sharing limit
     * maxRPS: 2  // 2 * 5 = 10 total RPS
     */
    maxRPS?: number
    /**
     * Request timeout in milliseconds
     * @default 5000
     */
    timeout?: number
    /**
     * Number of retry attempts on retryable errors (5xx, 429, network errors).
     *
     * Uses exponential backoff: 1s, 2s, 4s, 8s, 16s...
     * Idempotency key is preserved across retries, ensuring no duplicate payments.
     *
     * @default 5
     */
    retries?: number
    /**
     * Proxy server URL (e.g., "http://user:pass@proxy.example.com:8080")
     */
    proxy?: ProxyConfig
}

interface IGenReqOpts<P> {
    method: 'GET' | 'POST' | 'DELETE'
    endpoint: string
    params?: P
    /** Ключ идемпотентности; при отсутствии генерируется автоматически */
    requestId?: string
    /** Авторизация OAuth-токеном вместо Basic Auth */
    useOAuth?: boolean
}

type GetRequestOpts<P = object> = IGenReqOpts<P> & {
    method: 'GET'
}

type PostRequestOpts<P = object, D = object> = IGenReqOpts<P> & {
    method: 'POST'
    data: D
}

type DeleteRequestOpts<P = object> = IGenReqOpts<P> & {
    method: 'DELETE'
}

type RequestOpts<P = object, D = object> = GetRequestOpts<P> | PostRequestOpts<P, D> | DeleteRequestOpts<P>

/**
 * Base class for YooKassa API communication.
 *
 * ## Idempotency Handling
 *
 * All mutating operations (POST) include an `Idempotence-Key` header.
 * This ensures safe retries in distributed systems:
 *
 * - **Auto-generated keys**: If not provided, SDK generates UUID v4 for each request
 * - **Custom keys**: Pass your own key tied to business logic (e.g., order ID)
 * - **Retry safety**: Same key = same response, even if called multiple times
 *
 * ### Idempotency Key Strategies
 *
 * 1. **Order-based** (recommended): Use order ID as key
 *    ```typescript
 *    await sdk.payments.create(paymentData, `order-${orderId}`);
 *    ```
 *
 * 2. **User-action based**: Combine user ID + action + timestamp
 *    ```typescript
 *    await sdk.payments.create(paymentData, `user-${userId}-payment-${Date.now()}`);
 *    ```
 *
 * 3. **Auto-generated** (default): SDK generates UUID, safe for single attempts
 *    ```typescript
 *    await sdk.payments.create(paymentData); // UUID auto-generated
 *    ```
 *
 * ### Distributed Systems
 *
 * For systems with network failures or client retries:
 *
 * ```typescript
 * // Store idempotency key BEFORE making request
 * const idempotencyKey = `order-${orderId}`;
 * await redis.set(`payment:${orderId}:key`, idempotencyKey, 'EX', 86400);
 *
 * // Make request (safe to retry with same key)
 * const payment = await sdk.payments.create(paymentData, idempotencyKey);
 *
 * // On retry (network failure), use same key
 * const storedKey = await redis.get(`payment:${orderId}:key`);
 * const payment = await sdk.payments.create(paymentData, storedKey);
 * // Returns same payment, no duplicate charge
 * ```
 *
 * @see https://yookassa.ru/developers/using-api/basics#idempotence
 */
export class Connector {
    protected axiosInstance: RateLimitedAxiosInstance
    protected endpoint: string
    protected debug: boolean
    protected maxRPS: number
    protected timeout: number
    protected retries: number
    protected token?: string
    protected shopId: string
    protected secretKey: string

    constructor(init: ConnectorOpts) {
        if (!init.shop_id?.trim()) {
            throw new YooKassaErr({
                type: 'error',
                id: 'init',
                code: 'invalid_credentials',
                description: 'shop_id is required and must not be empty',
            })
        }
        if (!init.secret_key?.trim()) {
            throw new YooKassaErr({
                type: 'error',
                id: 'init',
                code: 'invalid_credentials',
                description: 'secret_key is required and must not be empty',
            })
        }

        // Удаляем завершающий слэш у endpoint
        this.endpoint = (init.endpoint || 'https://api.yookassa.ru/v3').replace(/\/+$/, '')

        // Требуем HTTPS; HTTP — только для localhost в debug-режиме
        const endpointUrl = new URL(this.endpoint)
        const isLocalhost = endpointUrl.hostname === 'localhost' || endpointUrl.hostname === '127.0.0.1'
        if (endpointUrl.protocol !== 'https:' && !(init.debug && isLocalhost)) {
            throw new YooKassaErr({
                type: 'error',
                id: 'init',
                code: 'INSECURE_ENDPOINT',
                description: `endpoint must use HTTPS to protect credentials (got '${this.endpoint}'). HTTP is allowed only for localhost in debug mode.`,
            })
        }
        this.debug = init.debug ?? false
        this.maxRPS = init.maxRPS ?? 5
        this.timeout = init.timeout ?? DEFAULT_TIMEOUT
        this.retries = init.retries ?? DEFAULT_RETRIES
        this.token = init.token
        this.shopId = init.shop_id
        this.secretKey = init.secret_key

        const axiosConfig: AxiosRequestConfig = {
            baseURL: this.endpoint,
            timeout: this.timeout,
            // Списки ЮKassa: `created_at.gte`, не `created_at[gte]`
            paramsSerializer: {
                serialize: (p) => serializeYooKassaListParams((p ?? {}) as object),
            },
            // auth не задаём здесь — передаём в каждом запросе,
            // чтобы отключать для OAuth
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'yookassa-ts-sdk',
            },
            // https-proxy-agent вместо встроенного axios proxy
            // Корректно работает в Next.js server actions
            proxy: false, // Встроенный axios proxy отключён
            httpsAgent: init.proxy ? new HttpsProxyAgent(init.proxy) : undefined,
            httpAgent: init.proxy ? new HttpsProxyAgent(init.proxy) : undefined,
        }

        // Axios с rate limiting
        this.axiosInstance = rateLimit(axios.create(axiosConfig), {
            maxRPS: this.maxRPS,
        })

        // Логи запросов и ответов в debug-режиме
        if (this.debug) {
            this.axiosInstance.interceptors.request.use(
                (config) => AxiosLogger.requestLogger(redactSensitiveConfig(config)),
                AxiosLogger.errorLogger,
            )
            this.axiosInstance.interceptors.response.use(
                (response) =>
                    AxiosLogger.responseLogger({ ...response, config: redactSensitiveConfig(response.config) }),
                AxiosLogger.errorLogger,
            )
        }
    }

    /**
     * Выполняет запрос к API с повторами и идемпотентностью.
     *
     * @throws {YooKassaErr} Ошибка API или сети
     */
    protected async request<Res, Data = object>(opts: RequestOpts<Data>): Promise<Res> {
        // Idempotence-Key: переданный или сгенерированный
        if (opts.requestId !== undefined && opts.requestId.length > 64) {
            throw new YooKassaErr({
                type: 'error',
                id: opts.requestId,
                code: 'INVALID_IDEMPOTENCE_KEY',
                description: `Idempotence key must be 64 characters or less (got ${opts.requestId.length})`,
            })
        }
        const idempotenceKey = opts.requestId ?? randomBytes(16).toString('hex')

        // Заголовки запроса
        const headers: Record<string, string> = {
            'Idempotence-Key': idempotenceKey,
        }

        // OAuth для партнёрского API
        if (opts.useOAuth) {
            if (!this.token) {
                throw new YooKassaErr({
                    type: 'error',
                    id: idempotenceKey,
                    code: 'MISSING_OAUTH_TOKEN',
                    description: 'OAuth token is required for this operation. Pass `token` in SDK options.',
                })
            }
            headers.Authorization = `Bearer ${this.token}`
        }

        let lastError: AxiosError | null = null

        for (let attempt = 0; attempt <= this.retries; attempt++) {
            try {
                const response = await this.axiosInstance.request<Res>({
                    method: opts.method,
                    url: opts.endpoint,
                    data: opts.method === 'POST' ? (opts as PostRequestOpts<object, Data>).data : undefined,
                    params: opts.params,
                    headers,
                    auth: opts.useOAuth ? undefined : { username: this.shopId, password: this.secretKey },
                })

                return response.data
            } catch (error) {
                const axiosError = error as AxiosError

                // Ответ — валидный JSON ошибки YooKassa API
                const responseData = axiosError.response?.data
                const isValidYooKassaError =
                    responseData &&
                    typeof responseData === 'object' &&
                    'type' in responseData &&
                    responseData.type === 'error'

                // Валидная ошибка API без повтора
                if (isValidYooKassaError && !isRetryableError(axiosError)) {
                    throw new YooKassaErr(responseData as YooKassaErrResponse)
                }

                lastError = axiosError

                // Повтор при retryable-ошибке
                if (attempt < this.retries && isRetryableError(axiosError)) {
                    const waitTime = RETRY_DELAY * 2 ** attempt // Exponential backoff
                    if (this.debug) {
                        console.log(`[YooKassa] Retry attempt ${attempt + 1}/${this.retries}, waiting ${waitTime}ms...`)
                    }
                    await delay(waitTime)
                    continue
                }

                // Последняя попытка или ошибка без повтора
                if (isValidYooKassaError) {
                    throw new YooKassaErr(responseData as YooKassaErrResponse)
                }

                // Сетевая ошибка или невалидный ответ
                const statusCode = axiosError.response?.status
                const statusText = axiosError.response?.statusText || axiosError.message
                throw new YooKassaErr({
                    type: 'error',
                    id: idempotenceKey,
                    code: statusCode ? `HTTP_${statusCode}` : axiosError.code || 'NETWORK_ERROR',
                    description: statusCode
                        ? `HTTP ${statusCode}: ${statusText}`
                        : axiosError.message || 'Network error occurred',
                })
            }
        }

        // Все попытки исчерпаны
        throw new YooKassaErr({
            type: 'error',
            id: idempotenceKey,
            code: lastError?.code || 'RETRY_EXHAUSTED',
            description: lastError?.message || 'All retry attempts failed',
        })
    }
}
