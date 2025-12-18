[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / AuthorizationDetails

# Type Alias: AuthorizationDetails

> **AuthorizationDetails** = `object`

Defined in: [src/types/payments/payment.type.ts:33](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L33)

Данные об авторизации платежа при оплате банковской картой.
Присутствуют только для этих способов оплаты:
- банковская карта
- Mir Pay
- SberPay
- T-Pay.

## Properties

### auth\_code?

> `optional` **auth\_code**: `string`

Defined in: [src/types/payments/payment.type.ts:39](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L39)

Код авторизации. Выдается эмитентом и подтверждает проведение авторизации. Пример:`062467`

***

### rrn?

> `optional` **rrn**: `string`

Defined in: [src/types/payments/payment.type.ts:37](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L37)

Retrieval Reference Number — уникальный идентификатор транзакции в системе эмитента. Пример: `603668680243`

***

### three\_d\_secure

> **three\_d\_secure**: `object`

Defined in: [src/types/payments/payment.type.ts:41](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L41)

Данные о прохождении пользователем аутентификации по 3‑D Secure для подтверждения платежа.

#### applied

> **applied**: `boolean`

Отображение пользователю формы для прохождения аутентификации по 3‑D Secure. Возможные значения:
- `true` — ЮKassa отобразила пользователю форму, чтобы он мог пройти аутентификацию по 3‑D Secure;
- `false` — платеж проходил без аутентификации по 3‑D Secure.
