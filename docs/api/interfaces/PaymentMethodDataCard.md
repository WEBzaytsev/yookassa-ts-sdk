[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / PaymentMethodDataCard

# Interface: PaymentMethodDataCard

Defined in: [src/types/payments/paymentMethod.type.ts:301](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/payments/paymentMethod.type.ts#L301)

Данные банковской карты для создания платежа

## Properties

### card?

> `optional` **card**: `object`

Defined in: [src/types/payments/paymentMethod.type.ts:304](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/payments/paymentMethod.type.ts#L304)

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

Defined in: [src/types/payments/paymentMethod.type.ts:302](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/payments/paymentMethod.type.ts#L302)
