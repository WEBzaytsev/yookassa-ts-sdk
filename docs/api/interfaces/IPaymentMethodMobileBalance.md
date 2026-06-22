[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodMobileBalance

# Interface: IPaymentMethodMobileBalance

Defined in: [src/types/payments/paymentMethod.type.ts:235](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L235)

Баланс телефона

## Extends

- `IGeneralPayMethod`

## Properties

### id

> **id**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:217](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L217)

Идентификатор способа оплаты.

#### Inherited from

`IGeneralPayMethod.id`

***

### phone

> **phone**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:239](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L239)

Телефон, с баланса которого осуществляется платеж. Указывается в формате ITU-T E.164, например 79000000000.

***

### saved

> **saved**: `boolean`

Defined in: [src/types/payments/paymentMethod.type.ts:219](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L219)

С помощью сохраненного способа оплаты можно проводить [безакцептные списания](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments)

#### Inherited from

`IGeneralPayMethod.saved`

***

### title?

> `optional` **title?**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:221](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L221)

Название способа оплаты.

#### Inherited from

`IGeneralPayMethod.title`

***

### type

> **type**: [`mobile_balance`](../enumerations/PaymentMethodsEnum.md#mobile_balance)

Defined in: [src/types/payments/paymentMethod.type.ts:237](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L237)

Код способа оплаты.

#### Overrides

`IGeneralPayMethod.type`
