[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodSberbank

# Interface: IPaymentMethodSberbank

Defined in: [src/types/payments/paymentMethod.type.ts:194](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/payments/paymentMethod.type.ts#L194)

SberPay

## Properties

### phone?

> `optional` **phone**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:197](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/payments/paymentMethod.type.ts#L197)

Телефон пользователя, на который зарегистрирован аккаунт в SberPay. Необходим для подтверждения оплаты по смс (сценарий подтверждения external). Указывается в формате ITU-T E.164, например 79000000000.

***

### type

> **type**: [`sberbank`](../enumerations/PaymentMethodsEnum.md#sberbank)

Defined in: [src/types/payments/paymentMethod.type.ts:195](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/payments/paymentMethod.type.ts#L195)
