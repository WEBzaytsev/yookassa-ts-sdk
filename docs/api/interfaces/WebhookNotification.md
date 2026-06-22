[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / WebhookNotification

# Interface: WebhookNotification\<T\>

Defined in: [src/webhooks/notification.ts:31](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/webhooks/notification.ts#L31)

Входящее уведомление от YooKassa

## Type Parameters

### T

`T` = [`IPayment`](../YooKassa-SDK-API-Reference/namespaces/Payments/interfaces/IPayment.md) \| [`IRefund`](../YooKassa-SDK-API-Reference/namespaces/Refunds/interfaces/IRefund.md)

## Properties

### event

> **event**: `"payment.waiting_for_capture"` \| `"payment.succeeded"` \| `"payment.canceled"` \| `"refund.succeeded"` \| `"payout.succeeded"` \| `"payout.canceled"` \| `"deal.closed"` \| `"payment_method.active"`

Defined in: [src/webhooks/notification.ts:35](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/webhooks/notification.ts#L35)

Событие, о котором уведомляет YooKassa

***

### object

> **object**: `T`

Defined in: [src/webhooks/notification.ts:37](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/webhooks/notification.ts#L37)

Объект, связанный с событием (платёж, возврат, выплата, сделка)

***

### type

> **type**: `"notification"`

Defined in: [src/webhooks/notification.ts:33](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/webhooks/notification.ts#L33)

Тип объекта — всегда 'notification'
