[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / YooKassa

# Function: YooKassa()

> **YooKassa**(`init`, `forceNew`): [`YooKassaSdk`](../classes/YooKassaSdk.md)

Defined in: [src/client/sdk.ts:486](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/client/sdk.ts#L486)

Создаёт или возвращает кэшированный экземпляр YooKassaSdk.
Инстансы кэшируются по `shop_id` — это позволяет переиспользовать соединения
и работать с несколькими магазинами одновременно.

## Parameters

### init

[`ConnectorOpts`](../type-aliases/ConnectorOpts.md)

Параметры инициализации SDK

### forceNew

`boolean` = `false`

Принудительно создать новый инстанс (игнорировать кэш)

## Returns

[`YooKassaSdk`](../classes/YooKassaSdk.md)

Экземпляр YooKassaSdk

## Example

```ts
// Создаёт новый или возвращает кэшированный инстанс
const sdk = YooKassa({
  shop_id: 'your_shop_id',
  secret_key: 'your_secret_key',
  debug: true,
})

// Принудительно создать новый инстанс
const newSdk = YooKassa({ ... }, true)
```
