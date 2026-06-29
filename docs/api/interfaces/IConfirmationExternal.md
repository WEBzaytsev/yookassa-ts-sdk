[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IConfirmationExternal

# Interface: IConfirmationExternal

Defined in: [src/types/payments/paymentsConfirmation.type.ts:93](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentsConfirmation.type.ts#L93)

**Сценарий External**

Пользователь действует во внешней системе (например, ответ на SMS).
Сообщите пользователю о следующих шагах.

## Extends

- `IGeneralConfirmation`

## Properties

### locale?

> `optional` **locale?**: [`LocaleEnum`](../enumerations/LocaleEnum.md)

Defined in: [src/types/payments/paymentsConfirmation.type.ts:23](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentsConfirmation.type.ts#L23)

Язык интерфейса, писем и SMS (ISO/IEC 15897): `ru_RU`, `en_US`. Регистр важен

#### Inherited from

`IGeneralConfirmation.locale`

***

### type

> **type**: `"external"`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:94](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentsConfirmation.type.ts#L94)

Код сценария подтверждения

#### Overrides

`IGeneralConfirmation.type`
