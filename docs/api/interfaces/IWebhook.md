[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IWebhook

# Interface: IWebhook

Defined in: [src/types/webhook.type.ts:22](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e5153b54297e1c5c82db159e94d75578d740e3cf/src/types/webhook.type.ts#L22)

Вебхук для получения уведомлений о событиях

## Properties

### event

> **event**: `"payment.waiting_for_capture"` \| `"payment.succeeded"` \| `"payment.canceled"` \| `"refund.succeeded"` \| `"payout.succeeded"` \| `"payout.canceled"` \| `"deal.closed"`

Defined in: [src/types/webhook.type.ts:26](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e5153b54297e1c5c82db159e94d75578d740e3cf/src/types/webhook.type.ts#L26)

Событие, о котором уведомляет вебхук

***

### id

> **id**: `string`

Defined in: [src/types/webhook.type.ts:24](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e5153b54297e1c5c82db159e94d75578d740e3cf/src/types/webhook.type.ts#L24)

Идентификатор вебхука

***

### url

> **url**: `string`

Defined in: [src/types/webhook.type.ts:28](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e5153b54297e1c5c82db159e94d75578d740e3cf/src/types/webhook.type.ts#L28)

URL для уведомлений
