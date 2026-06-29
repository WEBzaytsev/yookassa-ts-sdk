[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IConfirmationEmbedded

# Interface: IConfirmationEmbedded

Defined in: [src/types/payments/paymentsConfirmation.type.ts:31](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentsConfirmation.type.ts#L31)

**Сценарий Embedded**

Подтверждение зависит от выбранного способа оплаты в виджете ЮKassa.
ЮKassa получает подтверждение от пользователя — встройте виджет на страницу.

## Extends

- `IGeneralConfirmation`

## Properties

### confirmation\_token

> **confirmation\_token**: `string`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:34](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentsConfirmation.type.ts#L34)

Токен для [виджета ЮKassa](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/widget/basics)

***

### locale?

> `optional` **locale?**: [`LocaleEnum`](../enumerations/LocaleEnum.md)

Defined in: [src/types/payments/paymentsConfirmation.type.ts:23](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentsConfirmation.type.ts#L23)

Язык интерфейса, писем и SMS (ISO/IEC 15897): `ru_RU`, `en_US`. Регистр важен

#### Inherited from

`IGeneralConfirmation.locale`

***

### type

> **type**: `"embedded"`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:32](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentsConfirmation.type.ts#L32)

Код сценария подтверждения

#### Overrides

`IGeneralConfirmation.type`
