[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IConfirmationQR

# Interface: IConfirmationQR

Defined in: [src/types/payments/paymentsConfirmation.type.ts:64](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentsConfirmation.type.ts#L64)

**Сценарий QR-код**

Пользователь сканирует QR. Сгенерируйте QR из `confirmation_data` и покажите на странице оплаты.

## Extends

- `IGeneralConfirmation`

## Properties

### confirmation\_data

> **confirmation\_data**: `string`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:67](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentsConfirmation.type.ts#L67)

Данные для генерации QR-кода

***

### locale?

> `optional` **locale?**: [`LocaleEnum`](../enumerations/LocaleEnum.md)

Defined in: [src/types/payments/paymentsConfirmation.type.ts:23](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentsConfirmation.type.ts#L23)

Язык интерфейса, писем и SMS (ISO/IEC 15897): `ru_RU`, `en_US`. Регистр важен

#### Inherited from

`IGeneralConfirmation.locale`

***

### type

> **type**: `"qr"`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:65](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentsConfirmation.type.ts#L65)

Код сценария подтверждения

#### Overrides

`IGeneralConfirmation.type`
