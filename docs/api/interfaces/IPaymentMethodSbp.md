[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodSbp

# Interface: IPaymentMethodSbp

Defined in: [src/types/payments/paymentMethod.type.ts:274](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/payments/paymentMethod.type.ts#L274)

СБП (Система быстрых платежей)

## See

https://yookassa.ru/developers/payment-acceptance/getting-started/payment-methods#sbp

## Extends

- `IGeneralPayMethod`

## Properties

### id

> **id**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:187](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/payments/paymentMethod.type.ts#L187)

Идентификатор способа оплаты.

#### Inherited from

`IGeneralPayMethod.id`

***

### payer\_bank\_details?

> `optional` **payer\_bank\_details**: `object`

Defined in: [src/types/payments/paymentMethod.type.ts:279](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/payments/paymentMethod.type.ts#L279)

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

Defined in: [src/types/payments/paymentMethod.type.ts:189](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/payments/paymentMethod.type.ts#L189)

С помощью сохраненного способа оплаты можно проводить [безакцептные списания](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments)

#### Inherited from

`IGeneralPayMethod.saved`

***

### sbp\_operation\_id?

> `optional` **sbp\_operation\_id**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:277](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/payments/paymentMethod.type.ts#L277)

Идентификатор операции в СБП (НСПК). Обязателен для платежей в статусе succeeded.

***

### title?

> `optional` **title**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:191](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/payments/paymentMethod.type.ts#L191)

Название способа оплаты.

#### Inherited from

`IGeneralPayMethod.title`

***

### type

> **type**: [`sbp`](../enumerations/PaymentMethodsEnum.md#sbp)

Defined in: [src/types/payments/paymentMethod.type.ts:275](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/payments/paymentMethod.type.ts#L275)

#### Overrides

`IGeneralPayMethod.type`
