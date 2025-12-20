[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / PaymentMethodDataCard

# Interface: PaymentMethodDataCard

Defined in: [src/types/payments/paymentMethod.type.ts:335](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L335)

Данные банковской карты для создания платежа

## Properties

### card?

> `optional` **card**: `object`

Defined in: [src/types/payments/paymentMethod.type.ts:338](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L338)

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

Defined in: [src/types/payments/paymentMethod.type.ts:336](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L336)
