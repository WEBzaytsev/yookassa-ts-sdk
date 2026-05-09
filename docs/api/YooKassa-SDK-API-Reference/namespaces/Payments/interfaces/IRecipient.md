[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / IRecipient

# Interface: IRecipient

Defined in: [src/types/payments/payment.type.ts:51](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/payment.type.ts#L51)

Получатель платежа.

## Properties

### account\_id

> **account\_id**: `string`

Defined in: [src/types/payments/payment.type.ts:53](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/payment.type.ts#L53)

Идентификатор магазина в ЮKassa.

***

### gateway\_id

> **gateway\_id**: `string`

Defined in: [src/types/payments/payment.type.ts:55](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/payment.type.ts#L55)

Идентификатор субаккаунта. Используется для разделения потоков платежей в рамках одного аккаунта.
