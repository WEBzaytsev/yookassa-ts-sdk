[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / SavePaymentMethodBankCard

# Interface: SavePaymentMethodBankCard

Defined in: [src/types/savedPaymentMethod.type.ts:101](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/savedPaymentMethod.type.ts#L101)

Сохранённая банковская карта (ответ API).

## Properties

### card?

> `optional` **card?**: [`IBankCardData`](IBankCardData.md)

Defined in: [src/types/savedPaymentMethod.type.ts:111](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/savedPaymentMethod.type.ts#L111)

***

### confirmation?

> `optional` **confirmation?**: [`PaymentMethodsConfirmationRedirect`](PaymentMethodsConfirmationRedirect.md) \| [`PaymentMethodsConfirmationQr`](PaymentMethodsConfirmationQr.md)

Defined in: [src/types/savedPaymentMethod.type.ts:112](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/savedPaymentMethod.type.ts#L112)

***

### holder

> **holder**: `object`

Defined in: [src/types/savedPaymentMethod.type.ts:106](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/savedPaymentMethod.type.ts#L106)

#### account\_id

> **account\_id**: `string`

#### gateway\_id?

> `optional` **gateway\_id?**: `string`

***

### id

> **id**: `string`

Defined in: [src/types/savedPaymentMethod.type.ts:103](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/savedPaymentMethod.type.ts#L103)

***

### saved

> **saved**: `boolean`

Defined in: [src/types/savedPaymentMethod.type.ts:104](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/savedPaymentMethod.type.ts#L104)

***

### status

> **status**: [`SavePaymentMethodStatus`](../type-aliases/SavePaymentMethodStatus.md)

Defined in: [src/types/savedPaymentMethod.type.ts:105](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/savedPaymentMethod.type.ts#L105)

***

### title?

> `optional` **title?**: `string`

Defined in: [src/types/savedPaymentMethod.type.ts:110](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/savedPaymentMethod.type.ts#L110)

***

### type

> **type**: `"bank_card"`

Defined in: [src/types/savedPaymentMethod.type.ts:102](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/savedPaymentMethod.type.ts#L102)
