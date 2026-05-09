[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodSberBnpl

# Interface: IPaymentMethodSberBnpl

Defined in: [src/types/payments/paymentMethod.type.ts:321](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L321)

Плати частями (BNPL от СберБанка)

## Properties

### id

> **id**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:324](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L324)

Идентификатор способа оплаты

***

### saved

> **saved**: `boolean`

Defined in: [src/types/payments/paymentMethod.type.ts:326](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L326)

С помощью сохраненного способа оплаты можно проводить безакцептные списания

***

### status?

> `optional` **status?**: `"inactive"` \| `"active"`

Defined in: [src/types/payments/paymentMethod.type.ts:328](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L328)

Статус способа оплаты

***

### type

> **type**: [`sber_bnpl`](../enumerations/PaymentMethodsEnum.md#sber_bnpl)

Defined in: [src/types/payments/paymentMethod.type.ts:322](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L322)
