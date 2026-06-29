import { createHash } from 'node:crypto'
import type {
    CreatePaymentResponse,
    GetListResponse,
    GetPaymentListFilter,
    GetReceiptListFilter,
    GetRefundListFilter,
} from '../types/api.types'
import type { GetDealListFilter, SafeDeal, SafeDealRequest } from '../types/deal.type'
import type { CreateInvoiceRequest, Invoice } from '../types/invoice.type'
import type { Payments } from '../types/payments'
import type { Payouts } from '../types/payouts/payout.type'
import type { GetPayoutListFilter } from '../types/payouts/payoutListFilter.type'
import type { GetPayoutSearchFilter } from '../types/payouts/payoutSearchFilter.type'
import type { CreatePersonalDataRequest, PersonalData } from '../types/personalData.type'
import type { Receipts } from '../types/receipt'
import type { Refunds } from '../types/refunds'
import type { SavePaymentMethod, SavePaymentMethodData } from '../types/savedPaymentMethod.type'
import type { GetSbpBanksResponse, SbpParticipantBank } from '../types/sbpBanks.type'
import type { IShopInfo } from '../types/shop.type'
import type { CreateWebhookRequest, IWebhook, WebhookList } from '../types/webhook.type'
import type { PaymentNotification, RefundNotification } from '../webhooks/notification'
import {
    parseNotification,
    parsePaymentNotification,
    parseRefundNotification,
    WebhookValidationError,
} from '../webhooks/notification'
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
    /** **Список платежей**
     *
     * Возвращает платежи по фильтру. [Работа со списками](https://yookassa.ru/developers/using-api/lists)
     */
    protected getPaymentList = async (filter?: Omit<GetPaymentListFilter, 'cursor'>): Promise<Payments.IPayment[]> => {
        return this.fetchList<Payments.IPayment, GetPaymentListFilter>('/payments', filter)
    }
    /** Создаёт платёж
     * @param newPayment — данные платежа
     * @param idempotenceKey — ключ идемпотентности (опционально, генерируется автоматически)
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

    /** Подтверждает платёж по ID
     * @param paymentId — ID платежа
     * @param payload — сумма, чек, авиабилеты, распределение
     * @param idempotenceKey — ключ идемпотентности (опционально)
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

    /** Отменяет платёж по ID
     * @param paymentId — ID платежа
     * @param idempotenceKey — ключ идемпотентности (опционально)
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

    /** Создаёт возврат
     * @param newRefund — данные возврата
     * @param idempotenceKey — ключ идемпотентности (опционально)
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
    protected getReceiptById = async (receiptId: string): Promise<Receipts.IReceipt> => {
        return this.request<Receipts.IReceipt>({
            method: 'GET',
            endpoint: `/receipts/${receiptId}`,
        })
    }

    /** Создаёт чек
     * @param newReceipt — данные чека
     * @param idempotenceKey — ключ идемпотентности (опционально)
     */
    protected createReceipt = async (
        newReceipt: Receipts.CreateReceiptType,
        idempotenceKey?: string,
    ): Promise<Receipts.IReceipt> => {
        return this.request<Receipts.IReceipt>({
            method: 'POST',
            endpoint: '/receipts',
            data: newReceipt,
            requestId: idempotenceKey,
        })
    }

    protected getReceiptList = async (filter?: Omit<GetReceiptListFilter, 'cursor'>): Promise<Receipts.IReceipt[]> => {
        return this.fetchList<Receipts.IReceipt, GetReceiptListFilter>('/receipts', filter)
    }
    // ========== Receipts end ========== //

    // ========== Webhook verify ========== //
    /**
     * Верифицирует уведомление (payment или refund): перезапрашивает объект через API.
     * Возвращает нотификацию с актуальным состоянием из API.
     */
    protected verifyWebhookNotification = async (body: unknown): Promise<PaymentNotification | RefundNotification> => {
        const notification = parseNotification(body)
        const {
            event,
            object: { id },
        } = notification

        if (event.startsWith('payment.')) {
            return { type: 'notification', event, object: await this.getPaymentById(id) }
        }
        if (event.startsWith('refund.')) {
            return { type: 'notification', event, object: await this.getRefundById(id) }
        }

        throw new WebhookValidationError(
            `Unsupported event type for verification: '${event}'. Supported: payment.*, refund.*`,
            'UNSUPPORTED_EVENT',
        )
    }

    /**
     * Верифицирует уведомление о платеже: перезапрашивает объект через API.
     * Отклоняет события вне `payment.*`.
     * Возвращает нотификацию с актуальным платежом из API.
     */
    protected verifyPaymentNotification = async (body: unknown): Promise<PaymentNotification> => {
        const notification = parsePaymentNotification(body)
        return {
            type: 'notification',
            event: notification.event,
            object: await this.getPaymentById(notification.object.id),
        }
    }

    /**
     * Верифицирует уведомление о возврате: перезапрашивает объект через API.
     * Отклоняет события вне `refund.*`.
     * Возвращает нотификацию с актуальным возвратом из API.
     */
    protected verifyRefundNotification = async (body: unknown): Promise<RefundNotification> => {
        const notification = parseRefundNotification(body)
        return {
            type: 'notification',
            event: notification.event,
            object: await this.getRefundById(notification.object.id),
        }
    }
    // ========== Webhook verify end ========== //

    // ========== Webhooks ========== //
    /** Создаёт вебхук (нужен OAuth-токен)
     * @param webhook — данные вебхука
     * @param idempotenceKey — ключ идемпотентности (опционально)
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

    /** Возвращает список вебхуков (нужен OAuth-токен) */
    protected getWebhookList = async (): Promise<IWebhook[]> => {
        const response = await this.request<WebhookList>({
            method: 'GET',
            endpoint: '/webhooks',
            useOAuth: true,
        })
        return response.items
    }

    /** Удаляет вебхук по ID (нужен OAuth-токен)
     * @param webhookId — ID вебхука
     */
    protected deleteWebhook = async (webhookId: string): Promise<void> => {
        await this.request<Record<string, never>>({
            method: 'DELETE',
            endpoint: `/webhooks/${webhookId}`,
            useOAuth: true,
        })
    }
    // ========== Webhooks end ========== //

    // ========== Payouts ========== //
    protected getPayoutById = async (id: string): Promise<Payouts.IPayout> => {
        return this.request<Payouts.IPayout>({
            method: 'GET',
            endpoint: `/payouts/${id}`,
        })
    }

    protected getPayoutList = async (filter?: Omit<GetPayoutListFilter, 'cursor'>): Promise<Payouts.IPayout[]> => {
        return this.fetchList<Payouts.IPayout, GetPayoutListFilter>('/payouts', filter)
    }

    protected searchPayouts = async (filter?: Omit<GetPayoutSearchFilter, 'cursor'>): Promise<Payouts.IPayout[]> => {
        return this.fetchList<Payouts.IPayout, GetPayoutSearchFilter>('/payouts/search', filter)
    }

    protected createPayout = async (
        newPayout: Payouts.CreatePayoutRequest,
        idempotenceKey?: string,
    ): Promise<Payouts.IPayout> => {
        return this.request<Payouts.IPayout>({
            method: 'POST',
            endpoint: '/payouts',
            data: newPayout,
            requestId: idempotenceKey,
        })
    }
    // ========== Payouts end ========== //

    // ========== Sbp banks ========== //
    protected getSbpBanks = async (): Promise<SbpParticipantBank[]> => {
        const response = await this.request<GetSbpBanksResponse>({
            method: 'GET',
            endpoint: '/sbp_banks',
        })
        return response.items
    }
    // ========== Sbp banks end ========== //

    // ========== Saved payment methods ========== //
    protected createSavedPaymentMethod = async (
        data: SavePaymentMethodData,
        idempotenceKey?: string,
    ): Promise<SavePaymentMethod> => {
        return this.request<SavePaymentMethod>({
            method: 'POST',
            endpoint: '/payment_methods',
            data,
            requestId: idempotenceKey,
        })
    }

    protected getSavedPaymentMethodById = async (paymentMethodId: string): Promise<SavePaymentMethod> => {
        return this.request<SavePaymentMethod>({
            method: 'GET',
            endpoint: `/payment_methods/${paymentMethodId}`,
        })
    }
    // ========== Saved payment methods end ========== //

    // ========== Personal data ========== //
    protected createPersonalDataRecord = async (
        data: CreatePersonalDataRequest,
        idempotenceKey?: string,
    ): Promise<PersonalData> => {
        return this.request<PersonalData>({
            method: 'POST',
            endpoint: '/personal_data',
            data,
            requestId: idempotenceKey,
        })
    }

    protected getPersonalDataById = async (personalDataId: string): Promise<PersonalData> => {
        return this.request<PersonalData>({
            method: 'GET',
            endpoint: `/personal_data/${personalDataId}`,
        })
    }
    // ========== Personal data end ========== //

    // ========== Deals ========== //
    protected createDeal = async (data: SafeDealRequest, idempotenceKey?: string): Promise<SafeDeal> => {
        return this.request<SafeDeal>({
            method: 'POST',
            endpoint: '/deals',
            data,
            requestId: idempotenceKey,
        })
    }

    protected getDealList = async (filter?: Omit<GetDealListFilter, 'cursor'>): Promise<SafeDeal[]> => {
        return this.fetchList<SafeDeal, GetDealListFilter>('/deals', filter)
    }

    protected getDealById = async (dealId: string): Promise<SafeDeal> => {
        return this.request<SafeDeal>({
            method: 'GET',
            endpoint: `/deals/${dealId}`,
        })
    }
    // ========== Deals end ========== //

    // ========== Invoices ========== //
    protected createInvoice = async (data: CreateInvoiceRequest, idempotenceKey?: string): Promise<Invoice> => {
        return this.request<Invoice>({
            method: 'POST',
            endpoint: '/invoices',
            data,
            requestId: idempotenceKey,
        })
    }

    protected getInvoiceById = async (invoiceId: string): Promise<Invoice> => {
        return this.request<Invoice>({
            method: 'GET',
            endpoint: `/invoices/${invoiceId}`,
        })
    }
    // ========== Invoices end ========== //

    // ========== Shop ========== //
    /** Возвращает данные магазина (нужен OAuth-токен) */
    protected getShopInfo = async (): Promise<IShopInfo> => {
        return this.request<IShopInfo>({
            method: 'GET',
            endpoint: '/me',
            useOAuth: true,
        })
    }
    // ========== Shop end ========== //

    /** Методы работы с платежами */
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
         * **Платёж**
         *
         * Возвращает актуальное состояние платежа по ID.
         *
         * @see https://yookassa.ru/developers/api#get_payment
         */
        load: this.getPaymentById,

        /**
         * **Список платежей**
         *
         * Возвращает платежи по фильтру.
         *
         * @see https://yookassa.ru/developers/api#get_payment
         * @see https://yookassa.ru/developers/using-api/lists
         */
        list: this.getPaymentList,

        /**
         * **Подтверждение платежа**
         *
         * Подтверждает готовность принять платёж. После подтверждения статус — `succeeded`.
         * Доступно только для `waiting_for_capture` в пределах срока способа оплаты.
         * По истечении срока платёж перейдёт в `canceled`, деньги вернутся пользователю.
         *
         * @see https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#capture-and-cancel
         *
         * @param paymentId — ID платежа
         * @param payload — сумма, чек, авиабилеты, распределение
         * @param idempotenceKey — ключ идемпотентности (опционально)
         */
        capture: this.capturePaymentById as (
            paymentId: string,
            payload?: Payments.CapturePaymentRequest,
            idempotenceKey?: string,
        ) => Promise<Payments.IPayment>,
        /**
         * **Отмена платежа**
         *
         * Отменяет платёж в статусе `waiting_for_capture`. ЮKassa вернёт деньги плательщику.
         * Для карт, ЮMoney и SberPay — мгновенно; для остальных способов — до нескольких дней.
         *
         * @see https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#capture-and-cancel
         *
         * @param paymentId — ID платежа
         * @param idempotenceKey — ключ идемпотентности (опционально)
         */
        cancel: this.cancelPaymentById as (paymentId: string, idempotenceKey?: string) => Promise<Payments.IPayment>,
    }
    /** Методы работы с возвратами */
    public readonly refunds = {
        /**
         * **Создание возврата**
         *
         * Возвращает успешный платёж на указанную сумму. Срок — до трёх лет с создания платежа.
         * Комиссия ЮKassa не возвращается.
         *
         * @param refund — данные возврата
         * @param idempotenceKey — ключ идемпотентности (опционально)
         * @see https://yookassa.ru/developers/api#create_refund
         */
        create: this.createRefund as (
            refund: Refunds.CreateRefundRequest,
            idempotenceKey?: string,
        ) => Promise<Refunds.IRefund>,
        /**
         * **Возврат**
         *
         * Возвращает актуальное состояние возврата по ID.
         * @see https://yookassa.ru/developers/api#get_refund
         */
        load: this.getRefundById,
        /**
         * **Список возвратов**
         *
         * Возвращает возвраты по фильтру.
         *
         * @see https://yookassa.ru/developers/using-api/lists
         * @see https://yookassa.ru/developers/api#get_refunds_list
         */
        list: this.getRefundList,
    }
    /**
     * **Методы работы с чеками**
     *
     * Получение информации о чеках, отправленных через ЮKassa.
     * @see https://yookassa.ru/developers/api#receipt
     */
    public readonly receipts = {
        /**
         * **Создание чека**
         *
         * Создаёт чек зачёта предоплаты по 54-ФЗ. При сценарии
         * [Сначала платёж, потом чек](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#receipt-after-payment)
         * передайте также данные чека прихода и возврата прихода.
         *
         * @param receipt — данные чека
         * @param idempotenceKey — ключ идемпотентности (опционально)
         * @see https://yookassa.ru/developers/api#create_receipt
         */
        create: this.createReceipt as (
            receipt: Receipts.CreateReceiptType,
            idempotenceKey?: string,
        ) => Promise<Receipts.IReceipt>,
        /**
         * **Чек**
         *
         * Возвращает актуальное состояние чека по ID.
         */
        load: this.getReceiptById,
        /**
         * **Список чеков**
         *
         * Возвращает чеки по фильтру: по платежу, возврату или все чеки магазина.
         *
         * @see https://yookassa.ru/developers/using-api/lists
         * @see https://yookassa.ru/developers/api#get_receipts_list
         */
        list: this.getReceiptList,
    }

    /**
     * **Методы работы с выплатами**
     *
     * Создание выплат физлицам и получение информации о них.
     * Доступно для обычных выплат и Безопасной сделки.
     *
     * @see https://yookassa.ru/developers/payouts/overview
     */
    public readonly payouts = {
        /**
         * **Создание выплаты**
         *
         * Создаёт выплату физлицу на указанное платёжное средство.
         *
         * @param payout — данные выплаты
         * @param idempotenceKey — ключ идемпотентности (опционально)
         * @see https://yookassa.ru/developers/api#create_payout
         */
        create: this.createPayout as (
            payout: Payouts.CreatePayoutRequest,
            idempotenceKey?: string,
        ) => Promise<Payouts.IPayout>,
        /**
         * **Выплата**
         *
         * Возвращает актуальное состояние выплаты по ID.
         *
         * @see https://yookassa.ru/developers/api#get_payout
         */
        load: this.getPayoutById,
        /**
         * **Список выплат**
         *
         * Возвращает выплаты по фильтру (`created_at`, `succeeded_at`).
         *
         * @see https://yookassa.ru/developers/api#get_payouts_list
         */
        list: this.getPayoutList,
        /**
         * **Поиск выплат**
         *
         * Ищет по `metadata` и периоду `created_at` (последние 3 месяца).
         *
         * @see https://yookassa.ru/developers/api#search_payouts
         */
        search: this.searchPayouts as (filter?: Omit<GetPayoutSearchFilter, 'cursor'>) => Promise<Payouts.IPayout[]>,
    }

    /** Участники СБП — справочник для выплат через СБП */
    public readonly sbpBanks = {
        /** @see https://yookassa.ru/developers/api#get_sbp_banks */
        list: this.getSbpBanks as () => Promise<SbpParticipantBank[]>,
    }

    /** Создание и получение сохранённых способов оплаты (привязка карты и т. п.) */
    public readonly paymentMethods = {
        /**
         * @see https://yookassa.ru/developers/api#create_payment_method
         */
        create: this.createSavedPaymentMethod as (
            data: SavePaymentMethodData,
            idempotenceKey?: string,
        ) => Promise<SavePaymentMethod>,
        /**
         * @see https://yookassa.ru/developers/api#get_payment_method
         */
        load: this.getSavedPaymentMethodById as (paymentMethodId: string) => Promise<SavePaymentMethod>,
    }

    /** Персональные данные получателя (выплаты с проверкой, выписки) */
    public readonly personalData = {
        /**
         * @see https://yookassa.ru/developers/api#create_personal_data
         */
        create: this.createPersonalDataRecord as (
            data: CreatePersonalDataRequest,
            idempotenceKey?: string,
        ) => Promise<PersonalData>,
        /**
         * @see https://yookassa.ru/developers/api#get_personal_data
         */
        load: this.getPersonalDataById as (personalDataId: string) => Promise<PersonalData>,
    }

    /** Безопасная сделка. */
    public readonly deals = {
        /**
         * @see https://yookassa.ru/developers/api#create_deal
         */
        create: this.createDeal as (data: SafeDealRequest, idempotenceKey?: string) => Promise<SafeDeal>,
        /**
         * @see https://yookassa.ru/developers/api#get_deals_list
         */
        list: this.getDealList as (filter?: Omit<GetDealListFilter, 'cursor'>) => Promise<SafeDeal[]>,
        /**
         * @see https://yookassa.ru/developers/api#get_deal
         */
        load: this.getDealById as (dealId: string) => Promise<SafeDeal>,
    }

    /** Выставленные счета (инвойсы). */
    public readonly invoices = {
        /**
         * @see https://yookassa.ru/developers/api#create_invoice
         */
        create: this.createInvoice as (data: CreateInvoiceRequest, idempotenceKey?: string) => Promise<Invoice>,
        /**
         * @see https://yookassa.ru/developers/api#get_invoice
         */
        load: this.getInvoiceById as (invoiceId: string) => Promise<Invoice>,
    }

    /**
     * **Методы работы с вебхуками**
     *
     * Уведомления о событиях ЮKassa.
     * **Нужен OAuth-токен** — только в партнёрской программе.
     *
     * @see https://yookassa.ru/developers/api#webhook
     */
    public readonly webhooks = {
        /**
         * **Создание вебхука**
         *
         * Регистрирует вебхук для уведомлений о событиях.
         *
         * @param webhook — `event`, `url`
         * @param idempotenceKey — ключ идемпотентности (опционально)
         * @see https://yookassa.ru/developers/api#create_webhook
         */
        create: this.createWebhook as (webhook: CreateWebhookRequest, idempotenceKey?: string) => Promise<IWebhook>,
        /**
         * **Список вебхуков**
         *
         * Возвращает зарегистрированные вебхуки.
         * @see https://yookassa.ru/developers/api#get_webhook_list
         */
        list: this.getWebhookList as () => Promise<IWebhook[]>,
        /**
         * **Удаление вебхука**
         *
         * Удаляет вебхук по ID.
         *
         * @param webhookId — ID вебхука
         * @see https://yookassa.ru/developers/api#delete_webhook
         */
        delete: this.deleteWebhook as (webhookId: string) => Promise<void>,
        /**
         * **Верификация уведомления (payment или refund)**
         *
         * Подтверждает подлинность уведомления **перезапросом объекта через API**.
         * Единственный надёжный способ убедиться, что уведомление от ЮKassa.
         *
         * Возвращает нотификацию с актуальным объектом:
         * - `payment.*` → `PaymentNotification` с `IPayment`
         * - `refund.*` → `RefundNotification` с `IRefund`
         *
         * @param body — тело запроса (`req.body`)
         * @throws {WebhookValidationError} Некорректное тело или неподдерживаемый тип события
         */
        verify: this.verifyWebhookNotification,
        /**
         * **Верификация уведомления о платеже**
         *
         * Как `verify`, но принимает только `payment.*`.
         * Отклоняет `refund.*` и прочие — `WebhookValidationError`.
         * Возвращает `PaymentNotification` с актуальным `IPayment`.
         *
         * @param body — тело запроса (`req.body`)
         * @throws {WebhookValidationError} Некорректное тело или событие не `payment.*`
         */
        verifyPayment: this.verifyPaymentNotification,
        /**
         * **Верификация уведомления о возврате**
         *
         * Как `verify`, но принимает только `refund.*`.
         * Отклоняет `payment.*` и прочие — `WebhookValidationError`.
         * Возвращает `RefundNotification` с актуальным `IRefund`.
         *
         * @param body — тело запроса (`req.body`)
         * @throws {WebhookValidationError} Некорректное тело или событие не `refund.*`
         */
        verifyRefund: this.verifyRefundNotification,
    }

    /**
     * **Магазин**
     *
     * Данные подключённого магазина.
     * **Нужен OAuth-токен** — только в партнёрской программе.
     *
     * @see https://yookassa.ru/developers/api#get_me
     */
    public readonly shop = {
        /**
         * **Данные магазина**
         *
         * Возвращает аккаунт: ID, статус, способы оплаты и т. д.
         * @see https://yookassa.ru/developers/api#get_me
         */
        info: this.getShopInfo as () => Promise<IShopInfo>,
    }
}

/** Кэш экземпляров SDK по хэшу credentials */
const clientCache = new Map<string, { client: YooKassaSdk; shopId: string }>()

/**
 * Creates or returns a cached YooKassaSdk instance.
 *
 * Instances are cached by a hash of all credential fields (`shop_id`, `secret_key`,
 * `token`, `endpoint`, `proxy`), enabling connection reuse while ensuring that
 * changing any credential always produces a new instance (safe key rotation).
 *
 * ## Instance Caching
 *
 * ```typescript
 * // Same credentials = same instance (cached)
 * const sdk1 = YooKassa({ shop_id: '123', secret_key: 'key' });
 * const sdk2 = YooKassa({ shop_id: '123', secret_key: 'key' });
 * console.log(sdk1 === sdk2); // true
 *
 * // Different secret = different instance (safe rotation)
 * const oldSdk = YooKassa({ shop_id: '123', secret_key: 'old' });
 * const newSdk = YooKassa({ shop_id: '123', secret_key: 'new' });
 * console.log(oldSdk === newSdk); // false
 *
 * // Different shops = different instances
 * const shopA = YooKassa({ shop_id: 'A', secret_key: 'keyA' });
 * const shopB = YooKassa({ shop_id: 'B', secret_key: 'keyB' });
 * ```
 *
 * @param init - SDK configuration options
 * @param forceNew - Force create new instance (ignore cache)
 * @returns YooKassaSdk instance
 */
export function YooKassa(init: ConnectorOpts, forceNew = false): YooKassaSdk {
    const cacheKey = createHash('sha256')
        .update(`${init.shop_id}|${init.secret_key}|${init.token ?? ''}|${init.endpoint ?? ''}|${init.proxy ?? ''}`)
        .digest('hex')

    const cached = clientCache.get(cacheKey)
    if (!forceNew && cached) {
        return cached.client
    }

    const client = new YooKassaSdk(init)
    clientCache.set(cacheKey, { client, shopId: init.shop_id })
    return client
}

/**
 * Очищает кэш экземпляров SDK.
 * Полезно при смене credentials или для освобождения памяти.
 *
 * @param shopId — ID магазина для удаления из кэша; без параметра — очистка всего кэша
 */
export function clearYooKassaCache(shopId?: string): void {
    if (!shopId) {
        clientCache.clear()
        return
    }
    for (const [key, entry] of clientCache) {
        if (entry.shopId === shopId) {
            clientCache.delete(key)
        }
    }
}
