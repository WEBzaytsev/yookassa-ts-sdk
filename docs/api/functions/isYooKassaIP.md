[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / isYooKassaIP

# Function: isYooKassaIP()

> **isYooKassaIP**(`ip`): `boolean`

Defined in: [src/webhooks/notification.ts:88](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/webhooks/notification.ts#L88)

Проверяет, принадлежит ли IP-адрес YooKassa.

**⚠️ Надёжность:** проверка IP **не защищает** за reverse-proxy (nginx, Cloudflare, AWS ALB и т. п.).
Заголовок `x-forwarded-for` легко подделать. Используйте `req.socket.remoteAddress` только если
прокси доверяет реальным IP ЮKassa.

Для надёжной верификации вызывайте `sdk.webhooks.verify(body)` — перезапрос объекта через API.

## Parameters

### ip

`string`

— IP для проверки (например, `req.ip` или `x-forwarded-for`)

## Returns

`boolean`

`true`, если IP принадлежит YooKassa

## Example

```ts
import { isYooKassaIP } from 'yookassa-ts-sdk'

app.post('/webhook', (req, res) => {
    const clientIP = req.ip || req.headers['x-forwarded-for']
    if (!isYooKassaIP(clientIP)) {
        return res.status(403).send('Forbidden')
    }
    // ...
})
```
