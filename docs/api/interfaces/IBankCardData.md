[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IBankCardData

# Interface: IBankCardData

Defined in: [src/types/payments/paymentMethod.type.ts:188](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L188)

Данные банковской карты в ответе API

## See

https://yookassa.ru/developers/api#payment_object_payment_method_card

## Properties

### card\_product?

> `optional` **card\_product?**: `object`

Defined in: [src/types/payments/paymentMethod.type.ts:200](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L200)

Продукт банковской карты

#### code

> **code**: `string`

Код продукта карты

#### name?

> `optional` **name?**: `string`

Название продукта карты

***

### card\_type

> **card\_type**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:198](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L198)

Тип банковской карты

***

### expiry\_month

> **expiry\_month**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:196](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L196)

Срок действия — месяц (MM)

***

### expiry\_year

> **expiry\_year**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:194](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L194)

Срок действия — год (YYYY)

***

### first6?

> `optional` **first6?**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:190](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L190)

Первые 6 цифр номера карты (BIN)

***

### issuer\_country?

> `optional` **issuer\_country?**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:207](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L207)

Код страны банка-эмитента (ISO 3166-1 alpha-2)

***

### issuer\_name?

> `optional` **issuer\_name?**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:209](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L209)

Название банка-эмитента

***

### last4

> **last4**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:192](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L192)

Последние 4 цифры номера карты

***

### source?

> `optional` **source?**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:211](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L211)

Источник данных карты — если использовали Pay-сервис
