[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / ConnectorOpts

# Type Alias: ConnectorOpts

> **ConnectorOpts** = `object`

Defined in: [src/client/connector.ts:52](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/client/connector.ts#L52)

Данные для подключения к API YooKassa

## Properties

### debug?

> `optional` **debug**: `boolean`

Defined in: [src/client/connector.ts:73](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/client/connector.ts#L73)

Отладочный режим

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: [src/client/connector.ts:71](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/client/connector.ts#L71)

Эндпоинт API (без слэша в конце)

#### Default

```ts
"https://api.yookassa.ru/v3"
```

***

### maxRPS?

> `optional` **maxRPS**: `number`

Defined in: [src/client/connector.ts:78](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/client/connector.ts#L78)

Количество запросов в секунду

#### Default

```ts
5
```

***

### proxy?

> `optional` **proxy**: [`ProxyConfig`](ProxyConfig.md)

Defined in: [src/client/connector.ts:94](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/client/connector.ts#L94)

Конфигурация прокси-сервера
Можно указать как строку URL (например, "http://user:pass@proxy.example.com:8080")
или объект AxiosProxyConfig

***

### retries?

> `optional` **retries**: `number`

Defined in: [src/client/connector.ts:88](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/client/connector.ts#L88)

Количество повторных попыток при ошибках

#### Default

```ts
5
```

***

### secret\_key

> **secret\_key**: `string`

Defined in: [src/client/connector.ts:60](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/client/connector.ts#L60)

Секретный ключ

***

### shop\_id

> **shop\_id**: `string`

Defined in: [src/client/connector.ts:56](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/client/connector.ts#L56)

Идентификатор магазина

***

### timeout?

> `optional` **timeout**: `number`

Defined in: [src/client/connector.ts:83](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/client/connector.ts#L83)

Таймаут запроса в миллисекундах

#### Default

```ts
5000
```

***

### token?

> `optional` **token**: `string`

Defined in: [src/client/connector.ts:66](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/client/connector.ts#L66)

OAuth-токен для партнёрского API.
Необходим для работы с вебхуками и получения информации о магазине.

#### See

https://yookassa.ru/developers/partners-api/basics
