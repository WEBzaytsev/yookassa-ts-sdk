[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / PaymentPeriod

# Interface: PaymentPeriod

Defined in: [src/types/payments/paymentOrder.type.ts:7](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentOrder.type.ts#L7)

Период оплаты, за который выставлены начисления.
Передаётся в платёжном поручении (ЖКХ).

## Properties

### month

> **month**: `number`

Defined in: [src/types/payments/paymentOrder.type.ts:9](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentOrder.type.ts#L9)

Месяц периода (1–12). Например, 1 — январь.

***

### year

> **year**: `number`

Defined in: [src/types/payments/paymentOrder.type.ts:14](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentOrder.type.ts#L14)

Год периода.
Значение должно быть в диапазоне 1920–2050. Например, 2025.
