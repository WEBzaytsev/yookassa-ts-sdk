[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodSberbank

# Interface: IPaymentMethodSberbank

Defined in: [src/types/payments/paymentMethod.type.ts:264](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L264)

SberPay

## See

https://yookassa.ru/developers/payment-acceptance/getting-started/payment-methods#sberpay

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

### phone?

> `optional` **phone?**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:267](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L267)

Телефон пользователя, на который зарегистрирован аккаунт в SberPay. Необходим для подтверждения оплаты по смс (сценарий подтверждения external). Указывается в формате ITU-T E.164, например 79000000000.

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

> **type**: [`sberbank`](../enumerations/PaymentMethodsEnum.md#sberbank)

Defined in: [src/types/payments/paymentMethod.type.ts:265](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L265)

#### Overrides

`IGeneralPayMethod.type`
