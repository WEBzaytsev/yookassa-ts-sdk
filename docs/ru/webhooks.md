# Вебхуки

## Управление вебхуками (Партнёрское API)

> **Важно:** Вебхуки требуют OAuth-токен. Функционал доступен только в рамках [партнёрской программы](https://yookassa.ru/developers/partners-api/basics).

### Создание вебхука

```ts
const webhook = await sdk.webhooks.create({
    event: 'payment.succeeded',
    url: 'https://example.com/webhook',
});
```

### Список вебхуков

```ts
const webhooks = await sdk.webhooks.list();
```

### Удаление вебхука

```ts
await sdk.webhooks.delete('webhook_id');
```

### Справочник API

| Метод | Описание |
| --- | --- |
| `create(data, idempotenceKey?)` | Создать вебхук |
| `list()` | Список вебхуков |
| `delete(id)` | Удалить вебхук |

---

## Входящие уведомления

SDK предоставляет хелперы для обработки входящих уведомлений от YooKassa.

### Парсинг уведомлений

```ts
import { parseNotification, isYooKassaIP, WebhookValidationError } from '@webzaytsev/yookassa-ts-sdk'

app.post('/webhook', (req, res) => {
    // Опционально: проверка IP-адреса
    const clientIP = req.ip || req.headers['x-forwarded-for']
    if (!isYooKassaIP(clientIP)) {
        return res.status(403).send('Forbidden')
    }

    try {
        const notification = parseNotification(req.body)

        switch (notification.event) {
            case 'payment.succeeded':
                console.log('Платёж успешен:', notification.object.id)
                // notification.object типизирован как IPayment
                break
            case 'payment.waiting_for_capture':
                console.log('Платёж ожидает подтверждения:', notification.object.id)
                break
            case 'payment.canceled':
                console.log('Платёж отменён:', notification.object.id)
                break
            case 'refund.succeeded':
                console.log('Возврат успешен:', notification.object.id)
                break
        }

        res.status(200).send('OK')
    } catch (error) {
        if (error instanceof WebhookValidationError) {
            console.error('Невалидный вебхук:', error.message)
            return res.status(400).send('Bad Request')
        }
        throw error
    }
})
```

### Типизированные парсеры

```ts
import { parsePaymentNotification, parseRefundNotification } from '@webzaytsev/yookassa-ts-sdk'

// Только для событий платежей
const paymentNotification = parsePaymentNotification(req.body)
// paymentNotification.object — это IPayment

// Только для событий возвратов
const refundNotification = parseRefundNotification(req.body)
// refundNotification.object — это IRefund
```

### IP-адреса YooKassa

```ts
import { YOOKASSA_IP_RANGES, YOOKASSA_IPV6_RANGE, isYooKassaIP } from '@webzaytsev/yookassa-ts-sdk'

// IP-диапазоны для настройки firewall/nginx
console.log(YOOKASSA_IP_RANGES)
// ['185.71.76.0/27', '185.71.77.0/27', '77.75.153.0/25', '77.75.154.128/25', '77.75.156.11', '77.75.156.35']

console.log(YOOKASSA_IPV6_RANGE)
// '2a02:5180::/32'

// Проверить, принадлежит ли IP адрес YooKassa (поддерживает IPv4 и IPv6)
isYooKassaIP('185.71.76.1')      // true
isYooKassaIP('77.75.156.11')     // true (точное совпадение)
isYooKassaIP('2a02:5180::1')     // true (IPv6)
isYooKassaIP('192.168.1.1')      // false
```

### Валидация подписи вебхука

YooKassa подписывает все вебхуки с помощью HMAC SHA-256. Подпись передаётся в заголовке `X-YooKassa-Signature`.

**Важно:** Для валидации подписи необходим raw body запроса (до парсинга JSON). Используйте middleware, который сохраняет raw body.

```ts
import { verifyWebhookSignature, parseNotification } from '@webzaytsev/yookassa-ts-sdk'
import express from 'express'

const app = express()

// Middleware для сохранения raw body (важно для валидации подписи)
app.use('/webhook', express.raw({ type: 'application/json' }))

app.post('/webhook', (req, res) => {
    try {
        // 1. Валидация подписи
        const signature = req.headers['x-yookassa-signature'] as string
        if (!signature) {
            return res.status(401).send('Missing signature header')
        }

        verifyWebhookSignature({
            secretKey: process.env.YOOKASSA_WEBHOOK_SECRET_KEY!, // Secret key вебхука
            body: req.body, // raw body (Buffer)
            signature,
        })

        // 2. Парсинг уведомления
        const notification = parseNotification(JSON.parse(req.body.toString()))

        // 3. Обработка события
        if (notification.event === 'payment.succeeded') {
            console.log('Платёж успешен:', notification.object.id)
        }

        res.status(200).send('OK')
    } catch (error) {
        if (error instanceof WebhookValidationError) {
            console.error('Ошибка валидации:', error.message, error.code)
            return res.status(401).send('Invalid signature')
        }
        throw error
    }
})
```

**Механизм валидации:**
1. YooKassa вычисляет HMAC SHA-256 от raw body запроса с использованием secret key вебхука
2. Результат передаётся в заголовке `X-YooKassa-Signature` в формате hex (64 символа)
3. SDK вычисляет такую же подпись и сравнивает с переданной

**Примечания:**
- Secret key вебхука отличается от `secretKey` магазина
- Secret key генерируется при создании вебхука в личном кабинете YooKassa
- Для валидации необходим именно raw body (до парсинга JSON)

### События вебхуков

| Событие | Описание |
| --- | --- |
| `payment.waiting_for_capture` | Платёж ожидает подтверждения |
| `payment.succeeded` | Платёж успешен |
| `payment.canceled` | Платёж отменён |
| `refund.succeeded` | Возврат успешен |
| `payout.succeeded` | Выплата успешна |
| `payout.canceled` | Выплата отменена |
| `deal.closed` | Сделка закрыта |

