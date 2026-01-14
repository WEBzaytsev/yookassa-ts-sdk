[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodSberbank

# Interface: IPaymentMethodSberbank

Defined in: [src/types/payments/paymentMethod.type.ts:234](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/payments/paymentMethod.type.ts#L234)

SberPay

## See

https://yookassa.ru/developers/payment-acceptance/getting-started/payment-methods#sberpay

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

### phone?

> `optional` **phone**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:237](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/payments/paymentMethod.type.ts#L237)

Телефон пользователя, на который зарегистрирован аккаунт в SberPay. Необходим для подтверждения оплаты по смс (сценарий подтверждения external). Указывается в формате ITU-T E.164, например 79000000000.

***

### saved

> **saved**: `boolean`

Defined in: [src/types/payments/paymentMethod.type.ts:189](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/payments/paymentMethod.type.ts#L189)

С помощью сохраненного способа оплаты можно проводить [безакцептные списания](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments)

#### Inherited from

`IGeneralPayMethod.saved`

***

### title?

> `optional` **title**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:191](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/payments/paymentMethod.type.ts#L191)

Название способа оплаты.

#### Inherited from

`IGeneralPayMethod.title`

***

### type

> **type**: [`sberbank`](../enumerations/PaymentMethodsEnum.md#sberbank)

Defined in: [src/types/payments/paymentMethod.type.ts:235](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/payments/paymentMethod.type.ts#L235)

#### Overrides

`IGeneralPayMethod.type`
