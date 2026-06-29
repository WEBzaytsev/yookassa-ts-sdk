[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / WebhookNotification

# Interface: WebhookNotification\<T\>

Defined in: [src/webhooks/notification.ts:31](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/webhooks/notification.ts#L31)

Входящее уведомление YooKassa

## Type Parameters

### T

`T` = [`IPayment`](../YooKassa-SDK-API-Reference/namespaces/Payments/interfaces/IPayment.md) \| [`IRefund`](../YooKassa-SDK-API-Reference/namespaces/Refunds/interfaces/IRefund.md)

## Properties

### event

> **event**: `"payment.waiting_for_capture"` \| `"payment.succeeded"` \| `"payment.canceled"` \| `"refund.succeeded"` \| `"payout.succeeded"` \| `"payout.canceled"` \| `"deal.closed"` \| `"payment_method.active"`

Defined in: [src/webhooks/notification.ts:35](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/webhooks/notification.ts#L35)

Событие уведомления

***

### object

> **object**: `T`

Defined in: [src/webhooks/notification.ts:37](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/webhooks/notification.ts#L37)

Связанный объект (платёж, возврат, выплата, сделка)

***

### type

> **type**: `"notification"`

Defined in: [src/webhooks/notification.ts:33](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/webhooks/notification.ts#L33)

Тип объекта — всегда `notification`
