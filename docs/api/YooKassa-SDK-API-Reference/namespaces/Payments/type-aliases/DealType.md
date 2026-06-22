[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / DealType

# Type Alias: DealType

> **DealType** = `object`

Defined in: [src/types/payments/payment.type.ts:86](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L86)

## Properties

### id

> **id**: `string`

Defined in: [src/types/payments/payment.type.ts:88](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L88)

Идентификатор сделки.

***

### settlements

> **settlements**: `object`[]

Defined in: [src/types/payments/payment.type.ts:90](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L90)

Данные о распределении денег.

#### amount

> **amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Сумма вознаграждения продавца.

#### type

> **type**: `"payout"`

Тип операции. Фиксированное значение: `payout` — выплата продавцу.
