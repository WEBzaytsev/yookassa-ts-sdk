[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / PaymentOrderBankUtilities

# Interface: PaymentOrderBankUtilities

Defined in: [src/types/payments/paymentOrder.type.ts:21](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentOrder.type.ts#L21)

Банк получателя платежа ЖКУ.
Поле `name` — не более 45 символов.

## Properties

### account

> **account**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:27](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentOrder.type.ts#L27)

Счёт получателя в банке

***

### bic

> **bic**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:25](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentOrder.type.ts#L25)

БИК банка получателя (9 цифр)

***

### correspondent\_account

> **correspondent\_account**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:29](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentOrder.type.ts#L29)

Корреспондентский счёт банка получателя

***

### name

> **name**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:23](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentOrder.type.ts#L23)

Название банка получателя (не более 45 символов)
