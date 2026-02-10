[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / Statement

# Interface: Statement

Defined in: [src/types/payments/payment.type.ts:237](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e5153b54297e1c5c82db159e94d75578d740e3cf/src/types/payments/payment.type.ts#L237)

Данные для отправки справки (квитанции) пользователю после оплаты

## See

https://yookassa.ru/developers/payment-acceptance/getting-started/selecting-integration-scenario

## Properties

### delivery\_method

> **delivery\_method**: [`StatementDeliveryMethod`](StatementDeliveryMethod.md)

Defined in: [src/types/payments/payment.type.ts:241](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e5153b54297e1c5c82db159e94d75578d740e3cf/src/types/payments/payment.type.ts#L241)

Способ доставки справки

***

### type

> **type**: `"payment_overview"`

Defined in: [src/types/payments/payment.type.ts:239](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e5153b54297e1c5c82db159e94d75578d740e3cf/src/types/payments/payment.type.ts#L239)

Тип справки. Сейчас доступен только `payment_overview` — квитанция по платежу
