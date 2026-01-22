[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodWebmoney

# ~~Interface: IPaymentMethodWebmoney~~

Defined in: [src/types/payments/paymentMethod.type.ts:341](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/payments/paymentMethod.type.ts#L341)

WebMoney

## Deprecated

WebMoney прекратил работу в РФ в 2022 году.

## Extends

- `IGeneralPayMethod`

## Properties

### ~~id~~

> **id**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:187](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/payments/paymentMethod.type.ts#L187)

Идентификатор способа оплаты.

#### Inherited from

`IGeneralPayMethod.id`

***

### ~~saved~~

> **saved**: `boolean`

Defined in: [src/types/payments/paymentMethod.type.ts:189](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/payments/paymentMethod.type.ts#L189)

С помощью сохраненного способа оплаты можно проводить [безакцептные списания](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments)

#### Inherited from

`IGeneralPayMethod.saved`

***

### ~~title?~~

> `optional` **title**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:191](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/payments/paymentMethod.type.ts#L191)

Название способа оплаты.

#### Inherited from

`IGeneralPayMethod.title`

***

### ~~type~~

> **type**: [`webmoney`](../enumerations/PaymentMethodsEnum.md#webmoney)

Defined in: [src/types/payments/paymentMethod.type.ts:342](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/payments/paymentMethod.type.ts#L342)

#### Overrides

`IGeneralPayMethod.type`
