[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / parsePaymentNotification

# Function: parsePaymentNotification()

> **parsePaymentNotification**(`body`): [`PaymentNotification`](../type-aliases/PaymentNotification.md)

Defined in: [src/webhooks/notification.ts:292](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/webhooks/notification.ts#L292)

Парсит уведомления о платежах.

## Parameters

### body

`unknown`

— тело запроса

## Returns

[`PaymentNotification`](../type-aliases/PaymentNotification.md)

Уведомление с типизированным платежом

## Throws

Событие не относится к платежам
