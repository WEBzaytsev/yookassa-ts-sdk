[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IBankCardData

# Interface: IBankCardData

Defined in: [src/types/payments/paymentMethod.type.ts:158](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L158)

Данные банковской карты в ответе API

## See

https://yookassa.ru/developers/api#payment_object_payment_method_card

## Properties

### card\_product?

> `optional` **card\_product**: `object`

Defined in: [src/types/payments/paymentMethod.type.ts:170](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L170)

Продукт банковской карты

#### code

> **code**: `string`

Код продукта карты

#### name?

> `optional` **name**: `string`

Название продукта карты

***

### card\_type

> **card\_type**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:168](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L168)

Тип банковской карты

***

### expiry\_month

> **expiry\_month**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:166](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L166)

Срок действия, месяц (MM)

***

### expiry\_year

> **expiry\_year**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:164](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L164)

Срок действия, год (YYYY)

***

### first6?

> `optional` **first6**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:160](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L160)

Первые 6 цифр номера карты (BIN)

***

### issuer\_country?

> `optional` **issuer\_country**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:177](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L177)

Код страны банка-эмитента (ISO 3166-1 alpha-2)

***

### issuer\_name?

> `optional` **issuer\_name**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:179](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L179)

Название банка-эмитента

***

### last4

> **last4**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:162](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L162)

Последние 4 цифры номера карты

***

### source?

> `optional` **source**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:181](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L181)

Источник данных карты (если использовался Pay-сервис)
