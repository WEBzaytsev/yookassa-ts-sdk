[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodWebmoney

# ~~Interface: IPaymentMethodWebmoney~~

Defined in: [src/types/payments/paymentMethod.type.ts:345](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L345)

WebMoney

## Deprecated

WebMoney прекратил работу в РФ в 2022 году.

## Extends

- `IGeneralPayMethod`

## Properties

### ~~id~~

> **id**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:191](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L191)

Идентификатор способа оплаты.

#### Inherited from

`IGeneralPayMethod.id`

***

### ~~saved~~

> **saved**: `boolean`

Defined in: [src/types/payments/paymentMethod.type.ts:193](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L193)

С помощью сохраненного способа оплаты можно проводить [безакцептные списания](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments)

#### Inherited from

`IGeneralPayMethod.saved`

***

### ~~title?~~

> `optional` **title?**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:195](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L195)

Название способа оплаты.

#### Inherited from

`IGeneralPayMethod.title`

***

### ~~type~~

> **type**: [`webmoney`](../enumerations/PaymentMethodsEnum.md#webmoney)

Defined in: [src/types/payments/paymentMethod.type.ts:346](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L346)

#### Overrides

`IGeneralPayMethod.type`
