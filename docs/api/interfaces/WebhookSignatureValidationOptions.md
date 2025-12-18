[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / WebhookSignatureValidationOptions

# Interface: WebhookSignatureValidationOptions

Defined in: [src/webhooks/notification.ts:303](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/webhooks/notification.ts#L303)

Опции для валидации подписи вебхука

## Properties

### body

> **body**: `string` \| `Buffer`\<`ArrayBufferLike`\>

Defined in: [src/webhooks/notification.ts:307](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/webhooks/notification.ts#L307)

Тело запроса (raw body как строка или Buffer)

***

### headerName?

> `optional` **headerName**: `string`

Defined in: [src/webhooks/notification.ts:311](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/webhooks/notification.ts#L311)

Имя заголовка с подписью (по умолчанию: 'X-YooKassa-Signature')

***

### secretKey

> **secretKey**: `string`

Defined in: [src/webhooks/notification.ts:305](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/webhooks/notification.ts#L305)

Секретный ключ магазина (secretKey)

***

### signature

> **signature**: `string`

Defined in: [src/webhooks/notification.ts:309](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/webhooks/notification.ts#L309)

Значение заголовка с подписью
