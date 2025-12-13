import { randomUUID } from 'node:crypto'
import axios, { type AxiosError, type AxiosRequestConfig } from 'axios'
import * as AxiosLogger from 'axios-logger'
import rateLimit, { type RateLimitedAxiosInstance } from 'axios-rate-limit'
import { HttpsProxyAgent } from 'https-proxy-agent'
import type { YooKassaErrResponse } from '../types/api.types'

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
 * Данные для подключения к API YooKassa
 */
export type ConnectorOpts = {
    /**
     * Идентификатор магазина
     */
    shop_id: string
    /**
     * Секретный ключ
     */
    secret_key: string
    /**
     * OAuth-токен для партнёрского API.
     * Необходим для работы с вебхуками и получения информации о магазине.
     * @see https://yookassa.ru/developers/partners-api/basics
     */
    token?: string
    /**
     * Эндпоинт API (без слэша в конце)
     * @default "https://api.yookassa.ru/v3"
     */
    endpoint?: string
    /** Отладочный режим */
    debug?: boolean
    /**
     * Количество запросов в секунду
     * @default 5
     */
    maxRPS?: number
    /**
     * Таймаут запроса в миллисекундах
     * @default 5000
     */
    timeout?: number
    /**
     * Количество повторных попыток при ошибках
     * @default 5
     */
    retries?: number
    /**
     * Конфигурация прокси-сервера
     * Можно указать как строку URL (например, "http://user:pass@proxy.example.com:8080")
     * или объект AxiosProxyConfig
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

export type GetRequestOpts<P = Record<string, any>> = IGenReqOpts<P> & {
    method: 'GET'
}

export type PostRequestOpts<P = Record<string, any>, D = Record<string, any>> = IGenReqOpts<P> & {
    method: 'POST'
    data: D
}

export type DeleteRequestOpts<P = Record<string, any>> = IGenReqOpts<P> & {
    method: 'DELETE'
}

export type RequestOpts<P = Record<string, any>, D = Record<string, any>> =
    | GetRequestOpts<P>
    | PostRequestOpts<P, D>
    | DeleteRequestOpts<P>

type BadApiResponse = {
    success: 'NO_OK'
    errorData: YooKassaErrResponse
    requestId: string
}

type GoodApiResponse<Res> = {
    success: 'OK'
    data: Res
    requestId: string
}

export type ApiResponse<Res> = BadApiResponse | GoodApiResponse<Res>

/**
 * Базовый класс для работы с API YooKassa
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
                'User-Agent': 'yookassa-api-sdk',
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
     * Выполняет запрос к API с поддержкой retry и идемпотентности
     */
    protected async request<Res = Record<string, any>, Data = Record<string, any>>(
        opts: RequestOpts<Data>,
    ): Promise<ApiResponse<Res>> {
        // Генерируем или используем переданный Idempotence-Key
        const idempotenceKey = opts.requestId ?? randomUUID()

        // Формируем заголовки
        const headers: Record<string, string> = {
            'Idempotence-Key': idempotenceKey,
        }

        // OAuth авторизация для партнёрского API
        if (opts.useOAuth) {
            if (!this.token) {
                return {
                    success: 'NO_OK',
                    errorData: {
                        type: 'error',
                        id: idempotenceKey,
                        code: 'MISSING_OAUTH_TOKEN',
                        description: 'OAuth token is required for this operation. Pass `token` in SDK options.',
                    },
                    requestId: idempotenceKey,
                }
            }
            headers.Authorization = `Bearer ${this.token}`
        }

        let lastError: AxiosError | null = null

        for (let attempt = 0; attempt <= this.retries; attempt++) {
            try {
                const response = await this.axiosInstance.request<Res>({
                    method: opts.method,
                    url: opts.endpoint, // baseURL уже задан, endpoint начинается с /
                    data: opts.method === 'POST' ? (opts as PostRequestOpts<any, Data>).data : undefined,
                    params: opts.params,
                    headers,
                    // Для OAuth отключаем Basic Auth
                    auth: opts.useOAuth ? undefined : { username: this.shopId, password: this.secretKey },
                })

                return {
                    success: 'OK',
                    data: response.data,
                    requestId: idempotenceKey,
                }
            } catch (error) {
                const axiosError = error as AxiosError

                // Проверяем, является ли ответ валидным JSON от YooKassa API
                const responseData = axiosError.response?.data
                const isValidYooKassaError =
                    responseData &&
                    typeof responseData === 'object' &&
                    'type' in responseData &&
                    responseData.type === 'error'

                // Если есть валидный ответ от API YooKassa
                if (isValidYooKassaError) {
                    const errorData = responseData as YooKassaErrResponse

                    // Если ошибка не retryable, сразу возвращаем
                    if (!isRetryableError(axiosError)) {
                        return {
                            success: 'NO_OK',
                            errorData,
                            requestId: idempotenceKey,
                        }
                    }
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
                    return {
                        success: 'NO_OK',
                        errorData: responseData as YooKassaErrResponse,
                        requestId: idempotenceKey,
                    }
                }

                // Сетевая ошибка или невалидный ответ (HTML, прокси-ошибка и т.д.)
                const statusCode = axiosError.response?.status
                const statusText = axiosError.response?.statusText || axiosError.message
                return {
                    success: 'NO_OK',
                    errorData: {
                        type: 'error',
                        id: idempotenceKey,
                        code: statusCode ? `HTTP_${statusCode}` : axiosError.code || 'NETWORK_ERROR',
                        description: statusCode
                            ? `HTTP ${statusCode}: ${statusText}`
                            : axiosError.message || 'Network error occurred',
                    },
                    requestId: idempotenceKey,
                }
            }
        }

        // Если все попытки исчерпаны (не должно сюда дойти, но на всякий случай)
        return {
            success: 'NO_OK',
            errorData: {
                type: 'error',
                id: idempotenceKey,
                code: lastError?.code || 'RETRY_EXHAUSTED',
                description: lastError?.message || 'All retry attempts failed',
            },
            requestId: idempotenceKey,
        }
    }
}
