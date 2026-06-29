[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / parseNotification

# Function: parseNotification()

> **parseNotification**(`body`): [`WebhookNotification`](../interfaces/WebhookNotification.md)

Defined in: [src/webhooks/notification.ts:261](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/webhooks/notification.ts#L261)

Парсит и валидирует входящее уведомление YooKassa.

**⚠️ Важно:** функция проверяет только **формат** (поля `type`, `event`, `object`).
Она **не подтверждает подлинность** — злоумышленник может отправить корректное тело с чужим `payment.id`.

Для надёжной верификации вызывайте `sdk.webhooks.verify(body)` — перезапрос объекта через API ЮKassa.

## Parameters

### body

`unknown`

— тело запроса (`req.body`)

## Returns

[`WebhookNotification`](../interfaces/WebhookNotification.md)

Типизированное уведомление (только форма, не аутентичность)

## Throws

Некорректный формат

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
