import type {
    CreatePaymentResponse,
    GetListResponse,
    GetPaymentListFilter,
    GetReceiptListFilter,
    GetRefundListFilter,
} from '../types/api.types'
import type { Payments } from '../types/payments'
import type { Receipts } from '../types/receipt'
import type { Refunds } from '../types/refunds'
import type { IShopInfo } from '../types/shop.type'
import type { CreateWebhookRequest, IWebhook, WebhookList } from '../types/webhook.type'
import type { ConnectorOpts } from './connector'
import { Connector } from './connector'

/**
 * YooKassa SDK client for payment processing.
 *
 * ## Features
 *
 * - **Automatic retries** with exponential backoff on network errors and 5xx responses
 * - **Built-in rate limiting** via `maxRPS` configuration
 * - **Idempotency** — auto-generated or custom keys for safe retries
 * - **Instance caching** by `shop_id` for connection reuse
 *
 * ## Usage
 *
 * ```typescript
 * import { YooKassa } from '@webzaytsev/yookassa-ts-sdk';
 *
 * const sdk = YooKassa({
 *     shop_id: 'your_shop_id',
 *     secret_key: 'your_secret_key',
 * });
 *
 * // Create payment with auto-generated idempotency key
 * const payment = await sdk.payments.create({
 *     amount: { value: '100.00', currency: 'RUB' },
 *     confirmation: { type: 'redirect', return_url: 'https://example.com' },
 * });
 *
 * // Create payment with custom idempotency key (recommended for retries)
 * const payment = await sdk.payments.create(paymentData, `order-${orderId}`);
 * ```
 *
 * @see https://yookassa.ru/developers/api
 */
export class YooKassaSdk extends Connector {
    /**
     * Generic method for fetching lists with automatic pagination
     */
    private async fetchList<T, F extends { cursor?: string }>(
        endpoint: string,
        filter?: Omit<F, 'cursor'>,
    ): Promise<T[]> {
        const items: T[] = []
        const params = (filter ?? {}) as F
        let cursor: string | undefined

        do {
            const response = await this.request<GetListResponse<T>>({
                method: 'GET',
                endpoint,
                params,
            })
            items.push(...response.items)
            cursor = response.next_cursor
            if (cursor) {
                params.cursor = cursor
            }
        } while (cursor)

        return items
    }

    // ========== Payments ========== //
    protected getPaymentById = async (id: string): Promise<Payments.IPayment> => {
        return this.request<Payments.IPayment>({
            method: 'GET',
            endpoint: `/payments/${id}`,
        })
    }
    /** ****Получить список платежей****
     *
     * Запрос позволяет получить список платежей, отфильтрованный по заданным критериям. [Подробнее о работе со списками](https://yookassa.ru/developers/using-api/lists)
     */
    protected getPaymentList = async (filter?: Omit<GetPaymentListFilter, 'cursor'>): Promise<Payments.IPayment[]> => {
        return this.fetchList<Payments.IPayment, GetPaymentListFilter>('/payments', filter)
    }
    /** Создать платеж
     * @param newPayment - данные для создания платежа
     * @param idempotenceKey - ключ идемпотентности (опционально, генерируется автоматически)
     */
    protected createPayment = async (
        newPayment: Payments.CreatePaymentRequest,
        idempotenceKey?: string,
    ): Promise<CreatePaymentResponse> => {
        return this.request<CreatePaymentResponse>({
            method: 'POST',
            endpoint: '/payments',
            data: newPayment,
            requestId: idempotenceKey,
        })
    }

    /** Подтвердить платеж по идентификатору
     * @param paymentId - идентификатор платежа
     * @param payload - данные для подтверждения (сумма, чек, данные авиабилетов, распределение)
     * @param idempotenceKey - ключ идемпотентности (опционально)
     */
    protected capturePaymentById = async (
        paymentId: string,
        payload?: Payments.CapturePaymentRequest,
        idempotenceKey?: string,
    ): Promise<Payments.IPayment> => {
        return this.request<Payments.IPayment>({
            method: 'POST',
            endpoint: `/payments/${paymentId}/capture`,
            data: payload ?? {},
            requestId: idempotenceKey,
        })
    }

    /** Отменить платеж по идентификатору
     * @param paymentId - идентификатор платежа
     * @param idempotenceKey - ключ идемпотентности (опционально)
     */
    protected cancelPaymentById = async (paymentId: string, idempotenceKey?: string): Promise<Payments.IPayment> => {
        return this.request<Payments.IPayment>({
            method: 'POST',
            endpoint: `/payments/${paymentId}/cancel`,
            data: {},
            requestId: idempotenceKey,
        })
    }
    // ========== Payments end========== //
    // ========== Refunds ========== //
    protected getRefundById = async (refundId: string): Promise<Refunds.IRefund> => {
        return this.request<Refunds.IRefund>({
            method: 'GET',
            endpoint: `/refunds/${refundId}`,
        })
    }

    protected getRefundList = async (filter?: Omit<GetRefundListFilter, 'cursor'>): Promise<Refunds.IRefund[]> => {
        return this.fetchList<Refunds.IRefund, GetRefundListFilter>('/refunds', filter)
    }

    /** Создать возврат
     * @param newRefund - данные для создания возврата
     * @param idempotenceKey - ключ идемпотентности (опционально)
     */
    protected createRefund = async (
        newRefund: Refunds.CreateRefundRequest,
        idempotenceKey?: string,
    ): Promise<Refunds.IRefund> => {
        return this.request<Refunds.IRefund>({
            method: 'POST',
            endpoint: '/refunds',
            data: newRefund,
            requestId: idempotenceKey,
        })
    }
    // ========== Refunds end ========== //
    // ========== Receipts ========== //
    protected getReceiptById = async (receiptId: string): Promise<Receipts.ReceiptType> => {
        return this.request<Receipts.ReceiptType>({
            method: 'GET',
            endpoint: `/receipts/${receiptId}`,
        })
    }

    /** Создать чек
     * @param newReceipt - данные для создания чека
     * @param idempotenceKey - ключ идемпотентности (опционально)
     */
    protected createReceipt = async (
        newReceipt: Receipts.CreateReceiptType,
        idempotenceKey?: string,
    ): Promise<Receipts.ReceiptType> => {
        return this.request<Receipts.ReceiptType>({
            method: 'POST',
            endpoint: '/receipts',
            data: newReceipt,
            requestId: idempotenceKey,
        })
    }

    protected getReceiptList = async (
        filter?: Omit<GetReceiptListFilter, 'cursor'>,
    ): Promise<Receipts.ReceiptType[]> => {
        return this.fetchList<Receipts.ReceiptType, GetReceiptListFilter>('/receipts', filter)
    }
    // ========== Receipts end ========== //

    // ========== Webhooks ========== //
    /** Создать вебхук (требуется OAuth-токен)
     * @param webhook - данные для создания вебхука
     * @param idempotenceKey - ключ идемпотентности (опционально)
     */
    protected createWebhook = async (webhook: CreateWebhookRequest, idempotenceKey?: string): Promise<IWebhook> => {
        return this.request<IWebhook>({
            method: 'POST',
            endpoint: '/webhooks',
            data: webhook,
            requestId: idempotenceKey,
            useOAuth: true,
        })
    }

    /** Получить список вебхуков (требуется OAuth-токен) */
    protected getWebhookList = async (): Promise<IWebhook[]> => {
        const response = await this.request<WebhookList>({
            method: 'GET',
            endpoint: '/webhooks',
            useOAuth: true,
        })
        return response.items
    }

    /** Удалить вебхук по идентификатору (требуется OAuth-токен)
     * @param webhookId - идентификатор вебхука
     */
    protected deleteWebhook = async (webhookId: string): Promise<void> => {
        await this.request<Record<string, never>>({
            method: 'DELETE',
            endpoint: `/webhooks/${webhookId}`,
            useOAuth: true,
        })
    }
    // ========== Webhooks end ========== //

    // ========== Shop ========== //
    /** Получить информацию о магазине (требуется OAuth-токен) */
    protected getShopInfo = async (): Promise<IShopInfo> => {
        return this.request<IShopInfo>({
            method: 'GET',
            endpoint: '/me',
            useOAuth: true,
        })
    }
    // ========== Shop end ========== //

    /** Методы для работы с платежами */
    public readonly payments = {
        /**
         * Creates a new payment.
         *
         * ## Idempotency
         *
         * The `idempotenceKey` parameter ensures safe retries in distributed systems.
         * If not provided, SDK generates a UUID automatically.
         *
         * **Recommended**: Use order ID or business identifier as idempotency key
         * to prevent duplicate payments on retries.
         *
         * @param payment - Payment data (amount, confirmation, etc.)
         * @param idempotenceKey - Unique key for request deduplication. Use order ID for safe retries.
         *
         * @example
         * ```typescript
         * // Auto-generated idempotency key (for single attempts)
         * const payment = await sdk.payments.create({
         *     amount: { value: '100.00', currency: 'RUB' },
         *     confirmation: { type: 'redirect', return_url: 'https://example.com' },
         * });
         *
         * // Custom idempotency key (recommended for retries)
         * const payment = await sdk.payments.create(paymentData, `order-${orderId}`);
         *
         * // Safe retry pattern for distributed systems
         * async function createPaymentWithRetry(orderId: string, data: CreatePaymentRequest) {
         *     const key = `payment-${orderId}`;
         *     try {
         *         return await sdk.payments.create(data, key);
         *     } catch (error) {
         *         // Same key = same result, no duplicate charge
         *         return await sdk.payments.create(data, key);
         *     }
         * }
         * ```
         *
         * @see https://yookassa.ru/developers/api#create_payment
         */
        create: this.createPayment as (
            payment: Payments.CreatePaymentRequest,
            idempotenceKey?: string,
        ) => Promise<Payments.IPayment>,
        /**
         * ****Информация о платеже****
         *
         * Запрос позволяет получить информацию о текущем состоянии платежа по его уникальному идентификатору.
         *
         * [Документация](https://yookassa.ru/developers/api#get_payment)
         */
        load: this.getPaymentById,

        /**
         * ****Список платежей****
         *
         * Запрос позволяет получить список платежей, отфильтрованный по заданным критериям.
         *
         * Retrieves a list of payments filtered by the specified criteria.
         *
         * @param {Omit<GetPaymentListFilter, 'cursor'>} params - The parameters for filtering the payments.
         * @return {Promise<Payments.IPayment[]>} A promise that resolves to the list of payments.
         *
         * [API Documentation](https://yookassa.ru/developers/api#get_payment)
         *
         * [Working with lists documentation](https://yookassa.ru/developers/using-api/lists)
         *
         * **PaymentListParams**
         *
         * These are the parameters that can be used to filter the payments.
         *
         * **created_at**
         * - `gte` (optional): Filter by the creation time. The time should be greater than or equal to the specified value. Format: ISO 8601. Example: `created_at.gte=2018-07-18T10:51:18.139Z`
         * - `gt` (optional): Filter by the creation time. The time should be greater than the specified value. Format: ISO 8601. Example: `created_at.gt=2018-07-18T10:51:18.139Z`
         * - `lte` (optional): Filter by the creation time. The time should be less than or equal to the specified value. Format: ISO 8601. Example: `created_at.lte=2018-07-18T10:51:18.139Z`
         * - `lt` (optional): Filter by the creation time. The time should be less than the specified value. Format: ISO 8601. Example: `created_at.lt=2018-07-18T10:51:18.139Z`
         *
         * **captured_at**
         * - `gte` (optional): Filter by the time of payment confirmation. The time should be greater than or equal to the specified value. Format: ISO 8601. Example: `captured_at.gte=2018-07-18T10:51:18.139Z`
         * - `gt` (optional): Filter by the time of payment confirmation. The time should be greater than the specified value. Format: ISO 8601. Example: `captured_at.gt=2018-07-18T10:51:18.139Z`
         * - `lte` (optional): Filter by the time of payment confirmation. The time should be less than or equal to the specified value. Format: ISO 8601. Example: `captured_at.lte=2018-07-18T10:51:18.139Z`
         * - `lt` (optional): Filter by the time of payment confirmation. The time should be less than the specified value. Format: ISO 8601. Example: `captured_at.lt=2018-07-18T10:51:18.139Z`
         *
         * **payment_method**
         * - `string` (optional): Filter by payment method code. Example: `payment_method=bank_card`
         *
         * **status**
         * - `string` (optional): Filter by payment status. Example: `status=succeeded`
         *
         * **limit**
         * - `number` (optional): The number of objects returned in the response. Possible values: from 1 to 100. Example: `limit=50`
         * - Default value: `10`
         *
         * **cursor**
         * - `string` (optional): Used to retrieve the next fragment of the list. Example: `cursor=37a5c87d-3984-51e8-a7f3-8de646d39ec15`
         * - Used as an indicator to retrieve the next fragment of the list. This should be used if there are more objects in the list than the number specified in the limit parameter. An example of how to use it is provided in the "Working with lists" documentation.
         *
         * **PaymentList**
         *
         * This is the response structure for the list of payments.
         *
         * **next_cursor**
         * - `string` (optional): Used to retrieve the next fragment of the list.
         *
         * **payments**
         * - `Payments.Payment[]` (optional): The list of payments.
         */
        list: this.getPaymentList,

        /**
         * ****Подтверждение платежа***
         *
         * Подтверждает вашу готовность принять платеж.
         * После подтверждения платеж перейдет в статус `succeeded`.
         * Это значит, что вы можете выдать товар или оказать услугу пользователю.
         * Подтвердить можно только платеж в статусе `waiting_for_capture`
         * и только в течение определенного времени (зависит от способа оплаты).
         * Если вы не подтвердите платеж в отведенное время, он автоматически
         * перейдет в статус `canceled`, и деньги вернутся пользователю.
         *
         * [Подробнее о подтверждении и отмене платежей](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#capture-and-cancel)
         *
         * @param paymentId - идентификатор платежа
         * @param payload - данные для подтверждения (сумма, чек, авиабилеты, распределение)
         * @param idempotenceKey - ключ идемпотентности (опционально)
         */
        capture: this.capturePaymentById as (
            paymentId: string,
            payload?: Payments.CapturePaymentRequest,
            idempotenceKey?: string,
        ) => Promise<Payments.IPayment>,
        /**
         * ****Отмена платежа****
         *
         * Отменяет платеж, находящийся в статусе `waiting_for_capture`.
         * Отмена платежа значит, что вы не готовы выдать пользователю товар или оказать услугу.
         * Как только вы отменяете платеж, мы начинаем возвращать деньги на счет плательщика.
         * Для платежей банковскими картами, из кошелька ЮMoney или через SberPay отмена происходит мгновенно.
         * Для остальных способов оплаты возврат может занимать до нескольких дней.
         *
         * [Подробнее о подтверждении и отмене платежей](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#capture-and-cancel)
         *
         * @param paymentId - идентификатор платежа
         * @param idempotenceKey - ключ идемпотентности (опционально)
         */
        cancel: this.cancelPaymentById as (paymentId: string, idempotenceKey?: string) => Promise<Payments.IPayment>,
    }
    /** Методы для работы с возвратами */
    public readonly refunds = {
        /**
         * ****Создание возврата****
         *
         * Создает возврат успешного платежа на указанную сумму.
         * Платеж можно вернуть только в течение трех лет с момента его создания.
         * Комиссия ЮKassa за проведение платежа не возвращается.
         *
         * @param refund - данные возврата
         * @param idempotenceKey - ключ идемпотентности (опционально)
         * @see https://yookassa.ru/developers/api#create_refund
         */
        create: this.createRefund as (
            refund: Refunds.CreateRefundRequest,
            idempotenceKey?: string,
        ) => Promise<Refunds.IRefund>,
        /**
         * ****Информация о возврате****
         *
         * Запрос позволяет получить информацию о текущем состоянии возврата по его уникальному идентификатору.
         * @see https://yookassa.ru/developers/api#get_refund
         */
        load: this.getRefundById,
        /**
         * ****Список возвратов****
         *
         * Запрос позволяет получить список возвратов, отфильтрованный по заданным критериям.
         *
         * [Подробнее о работе со списками](https://yookassa.ru/developers/using-api/lists)
         * @see https://yookassa.ru/developers/api#get_refunds_list
         */
        list: this.getRefundList,
    }
    /**
     * ****Методы для работы с чеками****
     *
     * С помощью API можно получать информацию о чеках, для которых вы отправили данные через ЮKassa.
     * @see https://yookassa.ru/developers/api#receipt
     */
    public readonly receipts = {
        /**
         * ****Создание чека****
         *
         * Используйте этот запрос при оплате с соблюдением требований 54-ФЗ, чтобы создать чек зачета предоплаты.
         * Если вы работаете по сценарию [Сначала платеж, потом чек](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#receipt-after-payment),
         * в запросе также нужно передавать данные для формирования чека прихода и чека возврата прихода.
         *
         * @param receipt - данные чека
         * @param idempotenceKey - ключ идемпотентности (опционально)
         * @see https://yookassa.ru/developers/api#create_receipt
         */
        create: this.createReceipt as (
            receipt: Receipts.CreateReceiptType,
            idempotenceKey?: string,
        ) => Promise<Receipts.ReceiptType>,
        /**
         * ****Информация о чеке****
         *
         * Запрос позволяет получить информацию о текущем состоянии чека по его уникальному идентификатору.
         */
        load: this.getReceiptById,
        /**
         * ****Список чеков****
         *
         * Запрос позволяет получить список чеков, отфильтрованный по заданным критериям.
         * Можно запросить чеки по конкретному платежу, чеки по конкретному возврату или все чеки магазина.
         *
         * [Подробнее о работе со списками](https://yookassa.ru/developers/using-api/lists)
         * @see https://yookassa.ru/developers/api#get_receipts_list
         */
        list: this.getReceiptList,
    }

    /**
     * ****Методы для работы с вебхуками****
     *
     * Вебхуки позволяют получать уведомления о событиях в ЮKassa.
     * **Требуется OAuth-токен** — функционал доступен только в рамках партнёрской программы.
     *
     * @see https://yookassa.ru/developers/api#webhook
     */
    public readonly webhooks = {
        /**
         * ****Создание вебхука****
         *
         * Создаёт вебхук для получения уведомлений о событиях.
         *
         * @param webhook - данные вебхука (event, url)
         * @param idempotenceKey - ключ идемпотентности (опционально)
         * @see https://yookassa.ru/developers/api#create_webhook
         */
        create: this.createWebhook as (webhook: CreateWebhookRequest, idempotenceKey?: string) => Promise<IWebhook>,
        /**
         * ****Список вебхуков****
         *
         * Возвращает список созданных вебхуков.
         * @see https://yookassa.ru/developers/api#get_webhook_list
         */
        list: this.getWebhookList as () => Promise<IWebhook[]>,
        /**
         * ****Удаление вебхука****
         *
         * Удаляет вебхук по идентификатору.
         *
         * @param webhookId - идентификатор вебхука
         * @see https://yookassa.ru/developers/api#delete_webhook
         */
        delete: this.deleteWebhook as (webhookId: string) => Promise<void>,
    }

    /**
     * ****Информация о магазине****
     *
     * Позволяет получить информацию о подключённом магазине.
     * **Требуется OAuth-токен** — функционал доступен только в рамках партнёрской программы.
     *
     * @see https://yookassa.ru/developers/api#get_me
     */
    public readonly shop = {
        /**
         * ****Получить информацию о магазине****
         *
         * Возвращает информацию об аккаунте: идентификатор, статус, доступные способы оплаты и т.д.
         * @see https://yookassa.ru/developers/api#get_me
         */
        info: this.getShopInfo as () => Promise<IShopInfo>,
    }
}

/** Кэш инстансов SDK по shop_id */
const clientCache = new Map<string, YooKassaSdk>()

/**
 * Creates or returns a cached YooKassaSdk instance.
 *
 * Instances are cached by `shop_id`, enabling connection reuse
 * and multi-store support in a single application.
 *
 * ## Instance Caching
 *
 * ```typescript
 * // Same shop_id = same instance (cached)
 * const sdk1 = YooKassa({ shop_id: '123', secret_key: 'key' });
 * const sdk2 = YooKassa({ shop_id: '123', secret_key: 'key' });
 * console.log(sdk1 === sdk2); // true
 *
 * // Different shops = different instances
 * const shopA = YooKassa({ shop_id: 'A', secret_key: 'keyA' });
 * const shopB = YooKassa({ shop_id: 'B', secret_key: 'keyB' });
 * ```
 *
 * ## Distributed Systems Configuration
 *
 * ```typescript
 * // For multiple server instances sharing API rate limits
 * const sdk = YooKassa({
 *     shop_id: process.env.YOOKASSA_SHOP_ID,
 *     secret_key: process.env.YOOKASSA_SECRET_KEY,
 *     maxRPS: 2,       // Low per-instance limit
 *     retries: 5,      // More retries for resilience
 *     timeout: 15000,  // Longer timeout
 * });
 * ```
 *
 * @param init - SDK configuration options
 * @param forceNew - Force create new instance (ignore cache)
 * @returns YooKassaSdk instance
 */
export function YooKassa(init: ConnectorOpts, forceNew = false): YooKassaSdk {
    const cacheKey = init.shop_id

    const cached = clientCache.get(cacheKey)
    if (!forceNew && cached) {
        return cached
    }

    const client = new YooKassaSdk(init)
    clientCache.set(cacheKey, client)
    return client
}

/**
 * Очищает кэш инстансов SDK.
 * Полезно при смене credentials или для освобождения памяти.
 *
 * @param shopId - ID магазина для удаления из кэша. Если не указан, очищается весь кэш.
 */
export function clearYooKassaCache(shopId?: string): void {
    if (shopId) {
        clientCache.delete(shopId)
    } else {
        clientCache.clear()
    }
}
