[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / clearYooKassaCache

# Function: clearYooKassaCache()

> **clearYooKassaCache**(`shopId?`): `void`

Defined in: [src/client/sdk.ts:578](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/client/sdk.ts#L578)

Очищает кэш инстансов SDK.
Полезно при смене credentials или для освобождения памяти.

## Parameters

### shopId?

`string`

ID магазина для удаления из кэша. Если не указан, очищается весь кэш.

## Returns

`void`
