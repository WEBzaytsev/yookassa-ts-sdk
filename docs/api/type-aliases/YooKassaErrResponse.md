[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / YooKassaErrResponse

# Type Alias: YooKassaErrResponse

> **YooKassaErrResponse** = `object`

Defined in: [src/types/api.types.ts:85](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/api.types.ts#L85)

## Properties

### code

> **code**: `string`

Defined in: [src/types/api.types.ts:88](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/api.types.ts#L88)

***

### description

> **description**: `string`

Defined in: [src/types/api.types.ts:89](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/api.types.ts#L89)

***

### id

> **id**: `string`

Defined in: [src/types/api.types.ts:87](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/api.types.ts#L87)

***

### reason?

> `optional` **reason?**: `string`

Defined in: [src/types/api.types.ts:94](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/api.types.ts#L94)

Дополнительная причина отказа (присутствует при `code: 'refusal'`).
Возвращается API при нарушении правил бизнес-логики.

***

### type

> **type**: `"error"`

Defined in: [src/types/api.types.ts:86](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/api.types.ts#L86)
