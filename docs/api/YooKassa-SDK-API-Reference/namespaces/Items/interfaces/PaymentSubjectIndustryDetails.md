[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Items](../README.md) / PaymentSubjectIndustryDetails

# Interface: PaymentSubjectIndustryDetails

Defined in: [src/types/receipt/item.type.ts:8](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L8)

Отраслевой реквизит предмета расчёта (тег 54 ФЗ — 1260). Для Чеков ЮKassa или касс на ФФД 1.2

## Properties

### document\_date

> **document\_date**: `string`

Defined in: [src/types/receipt/item.type.ts:15](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L15)

Дата документа основания (тег 54 ФЗ — 1263). Формат [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)

Пример: `2020-11-18`

***

### document\_number

> **document\_number**: `string`

Defined in: [src/types/receipt/item.type.ts:20](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L20)

Номер нормативного акта ФОИВ, регламентирующего «значение отраслевого реквизита» (тег 54 ФЗ — 1264).

Длина: до 32

***

### federal\_id

> **federal\_id**: `string`

Defined in: [src/types/receipt/item.type.ts:10](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L10)

ID федерального органа исполнительной власти (тег 54 ФЗ — 1262)

***

### value

> **value**: `string`

Defined in: [src/types/receipt/item.type.ts:25](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L25)

Значение отраслевого реквизита (тег 54 ФЗ — 1265).

Длина: до 256. Пример: `123/43`
