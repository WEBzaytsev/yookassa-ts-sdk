[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / Statement

# Interface: Statement

Defined in: [src/types/payments/payment.type.ts:222](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/payment.type.ts#L222)

Данные для отправки справки (квитанции) пользователю после оплаты

## See

https://yookassa.ru/developers/payment-acceptance/getting-started/selecting-integration-scenario

## Properties

### delivery\_method

> **delivery\_method**: [`StatementDeliveryMethod`](StatementDeliveryMethod.md)

Defined in: [src/types/payments/payment.type.ts:226](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/payment.type.ts#L226)

Способ доставки справки

***

### type

> **type**: `"payment_overview"`

Defined in: [src/types/payments/payment.type.ts:224](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/payment.type.ts#L224)

Тип справки. Сейчас доступен только `payment_overview` — квитанция по платежу
