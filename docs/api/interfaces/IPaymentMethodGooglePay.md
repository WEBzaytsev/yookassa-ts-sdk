[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodGooglePay

# Interface: IPaymentMethodGooglePay

Defined in: [src/types/payments/paymentMethod.type.ts:312](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/types/payments/paymentMethod.type.ts#L312)

Google Pay (обычно используется через payment_token)

## Extends

- `IGeneralPayMethod`

## Properties

### id

> **id**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:187](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/types/payments/paymentMethod.type.ts#L187)

Идентификатор способа оплаты.

#### Inherited from

`IGeneralPayMethod.id`

***

### saved

> **saved**: `boolean`

Defined in: [src/types/payments/paymentMethod.type.ts:189](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/types/payments/paymentMethod.type.ts#L189)

С помощью сохраненного способа оплаты можно проводить [безакцептные списания](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments)

#### Inherited from

`IGeneralPayMethod.saved`

***

### title?

> `optional` **title**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:191](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/types/payments/paymentMethod.type.ts#L191)

Название способа оплаты.

#### Inherited from

`IGeneralPayMethod.title`

***

### type

> **type**: [`google_pay`](../enumerations/PaymentMethodsEnum.md#google_pay)

Defined in: [src/types/payments/paymentMethod.type.ts:313](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/types/payments/paymentMethod.type.ts#L313)

#### Overrides

`IGeneralPayMethod.type`
