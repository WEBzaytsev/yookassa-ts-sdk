[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / AuthorizationDetails

# Type Alias: AuthorizationDetails

> **AuthorizationDetails** = `object`

Defined in: [src/types/payments/payment.type.ts:29](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L29)

Авторизация при оплате картой, Mir Pay, SberPay, T-Pay.

## Properties

### auth\_code?

> `optional` **auth\_code?**: `string`

Defined in: [src/types/payments/payment.type.ts:35](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L35)

Код авторизации эмитента. Пример: `062467`

***

### rrn?

> `optional` **rrn?**: `string`

Defined in: [src/types/payments/payment.type.ts:33](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L33)

RRN — ID транзакции у эмитента. Пример: `603668680243`

***

### three\_d\_secure

> **three\_d\_secure**: `object`

Defined in: [src/types/payments/payment.type.ts:37](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L37)

Результат 3-D Secure

#### applied

> **applied**: `boolean`

Показ формы 3-D Secure: `true` — показана, `false` — без аутентификации
