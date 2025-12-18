[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodMobileBalance

# Interface: IPaymentMethodMobileBalance

Defined in: [src/types/payments/paymentMethod.type.ts:171](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/421052f4b89e2476891b70faab4f1b4ec3acb883/src/types/payments/paymentMethod.type.ts#L171)

Баланс телефона

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

### phone

> **phone**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:175](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/421052f4b89e2476891b70faab4f1b4ec3acb883/src/types/payments/paymentMethod.type.ts#L175)

Телефон, с баланса которого осуществляется платеж. Указывается в формате ITU-T E.164, например 79000000000.

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

> **type**: [`mobile_balance`](../enumerations/PaymentMethodsEnum.md#mobile_balance)

Defined in: [src/types/payments/paymentMethod.type.ts:173](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/421052f4b89e2476891b70faab4f1b4ec3acb883/src/types/payments/paymentMethod.type.ts#L173)

Код способа оплаты.

#### Overrides

`IGeneralPayMethod.type`
