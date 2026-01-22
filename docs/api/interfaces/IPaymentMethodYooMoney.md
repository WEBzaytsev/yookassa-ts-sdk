[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodYooMoney

# Interface: IPaymentMethodYooMoney

Defined in: [src/types/payments/paymentMethod.type.ts:215](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/payments/paymentMethod.type.ts#L215)

ЮMoney

## See

https://yookassa.ru/developers/payment-acceptance/getting-started/payment-methods#yoomoney

## Extends

- `IGeneralPayMethod`

## Properties

### account\_number?

> `optional` **account\_number**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:218](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/payments/paymentMethod.type.ts#L218)

Номер кошелька ЮMoney, из которого была произведена оплата.

***

### id

> **id**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:187](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/payments/paymentMethod.type.ts#L187)

Идентификатор способа оплаты.

#### Inherited from

`IGeneralPayMethod.id`

***

### saved

> **saved**: `boolean`

Defined in: [src/types/payments/paymentMethod.type.ts:189](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/payments/paymentMethod.type.ts#L189)

С помощью сохраненного способа оплаты можно проводить [безакцептные списания](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments)

#### Inherited from

`IGeneralPayMethod.saved`

***

### title?

> `optional` **title**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:191](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/payments/paymentMethod.type.ts#L191)

Название способа оплаты.

#### Inherited from

`IGeneralPayMethod.title`

***

### type

> **type**: [`yoo_money`](../enumerations/PaymentMethodsEnum.md#yoo_money)

Defined in: [src/types/payments/paymentMethod.type.ts:216](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/payments/paymentMethod.type.ts#L216)

#### Overrides

`IGeneralPayMethod.type`
