/** События вебхуков */
export enum WebhookEventEnum {
    /** Платёж ожидает подтверждения */
    'payment.waiting_for_capture' = 'payment.waiting_for_capture',
    /** Платёж успешно завершён */
    'payment.succeeded' = 'payment.succeeded',
    /** Платёж отменён */
    'payment.canceled' = 'payment.canceled',
    /** Возврат успешно завершён */
    'refund.succeeded' = 'refund.succeeded',
    /** Выплата успешно завершена */
    'payout.succeeded' = 'payout.succeeded',
    /** Выплата отменена */
    'payout.canceled' = 'payout.canceled',
    /** Сделка закрыта */
    'deal.closed' = 'deal.closed',
    /** Способ оплаты активен (привязка на нулевую сумму завершена) */
    'payment_method.active' = 'payment_method.active',
}

export type WebhookEvent = `${WebhookEventEnum}`

/** Вебхук для уведомлений о событиях */
export interface IWebhook {
    /** ID вебхука */
    id: string
    /** Событие уведомления */
    event: WebhookEvent
    /** URL уведомлений */
    url: string
}

/** Запрос на создание вебхука */
export interface CreateWebhookRequest {
    /** Событие для уведомления
     * @see https://yookassa.ru/developers/api#create_webhook
     */
    event: WebhookEvent
    /** URL, на который ЮKassa шлёт уведомления */
    url: string
}

/** Список вебхуков */
export interface WebhookList {
    type: 'list'
    items: IWebhook[]
}
