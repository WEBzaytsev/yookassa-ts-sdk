import { RateLimitedAxiosInstance } from 'axios-rate-limit';
import { YooKassaErrResponse } from '../types/api.types';
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
    /**
     * URL по умолчанию для возврата пользователя после оплаты.
     * Используется в confirmation.return_url, если не указан явно при создании платежа.
     * @see https://yookassa.ru/developers/api#create_payment
     */
    default_return_url?: string;
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
type BadApiResponse = {
    success: 'NO_OK';
    errorData: YooKassaErrResponse;
    requestId: string;
};
type GoodApiResponse<Res> = {
    success: 'OK';
    data: Res;
    requestId: string;
};
export type ApiResponse<Res> = BadApiResponse | GoodApiResponse<Res>;
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
    protected defaultReturnUrl?: string;
    constructor(init: ConnectorOpts);
    /**
     * Выполняет запрос к API с поддержкой retry и идемпотентности
     */
    protected request<Res = Record<string, any>, Data = Record<string, any>>(opts: RequestOpts<Data>): Promise<ApiResponse<Res>>;
}
export {};
