[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / CreateWebhookRequest

# Interface: CreateWebhookRequest

Defined in: [src/types/webhook.type.ts:34](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/webhook.type.ts#L34)

Запрос на создание вебхука

## Properties

### event

> **event**: `"payment.waiting_for_capture"` \| `"payment.succeeded"` \| `"payment.canceled"` \| `"refund.succeeded"` \| `"payout.succeeded"` \| `"payout.canceled"` \| `"deal.closed"` \| `"payment_method.active"`

Defined in: [src/types/webhook.type.ts:38](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/webhook.type.ts#L38)

Событие для уведомления

#### See

https://yookassa.ru/developers/api#create_webhook

***

### url

> **url**: `string`

Defined in: [src/types/webhook.type.ts:40](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/webhook.type.ts#L40)

URL, на который ЮKassa шлёт уведомления
