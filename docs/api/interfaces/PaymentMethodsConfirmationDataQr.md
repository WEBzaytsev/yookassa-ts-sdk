[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / PaymentMethodsConfirmationDataQr

# Interface: PaymentMethodsConfirmationDataQr

Defined in: [src/types/savedPaymentMethod.type.ts:25](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/savedPaymentMethod.type.ts#L25)

Данные подтверждения привязки через QR-код (запрос).
Используется при привязке счёта СБП на нулевую сумму.

## See

https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments/save-payment-method/save-without-payment/sbp

## Properties

### return\_url?

> `optional` **return\_url?**: `string`

Defined in: [src/types/savedPaymentMethod.type.ts:28](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/savedPaymentMethod.type.ts#L28)

Адрес страницы возврата после привязки. URI по стандарту RFC-3986, не более 2048 символов.

***

### type

> **type**: `"qr"`

Defined in: [src/types/savedPaymentMethod.type.ts:26](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/savedPaymentMethod.type.ts#L26)
