"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connector = void 0;
const node_crypto_1 = require("node:crypto");
const axios_1 = __importDefault(require("axios"));
const AxiosLogger = __importStar(require("axios-logger"));
const axios_rate_limit_1 = __importDefault(require("axios-rate-limit"));
const https_proxy_agent_1 = require("https-proxy-agent");
const api_types_1 = require("../types/api.types");
/** Таймаут запроса по умолчанию (мс) */
const DEFAULT_TIMEOUT = 5000;
/** Количество повторных попыток по умолчанию */
const DEFAULT_RETRIES = 5;
/** Задержка между повторными попытками (мс) */
const RETRY_DELAY = 1000;
/**
 * Проверяет, можно ли повторить запрос (идемпотентные ошибки)
 */
function isRetryableError(error) {
    // Сетевые ошибки
    if (!error.response) {
        return true;
    }
    // Ошибки сервера (5xx)
    const status = error.response.status;
    if (status >= 500 && status < 600) {
        return true;
    }
    // Too Many Requests
    if (status === 429) {
        return true;
    }
    return false;
}
/**
 * Задержка выполнения
 */
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
/**
 * Базовый класс для работы с API YooKassa
 */
class Connector {
    constructor(init) {
        var _a, _b, _c, _d;
        // Убираем trailing slash из endpoint
        this.endpoint = (init.endpoint || 'https://api.yookassa.ru/v3').replace(/\/+$/, '');
        this.debug = (_a = init.debug) !== null && _a !== void 0 ? _a : false;
        this.maxRPS = (_b = init.maxRPS) !== null && _b !== void 0 ? _b : 5;
        this.timeout = (_c = init.timeout) !== null && _c !== void 0 ? _c : DEFAULT_TIMEOUT;
        this.retries = (_d = init.retries) !== null && _d !== void 0 ? _d : DEFAULT_RETRIES;
        this.token = init.token;
        this.shopId = init.shop_id;
        this.secretKey = init.secret_key;
        const axiosConfig = {
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
            httpsAgent: init.proxy ? new https_proxy_agent_1.HttpsProxyAgent(init.proxy) : undefined,
            httpAgent: init.proxy ? new https_proxy_agent_1.HttpsProxyAgent(init.proxy) : undefined,
        };
        // Создаём инстанс axios с rate limiting
        this.axiosInstance = (0, axios_rate_limit_1.default)(axios_1.default.create(axiosConfig), {
            maxRPS: this.maxRPS,
        });
        // Логирование запросов и ответов в debug режиме
        if (this.debug) {
            this.axiosInstance.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger);
            this.axiosInstance.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger);
        }
    }
    /**
     * Выполняет запрос к API с поддержкой retry и идемпотентности.
     * При ошибке бросает YooKassaErr.
     *
     * @throws {YooKassaErr} При ошибке API или сети
     */
    request(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            // Генерируем или используем переданный Idempotence-Key
            const idempotenceKey = (_a = opts.requestId) !== null && _a !== void 0 ? _a : (0, node_crypto_1.randomUUID)();
            // Формируем заголовки
            const headers = {
                'Idempotence-Key': idempotenceKey,
            };
            // OAuth авторизация для партнёрского API
            if (opts.useOAuth) {
                if (!this.token) {
                    throw new api_types_1.YooKassaErr({
                        type: 'error',
                        id: idempotenceKey,
                        code: 'MISSING_OAUTH_TOKEN',
                        description: 'OAuth token is required for this operation. Pass `token` in SDK options.',
                    });
                }
                headers.Authorization = `Bearer ${this.token}`;
            }
            let lastError = null;
            for (let attempt = 0; attempt <= this.retries; attempt++) {
                try {
                    const response = yield this.axiosInstance.request({
                        method: opts.method,
                        url: opts.endpoint,
                        data: opts.method === 'POST' ? opts.data : undefined,
                        params: opts.params,
                        headers,
                        auth: opts.useOAuth ? undefined : { username: this.shopId, password: this.secretKey },
                    });
                    return response.data;
                }
                catch (error) {
                    const axiosError = error;
                    // Проверяем, является ли ответ валидным JSON от YooKassa API
                    const responseData = (_b = axiosError.response) === null || _b === void 0 ? void 0 : _b.data;
                    const isValidYooKassaError = responseData &&
                        typeof responseData === 'object' &&
                        'type' in responseData &&
                        responseData.type === 'error';
                    // Если есть валидный ответ от API YooKassa и ошибка не retryable
                    if (isValidYooKassaError && !isRetryableError(axiosError)) {
                        throw new api_types_1.YooKassaErr(responseData);
                    }
                    lastError = axiosError;
                    // Если это не последняя попытка и ошибка retryable
                    if (attempt < this.retries && isRetryableError(axiosError)) {
                        const waitTime = RETRY_DELAY * Math.pow(2, attempt); // Exponential backoff
                        if (this.debug) {
                            console.log(`[YooKassa] Retry attempt ${attempt + 1}/${this.retries}, waiting ${waitTime}ms...`);
                        }
                        yield delay(waitTime);
                        continue;
                    }
                    // Последняя попытка или не retryable ошибка
                    if (isValidYooKassaError) {
                        throw new api_types_1.YooKassaErr(responseData);
                    }
                    // Сетевая ошибка или невалидный ответ
                    const statusCode = (_c = axiosError.response) === null || _c === void 0 ? void 0 : _c.status;
                    const statusText = ((_d = axiosError.response) === null || _d === void 0 ? void 0 : _d.statusText) || axiosError.message;
                    throw new api_types_1.YooKassaErr({
                        type: 'error',
                        id: idempotenceKey,
                        code: statusCode ? `HTTP_${statusCode}` : axiosError.code || 'NETWORK_ERROR',
                        description: statusCode
                            ? `HTTP ${statusCode}: ${statusText}`
                            : axiosError.message || 'Network error occurred',
                    });
                }
            }
            // Если все попытки исчерпаны
            throw new api_types_1.YooKassaErr({
                type: 'error',
                id: idempotenceKey,
                code: (lastError === null || lastError === void 0 ? void 0 : lastError.code) || 'RETRY_EXHAUSTED',
                description: (lastError === null || lastError === void 0 ? void 0 : lastError.message) || 'All retry attempts failed',
            });
        });
    }
}
exports.Connector = Connector;
//# sourceMappingURL=connector.js.map