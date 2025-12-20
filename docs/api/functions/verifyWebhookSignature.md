[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / verifyWebhookSignature

# Function: verifyWebhookSignature()

> **verifyWebhookSignature**(`options`): `boolean`

Defined in: [src/webhooks/notification.ts:395](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/webhooks/notification.ts#L395)

Валидирует подпись входящего вебхука от YooKassa.

YooKassa подписывает вебхуки с помощью HMAC SHA-256 алгоритма.
Подпись вычисляется от raw body запроса с использованием secret key вебхука.
Результат передаётся в заголовке `X-YooKassa-Signature` в формате hex (64 символа).

**Механизм валидации:**
1. Получить raw body запроса (как строка или Buffer)
2. Вычислить HMAC SHA-256 от body с использованием secret key
3. Сравнить вычисленную подпись с подписью из заголовка `X-YooKassa-Signature`

## Parameters

### options

[`WebhookSignatureValidationOptions`](../interfaces/WebhookSignatureValidationOptions.md)

Опции валидации

## Returns

`boolean`

true, если подпись валидна

## Throws

Если подпись невалидна или отсутствует

## See

 - https://yookassa.ru/developers/using-api/webhooks#security
 - https://yookassa.ru/developers/using-api/webhooks#security

## Examples

```ts
import { verifyWebhookSignature, parseNotification } from '@webzaytsev/yookassa-ts-sdk'

app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
    try {
        // Валидация подписи
        const signature = req.headers['x-yookassa-signature'] as string
        if (!signature) {
            return res.status(401).send('Missing signature')
        }

        verifyWebhookSignature({
            secretKey: process.env.YOOKASSA_SECRET_KEY!,
            body: req.body, // raw body (Buffer или string)
            signature,
        })

        // Парсинг уведомления
        const notification = parseNotification(JSON.parse(req.body.toString()))

        // Обработка события
        if (notification.event === 'payment.succeeded') {
            console.log('Payment succeeded:', notification.object.id)
        }

        res.status(200).send('OK')
    } catch (error) {
        if (error instanceof WebhookValidationError) {
            console.error('Invalid signature:', error.message)
            return res.status(401).send('Invalid signature')
        }
        throw error
    }
})
```

```ts
// Для Express с body-parser
import express from 'express'
import { verifyWebhookSignature } from '@webzaytsev/yookassa-ts-sdk'

const app = express()

// Middleware для сохранения raw body
app.use('/webhook', express.raw({ type: 'application/json' }))

app.post('/webhook', (req, res) => {
    const signature = req.headers['x-yookassa-signature'] as string

    verifyWebhookSignature({
        secretKey: process.env.YOOKASSA_SECRET_KEY!,
        body: req.body, // Buffer
        signature,
    })

    // ...
})
```
