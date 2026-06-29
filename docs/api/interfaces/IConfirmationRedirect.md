[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IConfirmationRedirect

# Interface: IConfirmationRedirect

Defined in: [src/types/payments/paymentsConfirmation.type.ts:43](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentsConfirmation.type.ts#L43)

**Сценарий Redirect**

Пользователь действует на странице ЮKassa или партнёра (карта, 3-D Secure).
Перенаправьте на `confirmation_url` из платежа. После оплаты ЮKassa вернёт на `return_url`.

## Extends

- `IGeneralConfirmation`

## Properties

### confirmation\_url?

> `optional` **confirmation\_url?**: `string`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:47](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentsConfirmation.type.ts#L47)

URL для подтверждения оплаты

***

### enforce?

> `optional` **enforce?**: `boolean`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:49](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentsConfirmation.type.ts#L49)

Запрос 3-D Secure при приёме карт без подтверждения по умолчанию. Иначе 3-D Secure управляет ЮKassa

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

Defined in: [src/types/payments/paymentsConfirmation.type.ts:56](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentsConfirmation.type.ts#L56)

URL возврата после подтверждения или отмены. До 2048 символов.

Можно не указывать при настроенном `default_return_url` в ConnectorOpts.

#### See

https://yookassa.ru/developers/api#create_payment

***

### type

> **type**: `"redirect"`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:45](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentsConfirmation.type.ts#L45)

Код сценария подтверждения

#### Overrides

`IGeneralConfirmation.type`
