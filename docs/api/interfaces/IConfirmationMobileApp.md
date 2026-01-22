[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IConfirmationMobileApp

# Interface: IConfirmationMobileApp

Defined in: [src/types/payments/paymentsConfirmation.type.ts:73](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/payments/paymentsConfirmation.type.ts#L73)

***Сценарий подтверждения `Mobile application`***

для подтверждения платежа пользователю необходимо совершить действия в мобильном приложении (например, в приложении интернет-банка). Вам нужно перенаправить пользователя на confirmation_url, полученный в платеже

## Extends

- `IGeneralConfirmation`

## Properties

### confirmation\_url

> **confirmation\_url**: `string`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:76](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/payments/paymentsConfirmation.type.ts#L76)

Диплинк на мобильное приложение, в котором пользователь подтверждает платеж.

***

### locale?

> `optional` **locale**: [`LocaleEnum`](../enumerations/LocaleEnum.md)

Defined in: [src/types/payments/paymentsConfirmation.type.ts:23](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/payments/paymentsConfirmation.type.ts#L23)

Язык интерфейса, писем и смс, которые будет видеть или получать пользователь. Формат соответствует ISO/IEC 15897. Возможные значения: ru_RU, en_US. Регистр важен.

#### Inherited from

`IGeneralConfirmation.locale`

***

### return\_url?

> `optional` **return\_url**: `string`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:81](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/payments/paymentsConfirmation.type.ts#L81)

URL или диплинк, на который вернется пользователь после подтверждения или отмены платежа в приложении.
Не более 255 символов для SberPay, 2048 для остальных.

***

### type

> **type**: `"mobile_application"`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:74](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/payments/paymentsConfirmation.type.ts#L74)

Код сценария подтверждения.

#### Overrides

`IGeneralConfirmation.type`
