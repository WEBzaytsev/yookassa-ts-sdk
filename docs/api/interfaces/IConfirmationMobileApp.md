[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IConfirmationMobileApp

# Interface: IConfirmationMobileApp

Defined in: [src/types/payments/paymentsConfirmation.type.ts:76](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentsConfirmation.type.ts#L76)

**Сценарий Mobile application**

Пользователь подтверждает в мобильном приложении (интернет-банк).
Перенаправьте на `confirmation_url` из платежа.

## Extends

- `IGeneralConfirmation`

## Properties

### confirmation\_url

> **confirmation\_url**: `string`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:79](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentsConfirmation.type.ts#L79)

Диплинк приложения для подтверждения

***

### locale?

> `optional` **locale?**: [`LocaleEnum`](../enumerations/LocaleEnum.md)

Defined in: [src/types/payments/paymentsConfirmation.type.ts:23](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentsConfirmation.type.ts#L23)

Язык интерфейса, писем и SMS (ISO/IEC 15897): `ru_RU`, `en_US`. Регистр важен

#### Inherited from

`IGeneralConfirmation.locale`

***

### return\_url?

> `optional` **return\_url?**: `string`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:84](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentsConfirmation.type.ts#L84)

URL или диплинк возврата после подтверждения или отмены.
До 255 символов для SberPay, 2048 — для остальных.

***

### type

> **type**: `"mobile_application"`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:77](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentsConfirmation.type.ts#L77)

Код сценария подтверждения

#### Overrides

`IGeneralConfirmation.type`
