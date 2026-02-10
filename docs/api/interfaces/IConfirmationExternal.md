[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IConfirmationExternal

# Interface: IConfirmationExternal

Defined in: [src/types/payments/paymentsConfirmation.type.ts:89](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/c8dc341ff73a5ece64b0ee18dd5940355be4e506/src/types/payments/paymentsConfirmation.type.ts#L89)

***Сценарий подтверждения `External`***

 для подтверждения платежа пользователю необходимо совершить действия во внешней системе (например, ответить на смс). От вас требуется только сообщить пользователю о дальнейших шагах.

## Extends

- `IGeneralConfirmation`

## Properties

### locale?

> `optional` **locale**: [`LocaleEnum`](../enumerations/LocaleEnum.md)

Defined in: [src/types/payments/paymentsConfirmation.type.ts:23](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/c8dc341ff73a5ece64b0ee18dd5940355be4e506/src/types/payments/paymentsConfirmation.type.ts#L23)

Язык интерфейса, писем и смс, которые будет видеть или получать пользователь. Формат соответствует ISO/IEC 15897. Возможные значения: ru_RU, en_US. Регистр важен.

#### Inherited from

`IGeneralConfirmation.locale`

***

### type

> **type**: `"external"`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:90](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/c8dc341ff73a5ece64b0ee18dd5940355be4e506/src/types/payments/paymentsConfirmation.type.ts#L90)

Код сценария подтверждения.

#### Overrides

`IGeneralConfirmation.type`
