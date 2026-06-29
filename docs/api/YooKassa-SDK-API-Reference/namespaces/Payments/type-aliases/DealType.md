[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / DealType

# Type Alias: DealType

> **DealType** = `object`

Defined in: [src/types/payments/payment.type.ts:82](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L82)

## Properties

### id

> **id**: `string`

Defined in: [src/types/payments/payment.type.ts:84](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L84)

ID сделки

***

### settlements

> **settlements**: `object`[]

Defined in: [src/types/payments/payment.type.ts:86](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L86)

Распределение денег

#### amount

> **amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Вознаграждение продавца

#### type

> **type**: `"payout"`

Тип операции: `payout` — выплата продавцу
