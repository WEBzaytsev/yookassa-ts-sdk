[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / parseRefundNotification

# Function: parseRefundNotification()

> **parseRefundNotification**(`body`): [`RefundNotification`](../type-aliases/RefundNotification.md)

Defined in: [src/webhooks/notification.ts:290](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/webhooks/notification.ts#L290)

Типизированный парсер для уведомлений о возвратах.

## Parameters

### body

`unknown`

Тело запроса

## Returns

[`RefundNotification`](../type-aliases/RefundNotification.md)

Уведомление с типизированным объектом возврата

## Throws

Если событие не относится к возвратам
