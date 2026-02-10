[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / SettlementTypeMap

# Variable: SettlementTypeMap

> `const` **SettlementTypeMap**: `object`

Defined in: [src/dictionaries.ts:172](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/c8dc341ff73a5ece64b0ee18dd5940355be4e506/src/dictionaries.ts#L172)

Тип расчета передается в запросе на создание чека в массиве 'settlements', в параметре 'type'.

## Type Declaration

### cashless

> **cashless**: `string` = `'Безналичный расчет'`

### consideration

> **consideration**: `string` = `'Встречное предоставление'`

### postpayment

> **postpayment**: `string` = `'Постоплата(кредит)'`

### prepayment

> **prepayment**: `string` = `'Предоплата(аванс)'`
