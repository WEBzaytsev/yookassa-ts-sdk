[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / parseRefundNotification

# Function: parseRefundNotification()

> **parseRefundNotification**(`body`): [`RefundNotification`](../type-aliases/RefundNotification.md)

Defined in: [src/webhooks/notification.ts:290](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/webhooks/notification.ts#L290)

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
