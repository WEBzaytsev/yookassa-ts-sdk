[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Items](../README.md) / PaymentSubjectIndustryDetails

# Interface: PaymentSubjectIndustryDetails

Defined in: [src/types/receipt/item.type.ts:8](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/receipt/item.type.ts#L8)

Отраслевой реквизит предмета расчета (тег в 54 ФЗ — 1260). Можно передавать, если используете Чеки от ЮKassa или онлайн-кассу, обновленную до ФФД 1.2.

## Properties

### document\_date

> **document\_date**: `string`

Defined in: [src/types/receipt/item.type.ts:15](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/receipt/item.type.ts#L15)

Дата документа основания (тег в 54 ФЗ — 1263). Передается в формате [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)

Пример: `2020-11-18`

***

### document\_number

> **document\_number**: `string`

Defined in: [src/types/receipt/item.type.ts:20](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/receipt/item.type.ts#L20)

Номер нормативного акта федерального органа исполнительной власти, регламентирующего порядок заполнения реквизита «значение отраслевого реквизита» (тег в 54 ФЗ — 1264).

Длина: до 32

***

### federal\_id

> **federal\_id**: `string`

Defined in: [src/types/receipt/item.type.ts:10](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/receipt/item.type.ts#L10)

Идентификатор федерального органа исполнительной власти (тег в 54 ФЗ — 1262).

***

### value

> **value**: `string`

Defined in: [src/types/receipt/item.type.ts:25](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/receipt/item.type.ts#L25)

Значение отраслевого реквизита (тег в 54 ФЗ — 1265).

Длина: до 256. Пример:`123/43`
