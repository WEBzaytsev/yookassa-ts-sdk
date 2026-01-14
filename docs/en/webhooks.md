# Webhooks

## Webhook Management (Partner API)

> **Note:** Webhooks require an OAuth token. This functionality is only available as part of the [partner program](https://yookassa.ru/developers/partners-api/basics).

### Create Webhook

```ts
const webhook = await sdk.webhooks.create({
    event: 'payment.succeeded',
    url: 'https://example.com/webhook',
});
```

### List Webhooks

```ts
const webhooks = await sdk.webhooks.list();
```

### Delete Webhook

```ts
await sdk.webhooks.delete('webhook_id');
```

### API Reference

| Method                         | Description                |
| ------------------------------ | -------------------------- |
| `create(data, idempotenceKey?)` | Create webhook            |
| `list()`                        | List webhooks             |
| `delete(id)`                    | Delete webhook            |

---

## Incoming Webhooks (Notifications)

SDK provides helpers for processing incoming webhook notifications from YooKassa.

### Parse Notification

```ts
import { parseNotification, isYooKassaIP, WebhookValidationError } from '@webzaytsev/yookassa-ts-sdk'

app.post('/webhook', (req, res) => {
    // Optional: Validate IP address
    const clientIP = req.ip || req.headers['x-forwarded-for']
    if (!isYooKassaIP(clientIP)) {
        return res.status(403).send('Forbidden')
    }

    try {
        const notification = parseNotification(req.body)

        switch (notification.event) {
            case 'payment.succeeded':
                console.log('Payment succeeded:', notification.object.id)
                // notification.object is typed as IPayment
                break
            case 'payment.waiting_for_capture':
                console.log('Payment waiting for capture:', notification.object.id)
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
        if (error instanceof WebhookValidationError) {
            console.error('Invalid webhook:', error.message)
            return res.status(400).send('Bad Request')
        }
        throw error
    }
})
```

### Typed Parsers

```ts
import { parsePaymentNotification, parseRefundNotification } from '@webzaytsev/yookassa-ts-sdk'

// For payment events only
const paymentNotification = parsePaymentNotification(req.body)
// paymentNotification.object is IPayment

// For refund events only
const refundNotification = parseRefundNotification(req.body)
// refundNotification.object is IRefund
```

### YooKassa IP Addresses

```ts
import { YOOKASSA_IP_RANGES, YOOKASSA_IPV6_RANGE, isYooKassaIP } from '@webzaytsev/yookassa-ts-sdk'

// IP ranges for firewall/nginx configuration
console.log(YOOKASSA_IP_RANGES)
// ['185.71.76.0/27', '185.71.77.0/27', '77.75.153.0/25', '77.75.154.128/25', '77.75.156.11', '77.75.156.35']

console.log(YOOKASSA_IPV6_RANGE)
// '2a02:5180::/32'

// Check if IP belongs to YooKassa (supports IPv4 and IPv6)
isYooKassaIP('185.71.76.1')      // true
isYooKassaIP('77.75.156.11')     // true (exact match)
isYooKassaIP('2a02:5180::1')     // true (IPv6)
isYooKassaIP('192.168.1.1')      // false
```

### Webhook Events

| Event | Description |
| --- | --- |
| `payment.waiting_for_capture` | Payment is waiting for capture |
| `payment.succeeded` | Payment succeeded |
| `payment.canceled` | Payment canceled |
| `refund.succeeded` | Refund succeeded |
| `payout.succeeded` | Payout succeeded |
| `payout.canceled` | Payout canceled |
| `deal.closed` | Deal closed |

