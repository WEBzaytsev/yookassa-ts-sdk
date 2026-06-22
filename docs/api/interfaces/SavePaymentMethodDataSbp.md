[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / SavePaymentMethodDataSbp

# Interface: SavePaymentMethodDataSbp

Defined in: [src/types/savedPaymentMethod.type.ts:80](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/savedPaymentMethod.type.ts#L80)

Запрос на создание привязки счёта СБП на нулевую сумму.

## See

https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments/save-payment-method/save-without-payment/sbp

## Properties

### client\_ip?

> `optional` **client\_ip?**: `string`

Defined in: [src/types/savedPaymentMethod.type.ts:85](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/savedPaymentMethod.type.ts#L85)

***

### confirmation?

> `optional` **confirmation?**: [`PaymentMethodsConfirmationDataRedirect`](PaymentMethodsConfirmationDataRedirect.md) \| [`PaymentMethodsConfirmationDataQr`](PaymentMethodsConfirmationDataQr.md)

Defined in: [src/types/savedPaymentMethod.type.ts:86](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/savedPaymentMethod.type.ts#L86)

***

### holder?

> `optional` **holder?**: `object`

Defined in: [src/types/savedPaymentMethod.type.ts:82](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/savedPaymentMethod.type.ts#L82)

#### gateway\_id?

> `optional` **gateway\_id?**: `string`

***

### type

> **type**: `"sbp"`

Defined in: [src/types/savedPaymentMethod.type.ts:81](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/savedPaymentMethod.type.ts#L81)
