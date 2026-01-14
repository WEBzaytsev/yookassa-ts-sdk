[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / PaymentMethodDataCard

# Interface: PaymentMethodDataCard

Defined in: [src/types/payments/paymentMethod.type.ts:356](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/payments/paymentMethod.type.ts#L356)

Данные банковской карты для создания платежа

## Properties

### card?

> `optional` **card**: `object`

Defined in: [src/types/payments/paymentMethod.type.ts:359](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/payments/paymentMethod.type.ts#L359)

Данные банковской карты

#### cardholder?

> `optional` **cardholder**: `string`

Имя владельца карты

#### csc?

> `optional` **csc**: `string`

Код CVC2 или CVV2

#### expiry\_month?

> `optional` **expiry\_month**: `string`

Срок действия, месяц, MM

#### expiry\_year?

> `optional` **expiry\_year**: `string`

Срок действия, год, YYYY

#### number?

> `optional` **number**: `string`

Номер банковской карты

***

### type

> **type**: `"bank_card"`

Defined in: [src/types/payments/paymentMethod.type.ts:357](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/payments/paymentMethod.type.ts#L357)
