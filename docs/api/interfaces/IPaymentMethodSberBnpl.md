[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodSberBnpl

# Interface: IPaymentMethodSberBnpl

Defined in: [src/types/payments/paymentMethod.type.ts:262](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/421052f4b89e2476891b70faab4f1b4ec3acb883/src/types/payments/paymentMethod.type.ts#L262)

Плати частями (BNPL от СберБанка)

## Properties

### id

> **id**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:265](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/421052f4b89e2476891b70faab4f1b4ec3acb883/src/types/payments/paymentMethod.type.ts#L265)

Идентификатор способа оплаты

***

### saved

> **saved**: `boolean`

Defined in: [src/types/payments/paymentMethod.type.ts:267](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/421052f4b89e2476891b70faab4f1b4ec3acb883/src/types/payments/paymentMethod.type.ts#L267)

С помощью сохраненного способа оплаты можно проводить безакцептные списания

***

### status?

> `optional` **status**: `"inactive"` \| `"active"`

Defined in: [src/types/payments/paymentMethod.type.ts:269](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/421052f4b89e2476891b70faab4f1b4ec3acb883/src/types/payments/paymentMethod.type.ts#L269)

Статус способа оплаты

***

### type

> **type**: [`sber_bnpl`](../enumerations/PaymentMethodsEnum.md#sber_bnpl)

Defined in: [src/types/payments/paymentMethod.type.ts:263](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/421052f4b89e2476891b70faab4f1b4ec3acb883/src/types/payments/paymentMethod.type.ts#L263)
