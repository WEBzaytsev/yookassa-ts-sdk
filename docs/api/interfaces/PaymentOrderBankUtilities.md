[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / PaymentOrderBankUtilities

# Interface: PaymentOrderBankUtilities

Defined in: [src/types/payments/paymentOrder.type.ts:19](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentOrder.type.ts#L19)

Банк получателя платежа ЖКУ.
Поле `name` — до 45 символов.

## Properties

### account

> **account**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:25](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentOrder.type.ts#L25)

Счёт получателя в банке

***

### bic

> **bic**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:23](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentOrder.type.ts#L23)

БИК банка получателя (9 цифр)

***

### correspondent\_account

> **correspondent\_account**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:27](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentOrder.type.ts#L27)

Корреспондентский счёт банка получателя

***

### name

> **name**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:21](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentOrder.type.ts#L21)

Название банка получателя (до 45 символов)
