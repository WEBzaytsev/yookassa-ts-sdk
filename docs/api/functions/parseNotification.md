[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / parseNotification

# Function: parseNotification()

> **parseNotification**(`body`): [`WebhookNotification`](../interfaces/WebhookNotification.md)

Defined in: [src/webhooks/notification.ts:265](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/webhooks/notification.ts#L265)

Парсит и валидирует входящее уведомление от YooKassa.

**⚠️ Важно:** эта функция проверяет только **формат** объекта (наличие полей `type`, `event`, `object`).
Она **не подтверждает подлинность** уведомления — злоумышленник может отправить корректно
оформленное тело с чужим `payment.id`.

Для надёжной верификации используйте `sdk.webhooks.verify(body)`, который перезапрашивает
объект через API ЮKassa и возвращает его актуальное состояние.

## Parameters

### body

`unknown`

Тело запроса (req.body)

## Returns

[`WebhookNotification`](../interfaces/WebhookNotification.md)

Типизированное уведомление (только форма, не аутентичность)

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
