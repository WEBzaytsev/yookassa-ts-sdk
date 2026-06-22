[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / parseRefundNotification

# Function: parseRefundNotification()

> **parseRefundNotification**(`body`): [`RefundNotification`](../type-aliases/RefundNotification.md)

Defined in: [src/webhooks/notification.ts:313](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/webhooks/notification.ts#L313)

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
