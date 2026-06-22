[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / PaymentMethodDataB2bSberbank

# Interface: PaymentMethodDataB2bSberbank

Defined in: [src/types/payments/paymentMethod.type.ts:461](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L461)

Данные для оплаты через СберБанк Бизнес Онлайн

## Properties

### payment\_purpose

> **payment\_purpose**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:464](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L464)

Назначение платежа (не больше 210 символов)

***

### type

> **type**: `"b2b_sberbank"`

Defined in: [src/types/payments/paymentMethod.type.ts:462](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L462)

***

### vat\_data

> **vat\_data**: `object`

Defined in: [src/types/payments/paymentMethod.type.ts:466](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L466)

Данные о НДС

#### amount?

> `optional` **amount?**: [`IAmount`](IAmount.md)

#### type

> **type**: `"mixed"` \| `"calculated"` \| `"untaxed"`
