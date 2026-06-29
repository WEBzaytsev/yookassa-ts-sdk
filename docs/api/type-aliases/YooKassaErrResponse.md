[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / YooKassaErrResponse

# Type Alias: YooKassaErrResponse

> **YooKassaErrResponse** = `object`

Defined in: [src/types/api.types.ts:78](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/api.types.ts#L78)

## Properties

### code

> **code**: `string`

Defined in: [src/types/api.types.ts:81](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/api.types.ts#L81)

***

### description

> **description**: `string`

Defined in: [src/types/api.types.ts:82](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/api.types.ts#L82)

***

### id

> **id**: `string`

Defined in: [src/types/api.types.ts:80](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/api.types.ts#L80)

***

### reason?

> `optional` **reason?**: `string`

Defined in: [src/types/api.types.ts:87](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/api.types.ts#L87)

Дополнительная причина отказа при `code: 'refusal'`.
Возвращается при нарушении правил бизнес-логики.

***

### type

> **type**: `"error"`

Defined in: [src/types/api.types.ts:79](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/api.types.ts#L79)
