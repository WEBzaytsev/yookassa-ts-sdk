/** События для вебхуков */
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
}

export type WebhookEvent = `${WebhookEventEnum}`

/** Вебхук для получения уведомлений о событиях */
export interface IWebhook {
    /** Идентификатор вебхука */
    id: string
    /** Событие, о котором уведомляет вебхук */
    event: WebhookEvent
    /** URL для уведомлений */
    url: string
}

/** Запрос на создание вебхука */
export interface CreateWebhookRequest {
    /** Событие, о котором нужно уведомлять
     * @see https://yookassa.ru/developers/api#create_webhook
     */
    event: WebhookEvent
    /** URL, на который ЮKassa будет отправлять уведомления */
    url: string
}

/** Список вебхуков */
export interface WebhookList {
    type: 'list'
    items: IWebhook[]
}
