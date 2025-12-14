import { type RateLimitedAxiosInstance } from 'axios-rate-limit';
/**
 * Конфигурация прокси-сервера (URL строка)
 */
export type ProxyConfig = string;
/**
 * Данные для подключения к API YooKassa
 */
export type ConnectorOpts = {
    /**
     * Идентификатор магазина
     */
    shop_id: string;
    /**
     * Секретный ключ
     */
    secret_key: string;
    /**
     * OAuth-токен для партнёрского API.
     * Необходим для работы с вебхуками и получения информации о магазине.
     * @see https://yookassa.ru/developers/partners-api/basics
     */
    token?: string;
    /**
     * Эндпоинт API (без слэша в конце)
     * @default "https://api.yookassa.ru/v3"
     */
    endpoint?: string;
    /** Отладочный режим */
    debug?: boolean;
    /**
     * Количество запросов в секунду
     * @default 5
     */
    maxRPS?: number;
    /**
     * Таймаут запроса в миллисекундах
     * @default 5000
     */
    timeout?: number;
    /**
     * Количество повторных попыток при ошибках
     * @default 5
     */
    retries?: number;
    /**
     * Конфигурация прокси-сервера
     * Можно указать как строку URL (например, "http://user:pass@proxy.example.com:8080")
     * или объект AxiosProxyConfig
     */
    proxy?: ProxyConfig;
};
interface IGenReqOpts<P> {
    method: 'GET' | 'POST' | 'DELETE';
    endpoint: string;
    params?: P;
    /** Ключ идемпотентности. Если не указан, генерируется автоматически. */
    requestId?: string;
    /** Использовать OAuth-токен вместо Basic Auth */
    useOAuth?: boolean;
}
export type GetRequestOpts<P = Record<string, any>> = IGenReqOpts<P> & {
    method: 'GET';
};
export type PostRequestOpts<P = Record<string, any>, D = Record<string, any>> = IGenReqOpts<P> & {
    method: 'POST';
    data: D;
};
export type DeleteRequestOpts<P = Record<string, any>> = IGenReqOpts<P> & {
    method: 'DELETE';
};
export type RequestOpts<P = Record<string, any>, D = Record<string, any>> = GetRequestOpts<P> | PostRequestOpts<P, D> | DeleteRequestOpts<P>;
/**
 * Базовый класс для работы с API YooKassa
 */
export declare class Connector {
    protected axiosInstance: RateLimitedAxiosInstance;
    protected endpoint: string;
    protected debug: boolean;
    protected maxRPS: number;
    protected timeout: number;
    protected retries: number;
    protected token?: string;
    protected shopId: string;
    protected secretKey: string;
    constructor(init: ConnectorOpts);
    /**
     * Выполняет запрос к API с поддержкой retry и идемпотентности.
     * При ошибке бросает YooKassaErr.
     *
     * @throws {YooKassaErr} При ошибке API или сети
     */
    protected request<Res = Record<string, any>, Data = Record<string, any>>(opts: RequestOpts<Data>): Promise<Res>;
}
export {};
