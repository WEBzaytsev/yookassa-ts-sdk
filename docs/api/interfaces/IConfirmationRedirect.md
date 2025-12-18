[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IConfirmationRedirect

# Interface: IConfirmationRedirect

Defined in: [src/types/payments/paymentsConfirmation.type.ts:41](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentsConfirmation.type.ts#L41)

***Сценарий подтверждения `Redirect`***

пользователю необходимо что-то сделать на странице ЮKassa или ее партнера (например, ввести данные банковской карты или пройти аутентификацию по 3-D Secure). Вам нужно перенаправить пользователя на confirmation_url, полученный в платеже . При успешной оплате (и если что-то пойдет не так) ЮKassa вернет пользователя на return_url, который вы отправите в запросе на создание платежа

## Extends

- `IGeneralConfirmation`

## Properties

### confirmation\_url?

> `optional` **confirmation\_url**: `string`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:45](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentsConfirmation.type.ts#L45)

URL, на который необходимо перенаправить пользователя для подтверждения оплаты.

***

### enforce?

> `optional` **enforce**: `boolean`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:47](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentsConfirmation.type.ts#L47)

Запрос на проведение платежа с аутентификацией по 3-D Secure. Будет работать, если оплату банковской картой вы по умолчанию принимаете без подтверждения платежа пользователем. В остальных случаях аутентификацией по 3-D Secure будет управлять ЮKassa. Если хотите принимать платежи без дополнительного подтверждения пользователем, напишите вашему менеджеру ЮKassa.

***

### locale?

> `optional` **locale**: [`LocaleEnum`](../enumerations/LocaleEnum.md)

Defined in: [src/types/payments/paymentsConfirmation.type.ts:23](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentsConfirmation.type.ts#L23)

Язык интерфейса, писем и смс, которые будет видеть или получать пользователь. Формат соответствует ISO/IEC 15897. Возможные значения: ru_RU, en_US. Регистр важен.

#### Inherited from

`IGeneralConfirmation.locale`

***

### return\_url?

> `optional` **return\_url**: `string`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:54](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentsConfirmation.type.ts#L54)

URL, на который вернется пользователь после подтверждения или отмены платежа на веб-странице. Не более 2048 символов.

Можно не указывать если настроен `default_return_url` в ConnectorOpts.

#### See

https://yookassa.ru/developers/api#create_payment

***

### type

> **type**: `"redirect"`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:43](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentsConfirmation.type.ts#L43)

Код сценария подтверждения.

#### Overrides

`IGeneralConfirmation.type`
