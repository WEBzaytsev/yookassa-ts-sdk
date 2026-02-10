[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / CreateWebhookRequest

# Interface: CreateWebhookRequest

Defined in: [src/types/webhook.type.ts:32](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e5153b54297e1c5c82db159e94d75578d740e3cf/src/types/webhook.type.ts#L32)

Запрос на создание вебхука

## Properties

### event

> **event**: `"payment.waiting_for_capture"` \| `"payment.succeeded"` \| `"payment.canceled"` \| `"refund.succeeded"` \| `"payout.succeeded"` \| `"payout.canceled"` \| `"deal.closed"`

Defined in: [src/types/webhook.type.ts:36](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e5153b54297e1c5c82db159e94d75578d740e3cf/src/types/webhook.type.ts#L36)

Событие, о котором нужно уведомлять

#### See

https://yookassa.ru/developers/api#create_webhook

***

### url

> **url**: `string`

Defined in: [src/types/webhook.type.ts:38](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e5153b54297e1c5c82db159e94d75578d740e3cf/src/types/webhook.type.ts#L38)

URL, на который ЮKassa будет отправлять уведомления
