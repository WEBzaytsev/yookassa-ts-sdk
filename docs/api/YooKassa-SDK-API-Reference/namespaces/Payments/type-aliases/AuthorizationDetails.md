[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / AuthorizationDetails

# Type Alias: AuthorizationDetails

> **AuthorizationDetails** = `object`

Defined in: [src/types/payments/payment.type.ts:34](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L34)

Данные об авторизации платежа при оплате банковской картой.
Присутствуют только для этих способов оплаты:
- банковская карта
- Mir Pay
- SberPay
- T-Pay.

## Properties

### auth\_code?

> `optional` **auth\_code?**: `string`

Defined in: [src/types/payments/payment.type.ts:40](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L40)

Код авторизации. Выдается эмитентом и подтверждает проведение авторизации. Пример:`062467`

***

### rrn?

> `optional` **rrn?**: `string`

Defined in: [src/types/payments/payment.type.ts:38](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L38)

Retrieval Reference Number — уникальный идентификатор транзакции в системе эмитента. Пример: `603668680243`

***

### three\_d\_secure

> **three\_d\_secure**: `object`

Defined in: [src/types/payments/payment.type.ts:42](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L42)

Данные о прохождении пользователем аутентификации по 3‑D Secure для подтверждения платежа.

#### applied

> **applied**: `boolean`

Отображение пользователю формы для прохождения аутентификации по 3‑D Secure. Возможные значения:
- `true` — ЮKassa отобразила пользователю форму, чтобы он мог пройти аутентификацию по 3‑D Secure;
- `false` — платеж проходил без аутентификации по 3‑D Secure.
