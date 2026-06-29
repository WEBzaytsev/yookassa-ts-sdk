[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / PaymentMethodDataCard

# Interface: PaymentMethodDataCard

Defined in: [src/types/payments/paymentMethod.type.ts:406](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L406)

Данные банковской карты для создания платежа

## Properties

### card?

> `optional` **card?**: `object`

Defined in: [src/types/payments/paymentMethod.type.ts:409](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L409)

Данные банковской карты

#### cardholder?

> `optional` **cardholder?**: `string`

Имя владельца карты

#### csc?

> `optional` **csc?**: `string`

Код CVC2 или CVV2

#### expiry\_month?

> `optional` **expiry\_month?**: `string`

Срок действия — месяц, MM

#### expiry\_year?

> `optional` **expiry\_year?**: `string`

Срок действия — год, YYYY

#### number?

> `optional` **number?**: `string`

Номер банковской карты

***

### type

> **type**: `"bank_card"`

Defined in: [src/types/payments/paymentMethod.type.ts:407](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L407)
