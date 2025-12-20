[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / isYooKassaIP

# Function: isYooKassaIP()

> **isYooKassaIP**(`ip`): `boolean`

Defined in: [src/webhooks/notification.ts:82](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/webhooks/notification.ts#L82)

Проверяет, является ли IP-адрес адресом YooKassa.

## Parameters

### ip

`string`

IP-адрес для проверки (например, из req.ip или x-forwarded-for)

## Returns

`boolean`

true, если IP принадлежит YooKassa

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
