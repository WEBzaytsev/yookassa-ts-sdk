[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / parsePaymentNotification

# Function: parsePaymentNotification()

> **parsePaymentNotification**(`body`): [`PaymentNotification`](../type-aliases/PaymentNotification.md)

Defined in: [src/webhooks/notification.ts:273](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/421052f4b89e2476891b70faab4f1b4ec3acb883/src/webhooks/notification.ts#L273)

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
