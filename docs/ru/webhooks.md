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
import { parseNotification, isYooKassaIP, WebhookValidationError } from 'yookassa-ts-sdk'

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
import { parsePaymentNotification, parseRefundNotification } from 'yookassa-ts-sdk'

// Только для событий платежей
const paymentNotification = parsePaymentNotification(req.body)
// paymentNotification.object — это IPayment

// Только для событий возвратов
const refundNotification = parseRefundNotification(req.body)
// refundNotification.object — это IRefund
```

### IP-адреса YooKassa

```ts
import { YOOKASSA_IP_RANGES, YOOKASSA_IPV6_RANGE, isYooKassaIP } from 'yookassa-ts-sdk'

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

