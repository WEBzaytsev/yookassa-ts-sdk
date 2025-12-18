[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / clearYooKassaCache

# Function: clearYooKassaCache()

> **clearYooKassaCache**(`shopId?`): `void`

Defined in: [src/client/sdk.ts:505](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/client/sdk.ts#L505)

Очищает кэш инстансов SDK.
Полезно при смене credentials или для освобождения памяти.

## Parameters

### shopId?

`string`

ID магазина для удаления из кэша. Если не указан, очищается весь кэш.

## Returns

`void`
