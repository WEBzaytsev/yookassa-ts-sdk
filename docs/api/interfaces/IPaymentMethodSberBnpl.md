[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodSberBnpl

# Interface: IPaymentMethodSberBnpl

Defined in: [src/types/payments/paymentMethod.type.ts:317](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/payments/paymentMethod.type.ts#L317)

Плати частями (BNPL от СберБанка)

## Properties

### id

> **id**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:320](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/payments/paymentMethod.type.ts#L320)

Идентификатор способа оплаты

***

### saved

> **saved**: `boolean`

Defined in: [src/types/payments/paymentMethod.type.ts:322](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/payments/paymentMethod.type.ts#L322)

С помощью сохраненного способа оплаты можно проводить безакцептные списания

***

### status?

> `optional` **status**: `"inactive"` \| `"active"`

Defined in: [src/types/payments/paymentMethod.type.ts:324](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/payments/paymentMethod.type.ts#L324)

Статус способа оплаты

***

### type

> **type**: [`sber_bnpl`](../enumerations/PaymentMethodsEnum.md#sber_bnpl)

Defined in: [src/types/payments/paymentMethod.type.ts:318](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/payments/paymentMethod.type.ts#L318)
