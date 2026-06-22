[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / parsePaymentNotification

# Function: parsePaymentNotification()

> **parsePaymentNotification**(`body`): [`PaymentNotification`](../type-aliases/PaymentNotification.md)

Defined in: [src/webhooks/notification.ts:296](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/webhooks/notification.ts#L296)

Типизированный парсер для уведомлений о платежах.

## Parameters

### body

`unknown`

Тело запроса

## Returns

[`PaymentNotification`](../type-aliases/PaymentNotification.md)

Уведомление с типизированным объектом платежа

## Throws

Если событие не относится к платежам
