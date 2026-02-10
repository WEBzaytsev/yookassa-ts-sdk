[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / clearYooKassaCache

# Function: clearYooKassaCache()

> **clearYooKassaCache**(`shopId?`): `void`

Defined in: [src/client/sdk.ts:578](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e5153b54297e1c5c82db159e94d75578d740e3cf/src/client/sdk.ts#L578)

Очищает кэш инстансов SDK.
Полезно при смене credentials или для освобождения памяти.

## Parameters

### shopId?

`string`

ID магазина для удаления из кэша. Если не указан, очищается весь кэш.

## Returns

`void`
