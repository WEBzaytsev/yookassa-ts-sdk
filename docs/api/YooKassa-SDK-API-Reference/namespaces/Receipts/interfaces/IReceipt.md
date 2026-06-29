[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Receipts](../README.md) / IReceipt

# Interface: IReceipt

Defined in: [src/types/receipt/receipt.type.ts:39](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/receipt.type.ts#L39)

Объект чека — актуальные данные из API

## Properties

### fiscal\_attribute?

> `readonly` `optional` **fiscal\_attribute?**: `string`

Defined in: [src/types/receipt/receipt.type.ts:60](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/receipt.type.ts#L60)

Фискальный признак. Формирует фискальный накопитель из данных регистрации

***

### fiscal\_document\_number?

> `readonly` `optional` **fiscal\_document\_number?**: `string`

Defined in: [src/types/receipt/receipt.type.ts:56](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/receipt.type.ts#L56)

Номер фискального документа

***

### fiscal\_provider\_id?

> `readonly` `optional` **fiscal\_provider\_id?**: `string`

Defined in: [src/types/receipt/receipt.type.ts:64](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/receipt.type.ts#L64)

ID чека в онлайн-кассе. Есть после успешной регистрации

***

### fiscal\_storage\_number?

> `readonly` `optional` **fiscal\_storage\_number?**: `string`

Defined in: [src/types/receipt/receipt.type.ts:58](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/receipt.type.ts#L58)

Номер фискального накопителя в кассовом аппарате

***

### id

> `readonly` **id**: `string`

Defined in: [src/types/receipt/receipt.type.ts:41](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/receipt.type.ts#L41)

ID чека в ЮKassa

***

### items

> **items**: [`Item`](../../Items/interfaces/Item.md)[]

Defined in: [src/types/receipt/receipt.type.ts:66](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/receipt.type.ts#L66)

Товары в чеке (до 100)

***

### on\_behalf\_of?

> `optional` **on\_behalf\_of?**: `string`

Defined in: [src/types/receipt/receipt.type.ts:70](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/receipt.type.ts#L70)

ID магазина-отправителя чека. Выдаёт ЮKassa. Для Сплитования платежей

***

### payment\_id?

> `optional` **payment\_id?**: `string`

Defined in: [src/types/receipt/receipt.type.ts:45](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/receipt.type.ts#L45)

ID платежа, по которому сформирован чек

***

### receipt\_industry\_details?

> `optional` **receipt\_industry\_details?**: [`PaymentSubjectIndustryDetails`](../../Items/interfaces/PaymentSubjectIndustryDetails.md)[]

Defined in: [src/types/receipt/receipt.type.ts:79](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/receipt.type.ts#L79)

Отраслевой реквизит чека (тег 54 ФЗ — 1261). Для Чеков ЮKassa или касс на ФФД 1.2

***

### receipt\_operational\_details?

> `optional` **receipt\_operational\_details?**: `object`

Defined in: [src/types/receipt/receipt.type.ts:81](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/receipt.type.ts#L81)

Операционный реквизит чека (тег 54 ФЗ — 1270). Для Чеков ЮKassa или касс на ФФД 1.2

#### created\_at

> **created\_at**: `string`

Время операции (тег 54 ФЗ — 1273).

[UTC](https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F), формат [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

Пример: `2017-11-03T11:52:31.827Z`

#### operation\_id

> **operation\_id**: `number`

ID операции (тег 54 ФЗ — 1271). Число 0–255

#### value

> **value**: `string`

Данные операции (тег 54 ФЗ — 1272)

***

### refund\_id?

> `optional` **refund\_id?**: `string`

Defined in: [src/types/receipt/receipt.type.ts:47](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/receipt.type.ts#L47)

ID возврата, по которому сформирован чек. Нет в чеке платежа

***

### registered\_at?

> `readonly` `optional` **registered\_at?**: `string`

Defined in: [src/types/receipt/receipt.type.ts:62](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/receipt.type.ts#L62)

Время формирования чека в фискальном накопителе (ISO 8601)

***

### settlements?

> `optional` **settlements?**: [`Settlement`](../type-aliases/Settlement.md)[]

Defined in: [src/types/receipt/receipt.type.ts:68](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/receipt.type.ts#L68)

Совершённые расчёты

***

### status

> `readonly` **status**: [`ReceiptStatus`](../type-aliases/ReceiptStatus.md)

Defined in: [src/types/receipt/receipt.type.ts:54](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/receipt.type.ts#L54)

Статус доставки данных в онлайн-кассу:
- `pending` — в обработке;
- `succeeded` — зарегистрирован;
- `canceled` — не зарегистрирован; для Чеков ЮKassa — в поддержку, иначе — чек вручную.

***

### tax\_system\_code?

> `optional` **tax\_system\_code?**: `number`

Defined in: [src/types/receipt/receipt.type.ts:77](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/receipt.type.ts#L77)

Система налогообложения магазина (тег 54 ФЗ — 1055).

Сторонние кассы: обязателен для Атол Онлайн на ФФД 1.2 или при нескольких СНО; иначе не передавайте.
[Перечень значений](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#tax-systems)

Чеки ЮKassa: не передавайте — ЮKassa проигнорирует.

***

### type

> **type**: [`ReceiptKind`](../type-aliases/ReceiptKind.md)

Defined in: [src/types/receipt/receipt.type.ts:43](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/receipt.type.ts#L43)

Тип чека: приход (`payment`) или возврат прихода (`refund`)
