[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / PaymentMethodDataCard

# Interface: PaymentMethodDataCard

Defined in: [src/types/payments/paymentMethod.type.ts:369](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L369)

Данные банковской карты для создания платежа

## Properties

### card?

> `optional` **card?**: `object`

Defined in: [src/types/payments/paymentMethod.type.ts:372](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L372)

Данные банковской карты

#### cardholder?

> `optional` **cardholder?**: `string`

Имя владельца карты

#### csc?

> `optional` **csc?**: `string`

Код CVC2 или CVV2

#### expiry\_month?

> `optional` **expiry\_month?**: `string`

Срок действия, месяц, MM

#### expiry\_year?

> `optional` **expiry\_year?**: `string`

Срок действия, год, YYYY

#### number?

> `optional` **number?**: `string`

Номер банковской карты

***

### type

> **type**: `"bank_card"`

Defined in: [src/types/payments/paymentMethod.type.ts:370](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L370)
