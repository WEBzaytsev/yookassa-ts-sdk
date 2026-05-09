[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodYooMoney

# Interface: IPaymentMethodYooMoney

Defined in: [src/types/payments/paymentMethod.type.ts:219](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L219)

ЮMoney

## See

https://yookassa.ru/developers/payment-acceptance/getting-started/payment-methods#yoomoney

## Extends

- `IGeneralPayMethod`

## Properties

### account\_number?

> `optional` **account\_number?**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:222](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L222)

Номер кошелька ЮMoney, из которого была произведена оплата.

***

### id

> **id**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:191](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L191)

Идентификатор способа оплаты.

#### Inherited from

`IGeneralPayMethod.id`

***

### saved

> **saved**: `boolean`

Defined in: [src/types/payments/paymentMethod.type.ts:193](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L193)

С помощью сохраненного способа оплаты можно проводить [безакцептные списания](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments)

#### Inherited from

`IGeneralPayMethod.saved`

***

### title?

> `optional` **title?**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:195](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L195)

Название способа оплаты.

#### Inherited from

`IGeneralPayMethod.title`

***

### type

> **type**: [`yoo_money`](../enumerations/PaymentMethodsEnum.md#yoo_money)

Defined in: [src/types/payments/paymentMethod.type.ts:220](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L220)

#### Overrides

`IGeneralPayMethod.type`
