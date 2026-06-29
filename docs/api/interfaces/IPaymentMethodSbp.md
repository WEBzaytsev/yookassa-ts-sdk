[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodSbp

# Interface: IPaymentMethodSbp

Defined in: [src/types/payments/paymentMethod.type.ts:304](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L304)

СБП (Система быстрых платежей)

## See

https://yookassa.ru/developers/payment-acceptance/getting-started/payment-methods#sbp

## Extends

- `IGeneralPayMethod`

## Properties

### id

> **id**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:217](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L217)

Идентификатор способа оплаты

#### Inherited from

`IGeneralPayMethod.id`

***

### payer\_bank\_details?

> `optional` **payer\_bank\_details?**: `object`

Defined in: [src/types/payments/paymentMethod.type.ts:309](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L309)

Данные о банке плательщика

#### bank\_id

> **bank\_id**: `string`

Идентификатор банка или платёжного сервиса в СБП

#### bic

> **bic**: `string`

БИК банка

#### name

> **name**: `string`

Название банка

***

### saved

> **saved**: `boolean`

Defined in: [src/types/payments/paymentMethod.type.ts:219](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L219)

Сохранённый способ оплаты позволяет проводить [безакцептные списания](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments)

#### Inherited from

`IGeneralPayMethod.saved`

***

### sbp\_operation\_id?

> `optional` **sbp\_operation\_id?**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:307](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L307)

Идентификатор операции в СБП (НСПК). Обязателен для платежей в статусе succeeded

***

### title?

> `optional` **title?**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:221](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L221)

Название способа оплаты

#### Inherited from

`IGeneralPayMethod.title`

***

### type

> **type**: [`sbp`](../enumerations/PaymentMethodsEnum.md#sbp)

Defined in: [src/types/payments/paymentMethod.type.ts:305](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L305)

#### Overrides

`IGeneralPayMethod.type`
