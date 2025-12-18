[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / SettlementTypeMap

# Variable: SettlementTypeMap

> `const` **SettlementTypeMap**: `object`

Defined in: [src/dictionaries.ts:163](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/421052f4b89e2476891b70faab4f1b4ec3acb883/src/dictionaries.ts#L163)

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
