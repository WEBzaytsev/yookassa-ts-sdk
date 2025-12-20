[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / IRecipient

# Interface: IRecipient

Defined in: [src/types/payments/payment.type.ts:50](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/types/payments/payment.type.ts#L50)

Получатель платежа.

## Properties

### account\_id

> **account\_id**: `string`

Defined in: [src/types/payments/payment.type.ts:52](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/types/payments/payment.type.ts#L52)

Идентификатор магазина в ЮKassa.

***

### gateway\_id

> **gateway\_id**: `string`

Defined in: [src/types/payments/payment.type.ts:54](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/types/payments/payment.type.ts#L54)

Идентификатор субаккаунта. Используется для разделения потоков платежей в рамках одного аккаунта.
