[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / SettlementTypeMap

# Variable: SettlementTypeMap

> `const` **SettlementTypeMap**: `object`

Defined in: [src/dictionaries.ts:172](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/dictionaries.ts#L172)

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
