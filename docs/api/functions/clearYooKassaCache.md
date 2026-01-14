[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / clearYooKassaCache

# Function: clearYooKassaCache()

> **clearYooKassaCache**(`shopId?`): `void`

Defined in: [src/client/sdk.ts:580](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/client/sdk.ts#L580)

Очищает кэш инстансов SDK.
Полезно при смене credentials или для освобождения памяти.

## Parameters

### shopId?

`string`

ID магазина для удаления из кэша. Если не указан, очищается весь кэш.

## Returns

`void`
