[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodGooglePay

# Interface: IPaymentMethodGooglePay

Defined in: [src/types/payments/paymentMethod.type.ts:278](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/421052f4b89e2476891b70faab4f1b4ec3acb883/src/types/payments/paymentMethod.type.ts#L278)

Google Pay (обычно используется через payment_token)

## Extends

- `IGeneralPayMethod`

## Properties

### id

> **id**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:153](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/421052f4b89e2476891b70faab4f1b4ec3acb883/src/types/payments/paymentMethod.type.ts#L153)

Идентификатор способа оплаты.

#### Inherited from

`IGeneralPayMethod.id`

***

### saved

> **saved**: `boolean`

Defined in: [src/types/payments/paymentMethod.type.ts:155](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/421052f4b89e2476891b70faab4f1b4ec3acb883/src/types/payments/paymentMethod.type.ts#L155)

С помощью сохраненного способа оплаты можно проводить [безакцептные списания](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments)

#### Inherited from

`IGeneralPayMethod.saved`

***

### title?

> `optional` **title**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:157](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/421052f4b89e2476891b70faab4f1b4ec3acb883/src/types/payments/paymentMethod.type.ts#L157)

Название способа оплаты.

#### Inherited from

`IGeneralPayMethod.title`

***

### type

> **type**: [`google_pay`](../enumerations/PaymentMethodsEnum.md#google_pay)

Defined in: [src/types/payments/paymentMethod.type.ts:279](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/421052f4b89e2476891b70faab4f1b4ec3acb883/src/types/payments/paymentMethod.type.ts#L279)

#### Overrides

`IGeneralPayMethod.type`
