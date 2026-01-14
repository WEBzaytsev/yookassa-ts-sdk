import { randomUUID } from 'node:crypto'
import axios, { type AxiosError, type AxiosRequestConfig } from 'axios'
import * as AxiosLogger from 'axios-logger'
import rateLimit, { type RateLimitedAxiosInstance } from 'axios-rate-limit'
import { HttpsProxyAgent } from 'https-proxy-agent'
import { YooKassaErr, type YooKassaErrResponse } from '../types/api.types'

/** Таймаут запроса по умолчанию (мс) */
const DEFAULT_TIMEOUT = 5000

/** Количество повторных попыток по умолчанию */
const DEFAULT_RETRIES = 5

/** Задержка между повторными попытками (мс) */
const RETRY_DELAY = 1000

/**
 * Конфигурация прокси-сервера (URL строка)
 */
export type ProxyConfig = string

/**
 * Проверяет, можно ли повторить запрос (идемпотентные ошибки)
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
 * Задержка выполнения
 */
function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
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
    /** Ключ идемпотентности. Если не указан, генерируется автоматически. */
    requestId?: string
    /** Использовать OAuth-токен вместо Basic Auth */
    useOAuth?: boolean
}

export type GetRequestOpts<P = object> = IGenReqOpts<P> & {
    method: 'GET'
}

export type PostRequestOpts<P = object, D = object> = IGenReqOpts<P> & {
    method: 'POST'
    data: D
}

export type DeleteRequestOpts<P = object> = IGenReqOpts<P> & {
    method: 'DELETE'
}

export type RequestOpts<P = object, D = object> = GetRequestOpts<P> | PostRequestOpts<P, D> | DeleteRequestOpts<P>

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
        // Убираем trailing slash из endpoint
        this.endpoint = (init.endpoint || 'https://api.yookassa.ru/v3').replace(/\/+$/, '')
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
            // auth НЕ устанавливаем здесь — передаём в каждом запросе явно,
            // чтобы можно было отключить для OAuth
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'yookassa-ts-sdk',
            },
            // Используем https-proxy-agent вместо встроенного axios proxy
            // Это работает корректно в Next.js server actions
            proxy: false, // Отключаем встроенный axios proxy
            httpsAgent: init.proxy ? new HttpsProxyAgent(init.proxy) : undefined,
            httpAgent: init.proxy ? new HttpsProxyAgent(init.proxy) : undefined,
        }

        // Создаём инстанс axios с rate limiting
        this.axiosInstance = rateLimit(axios.create(axiosConfig), {
            maxRPS: this.maxRPS,
        })

        // Логирование запросов и ответов в debug режиме
        if (this.debug) {
            this.axiosInstance.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger)
            this.axiosInstance.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger)
        }
    }

    /**
     * Выполняет запрос к API с поддержкой retry и идемпотентности.
     * При ошибке бросает YooKassaErr.
     *
     * @throws {YooKassaErr} При ошибке API или сети
     */
    protected async request<Res, Data = object>(opts: RequestOpts<Data>): Promise<Res> {
        // Генерируем или используем переданный Idempotence-Key
        const idempotenceKey = opts.requestId ?? randomUUID()

        // Формируем заголовки
        const headers: Record<string, string> = {
            'Idempotence-Key': idempotenceKey,
        }

        // OAuth авторизация для партнёрского API
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

                // Проверяем, является ли ответ валидным JSON от YooKassa API
                const responseData = axiosError.response?.data
                const isValidYooKassaError =
                    responseData &&
                    typeof responseData === 'object' &&
                    'type' in responseData &&
                    responseData.type === 'error'

                // Если есть валидный ответ от API YooKassa и ошибка не retryable
                if (isValidYooKassaError && !isRetryableError(axiosError)) {
                    throw new YooKassaErr(responseData as YooKassaErrResponse)
                }

                lastError = axiosError

                // Если это не последняя попытка и ошибка retryable
                if (attempt < this.retries && isRetryableError(axiosError)) {
                    const waitTime = RETRY_DELAY * 2 ** attempt // Exponential backoff
                    if (this.debug) {
                        console.log(`[YooKassa] Retry attempt ${attempt + 1}/${this.retries}, waiting ${waitTime}ms...`)
                    }
                    await delay(waitTime)
                    continue
                }

                // Последняя попытка или не retryable ошибка
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

        // Если все попытки исчерпаны
        throw new YooKassaErr({
            type: 'error',
            id: idempotenceKey,
            code: lastError?.code || 'RETRY_EXHAUSTED',
            description: lastError?.message || 'All retry attempts failed',
        })
    }
}
