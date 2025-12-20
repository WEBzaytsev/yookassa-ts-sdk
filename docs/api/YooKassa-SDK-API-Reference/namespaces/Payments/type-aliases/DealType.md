[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / DealType

# Type Alias: DealType

> **DealType** = `object`

Defined in: [src/types/payments/payment.type.ts:85](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/payment.type.ts#L85)

## Properties

### id

> **id**: `string`

Defined in: [src/types/payments/payment.type.ts:87](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/payment.type.ts#L87)

Идентификатор сделки.

***

### settlements

> **settlements**: `object`[]

Defined in: [src/types/payments/payment.type.ts:89](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/payment.type.ts#L89)

Данные о распределении денег.

#### amount

> **amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Сумма вознаграждения продавца.

#### type

> **type**: `"payout"`

Тип операции. Фиксированное значение: `payout` — выплата продавцу.
