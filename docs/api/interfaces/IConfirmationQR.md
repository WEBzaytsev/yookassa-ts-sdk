[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IConfirmationQR

# Interface: IConfirmationQR

Defined in: [src/types/payments/paymentsConfirmation.type.ts:62](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentsConfirmation.type.ts#L62)

***Сценарий подтверждения `QR-код`***

для подтверждения платежа пользователю необходимо просканировать QR-код. От вас требуется сгенерировать QR-код, используя любой доступный инструмент, и отобразить его на странице оплаты.

## Extends

- `IGeneralConfirmation`

## Properties

### confirmation\_data

> **confirmation\_data**: `string`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:65](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentsConfirmation.type.ts#L65)

Данные для генерации QR-кода.

***

### locale?

> `optional` **locale**: [`LocaleEnum`](../enumerations/LocaleEnum.md)

Defined in: [src/types/payments/paymentsConfirmation.type.ts:23](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentsConfirmation.type.ts#L23)

Язык интерфейса, писем и смс, которые будет видеть или получать пользователь. Формат соответствует ISO/IEC 15897. Возможные значения: ru_RU, en_US. Регистр важен.

#### Inherited from

`IGeneralConfirmation.locale`

***

### type

> **type**: `"qr"`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:63](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentsConfirmation.type.ts#L63)

Код сценария подтверждения.

#### Overrides

`IGeneralConfirmation.type`
