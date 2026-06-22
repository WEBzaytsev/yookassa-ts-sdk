[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodYooMoney

# Interface: IPaymentMethodYooMoney

Defined in: [src/types/payments/paymentMethod.type.ts:245](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L245)

ЮMoney

## See

https://yookassa.ru/developers/payment-acceptance/getting-started/payment-methods#yoomoney

## Extends

- `IGeneralPayMethod`

## Properties

### account\_number?

> `optional` **account\_number?**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:248](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L248)

Номер кошелька ЮMoney, из которого была произведена оплата.

***

### id

> **id**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:217](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L217)

Идентификатор способа оплаты.

#### Inherited from

`IGeneralPayMethod.id`

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

> **type**: [`yoo_money`](../enumerations/PaymentMethodsEnum.md#yoo_money)

Defined in: [src/types/payments/paymentMethod.type.ts:246](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L246)

#### Overrides

`IGeneralPayMethod.type`
