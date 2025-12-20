[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / clearYooKassaCache

# Function: clearYooKassaCache()

> **clearYooKassaCache**(`shopId?`): `void`

Defined in: [src/client/sdk.ts:580](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/client/sdk.ts#L580)

Очищает кэш инстансов SDK.
Полезно при смене credentials или для освобождения памяти.

## Parameters

### shopId?

`string`

ID магазина для удаления из кэша. Если не указан, очищается весь кэш.

## Returns

`void`
