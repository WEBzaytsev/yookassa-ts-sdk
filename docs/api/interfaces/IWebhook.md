[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IWebhook

# Interface: IWebhook

Defined in: [src/types/webhook.type.ts:24](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/webhook.type.ts#L24)

Вебхук для уведомлений о событиях

## Properties

### event

> **event**: `"payment.waiting_for_capture"` \| `"payment.succeeded"` \| `"payment.canceled"` \| `"refund.succeeded"` \| `"payout.succeeded"` \| `"payout.canceled"` \| `"deal.closed"` \| `"payment_method.active"`

Defined in: [src/types/webhook.type.ts:28](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/webhook.type.ts#L28)

Событие уведомления

***

### id

> **id**: `string`

Defined in: [src/types/webhook.type.ts:26](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/webhook.type.ts#L26)

ID вебхука

***

### url

> **url**: `string`

Defined in: [src/types/webhook.type.ts:30](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/webhook.type.ts#L30)

URL уведомлений
