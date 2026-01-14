[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / IRecipient

# Interface: IRecipient

Defined in: [src/types/payments/payment.type.ts:50](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/payments/payment.type.ts#L50)

Получатель платежа.

## Properties

### account\_id

> **account\_id**: `string`

Defined in: [src/types/payments/payment.type.ts:52](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/payments/payment.type.ts#L52)

Идентификатор магазина в ЮKassa.

***

### gateway\_id

> **gateway\_id**: `string`

Defined in: [src/types/payments/payment.type.ts:54](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/payments/payment.type.ts#L54)

Идентификатор субаккаунта. Используется для разделения потоков платежей в рамках одного аккаунта.
