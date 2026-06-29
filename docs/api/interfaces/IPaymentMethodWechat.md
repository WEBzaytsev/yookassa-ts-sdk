[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodWechat

# ~~Interface: IPaymentMethodWechat~~

Defined in: [src/types/payments/paymentMethod.type.ts:390](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L390)

WeChat Pay

## Deprecated

Способ оплаты для пользователей из Китая.

## Extends

- `IGeneralPayMethod`

## Properties

### ~~id~~

> **id**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:217](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L217)

Идентификатор способа оплаты

#### Inherited from

`IGeneralPayMethod.id`

***

### ~~saved~~

> **saved**: `boolean`

Defined in: [src/types/payments/paymentMethod.type.ts:219](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L219)

Сохранённый способ оплаты позволяет проводить [безакцептные списания](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments)

#### Inherited from

`IGeneralPayMethod.saved`

***

### ~~title?~~

> `optional` **title?**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:221](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L221)

Название способа оплаты

#### Inherited from

`IGeneralPayMethod.title`

***

### ~~type~~

> **type**: [`wechat`](../enumerations/PaymentMethodsEnum.md#wechat)

Defined in: [src/types/payments/paymentMethod.type.ts:391](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L391)

#### Overrides

`IGeneralPayMethod.type`
