[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IBankCardData

# Interface: IBankCardData

Defined in: [src/types/payments/paymentMethod.type.ts:124](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentMethod.type.ts#L124)

Данные банковской карты в ответе API

## See

https://yookassa.ru/developers/api#payment_object_payment_method_card

## Properties

### card\_product?

> `optional` **card\_product**: `object`

Defined in: [src/types/payments/paymentMethod.type.ts:136](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentMethod.type.ts#L136)

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

Defined in: [src/types/payments/paymentMethod.type.ts:134](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentMethod.type.ts#L134)

Тип банковской карты

***

### expiry\_month

> **expiry\_month**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:132](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentMethod.type.ts#L132)

Срок действия, месяц (MM)

***

### expiry\_year

> **expiry\_year**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:130](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentMethod.type.ts#L130)

Срок действия, год (YYYY)

***

### first6?

> `optional` **first6**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:126](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentMethod.type.ts#L126)

Первые 6 цифр номера карты (BIN)

***

### issuer\_country?

> `optional` **issuer\_country**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:143](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentMethod.type.ts#L143)

Код страны банка-эмитента (ISO 3166-1 alpha-2)

***

### issuer\_name?

> `optional` **issuer\_name**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:145](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentMethod.type.ts#L145)

Название банка-эмитента

***

### last4

> **last4**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:128](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentMethod.type.ts#L128)

Последние 4 цифры номера карты

***

### source?

> `optional` **source**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:147](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentMethod.type.ts#L147)

Источник данных карты (если использовался Pay-сервис)
