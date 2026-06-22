[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodSberBnpl

# Interface: IPaymentMethodSberBnpl

Defined in: [src/types/payments/paymentMethod.type.ts:358](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L358)

Плати частями (BNPL от СберБанка)

## Remarks

- Возврат платежа возможен только в течение **1 года** с момента создания (с 22 мая 2026 г., включая ранее созданные платежи).
- Максимальная сумма одного платежа: **50 000 ₽** (с 23 апреля 2026 г.).
- Доступен только срок рассрочки **2 месяца** (платёж раз в две недели); сроки 4 и 6 месяцев недоступны.

## Properties

### id

> **id**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:361](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L361)

Идентификатор способа оплаты

***

### saved

> **saved**: `boolean`

Defined in: [src/types/payments/paymentMethod.type.ts:363](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L363)

С помощью сохраненного способа оплаты можно проводить безакцептные списания

***

### status?

> `optional` **status?**: `"inactive"` \| `"active"`

Defined in: [src/types/payments/paymentMethod.type.ts:365](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L365)

Статус способа оплаты

***

### type

> **type**: [`sber_bnpl`](../enumerations/PaymentMethodsEnum.md#sber_bnpl)

Defined in: [src/types/payments/paymentMethod.type.ts:359](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L359)
