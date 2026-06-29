[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodCard

# Interface: IPaymentMethodCard

Defined in: [src/types/payments/paymentMethod.type.ts:227](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L227)

Банковская карта (ответ API)

## See

https://yookassa.ru/developers/api#payment_object_payment_method_bank_card

## Extends

- `IGeneralPayMethod`

## Properties

### card?

> `optional` **card?**: [`IBankCardData`](IBankCardData.md)

Defined in: [src/types/payments/paymentMethod.type.ts:231](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L231)

Данные банковской карты

***

### id

> **id**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:217](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L217)

Идентификатор способа оплаты

#### Inherited from

`IGeneralPayMethod.id`

***

### saved

> **saved**: `boolean`

Defined in: [src/types/payments/paymentMethod.type.ts:219](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L219)

Сохранённый способ оплаты позволяет проводить [безакцептные списания](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments)

#### Inherited from

`IGeneralPayMethod.saved`

***

### title?

> `optional` **title?**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:221](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L221)

Название способа оплаты

#### Inherited from

`IGeneralPayMethod.title`

***

### type

> **type**: [`bank_card`](../enumerations/PaymentMethodsEnum.md#bank_card)

Defined in: [src/types/payments/paymentMethod.type.ts:229](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L229)

Код способа оплаты

#### Overrides

`IGeneralPayMethod.type`
