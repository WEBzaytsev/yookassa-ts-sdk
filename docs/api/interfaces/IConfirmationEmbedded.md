[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IConfirmationEmbedded

# Interface: IConfirmationEmbedded

Defined in: [src/types/payments/paymentsConfirmation.type.ts:30](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentsConfirmation.type.ts#L30)

***Сценарий подтверждения Embedded***

действия, необходимые для подтверждения платежа, будут зависеть от способа оплаты, который пользователь выберет в виджете ЮKassa. Подтверждение от пользователя получит ЮKassa — вам необходимо только встроить виджет к себе на страницу.

## Extends

- `IGeneralConfirmation`

## Properties

### confirmation\_token

> **confirmation\_token**: `string`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:33](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentsConfirmation.type.ts#L33)

Токен для инициализации [платежного виджета ЮKassa](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/widget/basics)

***

### locale?

> `optional` **locale**: [`LocaleEnum`](../enumerations/LocaleEnum.md)

Defined in: [src/types/payments/paymentsConfirmation.type.ts:23](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentsConfirmation.type.ts#L23)

Язык интерфейса, писем и смс, которые будет видеть или получать пользователь. Формат соответствует ISO/IEC 15897. Возможные значения: ru_RU, en_US. Регистр важен.

#### Inherited from

`IGeneralConfirmation.locale`

***

### type

> **type**: `"embedded"`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:31](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentsConfirmation.type.ts#L31)

Код сценария подтверждения.

#### Overrides

`IGeneralConfirmation.type`
