[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IWebhook

# Interface: IWebhook

Defined in: [src/types/webhook.type.ts:22](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/webhook.type.ts#L22)

Вебхук для получения уведомлений о событиях

## Properties

### event

> **event**: `"payment.waiting_for_capture"` \| `"payment.succeeded"` \| `"payment.canceled"` \| `"refund.succeeded"` \| `"payout.succeeded"` \| `"payout.canceled"` \| `"deal.closed"`

Defined in: [src/types/webhook.type.ts:26](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/webhook.type.ts#L26)

Событие, о котором уведомляет вебхук

***

### id

> **id**: `string`

Defined in: [src/types/webhook.type.ts:24](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/webhook.type.ts#L24)

Идентификатор вебхука

***

### url

> **url**: `string`

Defined in: [src/types/webhook.type.ts:28](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/webhook.type.ts#L28)

URL для уведомлений
