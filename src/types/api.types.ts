import type { Payments } from './payments/payment.type'
import type { PaymentMethodsEnum } from './payments/paymentMethod.type'
import type { Refunds } from './refunds/refund.type'

/** Фильтр по времени. Формат ISO 8601. Пример: `created_at.gte=2018-07-18T10:51:18.139Z` */
export type DateFilter = {
    /** Не раньше указанного момента (включительно) */
    gte?: string
    /** Позже указанного момента */
    gt?: string
    /** Не позже указанного момента (включительно) */
    lte?: string
    /** Раньше указанного момента */
    lt?: string
}

export type GetPaymentListFilter = {
    /** Фильтр по времени создания */
    created_at?: DateFilter
    /** Фильтр по времени подтверждения */
    captured_at?: DateFilter
    /** Фильтр по [способу оплаты](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-methods#all)
     *
     * @example `payment_method=bank_card`
     */
    payment_method?: PaymentMethodsEnum
    /** Фильтр по статусу платежа
     * @example `status=succeeded` */
    status?: Payments.PaymentStatus
    /**
     * Число объектов в ответе: от 1 до 100.
     * @example `limit=50`
     * @default 10
     */
    limit?: number
    /**
     * Указатель на следующий фрагмент списка — значение `next_cursor` из предыдущего ответа.
     * Используйте, если объектов больше, чем `limit`.
     * @example `cursor=37a5c87d-3984-51e8-a7f3-8de646d39ec15`
     * @see [Пагинация](https://yookassa.ru/developers/using-api/lists#pagination)
     */
    cursor?: string
}

export type GetRefundListFilter = Omit<GetPaymentListFilter, 'captured_at' | 'payment_method'> & {
    /**
     * ID платежа — все возвраты по платежу.
     * @example `payment_id=1da5c87d-0984-50e8-a7f3-8de646dd9ec9`
     */
    payment_id?: string
    /**
     * Статус возврата:
     * - `pending` — создан, обрабатывается;
     * - `succeeded` — завершён, сумма переведена пользователю (финальный);
     * - `canceled` — отменён, детали в `cancellation_details` (финальный).
     */
    status?: Refunds.RefundStatus
}

export type GetReceiptListFilter = Pick<GetRefundListFilter, 'payment_id' | 'cursor'> & {
    /** ID возврата — все чеки по возврату. Передайте либо `payment_id`, либо `refund_id`.
     * @example `refund_id=1da5c87d-0984-50e8-a7f3-8de646dd9ec9`
     */
    refund_id?: string
}

export type GetListResponse<T> = {
    type: 'list'
    /** Массив объектов */
    items: T[]
    /** Указатель на следующий фрагмент списка */
    next_cursor?: string
}

/** Ответ — [объект платежа](https://yookassa.ru/developers/api#payment_object) в актуальном статусе */
export type CreatePaymentResponse = Payments.IPayment

export type YooKassaErrResponse = {
    type: 'error'
    id: string
    code: string
    description: string
    /**
     * Дополнительная причина отказа при `code: 'refusal'`.
     * Возвращается при нарушении правил бизнес-логики.
     */
    reason?: string
}

export class YooKassaErr extends Error {
    id: string
    constructor(err: YooKassaErrResponse) {
        super(err.description)
        this.name = err.code
        this.id = err.id
    }
}
