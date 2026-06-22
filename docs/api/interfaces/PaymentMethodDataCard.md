[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / PaymentMethodDataCard

# Interface: PaymentMethodDataCard

Defined in: [src/types/payments/paymentMethod.type.ts:406](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L406)

Данные банковской карты для создания платежа

## Properties

### card?

> `optional` **card?**: `object`

Defined in: [src/types/payments/paymentMethod.type.ts:409](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L409)

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

Defined in: [src/types/payments/paymentMethod.type.ts:407](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L407)
