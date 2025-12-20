[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / parseNotification

# Function: parseNotification()

> **parseNotification**(`body`): [`WebhookNotification`](../interfaces/WebhookNotification.md)

Defined in: [src/webhooks/notification.ts:242](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/webhooks/notification.ts#L242)

Парсит и валидирует входящее уведомление от YooKassa.

## Parameters

### body

`unknown`

Тело запроса (req.body)

## Returns

[`WebhookNotification`](../interfaces/WebhookNotification.md)

Типизированное уведомление

## Throws

Если формат уведомления некорректен

## Example

```ts
import { parseNotification } from 'yookassa-ts-sdk'

app.post('/webhook', (req, res) => {
    try {
        const notification = parseNotification(req.body)

        switch (notification.event) {
            case 'payment.succeeded':
                const payment = notification.object
                console.log('Payment succeeded:', payment.id)
                break
            case 'payment.canceled':
                console.log('Payment canceled:', notification.object.id)
                break
            case 'refund.succeeded':
                console.log('Refund succeeded:', notification.object.id)
                break
        }

        res.status(200).send('OK')
    } catch (error) {
        console.error('Invalid webhook:', error)
        res.status(400).send('Bad Request')
    }
})
```
