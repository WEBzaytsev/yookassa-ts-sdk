[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / isYooKassaIP

# Function: isYooKassaIP()

> **isYooKassaIP**(`ip`): `boolean`

Defined in: [src/webhooks/notification.ts:90](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/webhooks/notification.ts#L90)

Проверяет, является ли IP-адрес адресом YooKassa.

**⚠️ Важно о надёжности:** проверка IP **не является достаточной защитой**, если перед вашим
сервером стоит reverse-proxy (nginx, Cloudflare, AWS ALB и т.п.). Заголовок `x-forwarded-for`
легко подделать: клиент может передать произвольный IP в этом заголовке, и прокси добавит его
в список. Используйте `req.socket.remoteAddress` (реальный IP соединения) только при условии,
что ваш прокси настроен доверять только реальным IP ЮKassa.

Для надёжной верификации используйте `sdk.webhooks.verify(body)` — перезапрос объекта через API.

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
