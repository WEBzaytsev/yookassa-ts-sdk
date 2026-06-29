[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / PaymentMethodsConfirmationDataQr

# Interface: PaymentMethodsConfirmationDataQr

Defined in: [src/types/savedPaymentMethod.type.ts:25](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/savedPaymentMethod.type.ts#L25)

Подтверждение привязки через QR (запрос).
Для привязки счёта СБП на нулевую сумму.

## See

https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments/save-payment-method/save-without-payment/sbp

## Properties

### return\_url?

> `optional` **return\_url?**: `string`

Defined in: [src/types/savedPaymentMethod.type.ts:28](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/savedPaymentMethod.type.ts#L28)

URL возврата после привязки. RFC-3986, до 2048 символов

***

### type

> **type**: `"qr"`

Defined in: [src/types/savedPaymentMethod.type.ts:26](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/savedPaymentMethod.type.ts#L26)
