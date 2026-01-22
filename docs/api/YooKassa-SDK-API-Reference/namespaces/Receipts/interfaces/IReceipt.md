[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Receipts](../README.md) / IReceipt

# Interface: IReceipt

Defined in: [src/types/receipt/receipt.type.ts:41](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/receipt/receipt.type.ts#L41)

Объект чека — актуальная информация о чеке из API.

## Properties

### fiscal\_attribute?

> `readonly` `optional` **fiscal\_attribute**: `string`

Defined in: [src/types/receipt/receipt.type.ts:64](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/receipt/receipt.type.ts#L64)

Фискальный признак чека. Формируется фискальным накопителем на основе данных, переданных для регистрации чека.

***

### fiscal\_document\_number?

> `readonly` `optional` **fiscal\_document\_number**: `string`

Defined in: [src/types/receipt/receipt.type.ts:60](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/receipt/receipt.type.ts#L60)

Номер фискального документа.

***

### fiscal\_provider\_id?

> `readonly` `optional` **fiscal\_provider\_id**: `string`

Defined in: [src/types/receipt/receipt.type.ts:68](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/receipt/receipt.type.ts#L68)

Идентификатор чека в онлайн-кассе. Присутствует, если чек удалось зарегистрировать.

***

### fiscal\_storage\_number?

> `readonly` `optional` **fiscal\_storage\_number**: `string`

Defined in: [src/types/receipt/receipt.type.ts:62](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/receipt/receipt.type.ts#L62)

Номер фискального накопителя в кассовом аппарате.

***

### id

> `readonly` **id**: `string`

Defined in: [src/types/receipt/receipt.type.ts:43](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/receipt/receipt.type.ts#L43)

Идентификатор чека в ЮKassa.

***

### items

> **items**: [`Item`](../../Items/interfaces/Item.md)[]

Defined in: [src/types/receipt/receipt.type.ts:70](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/receipt/receipt.type.ts#L70)

Список товаров в чеке (не более 100 товаров).

***

### on\_behalf\_of?

> `optional` **on\_behalf\_of**: `string`

Defined in: [src/types/receipt/receipt.type.ts:74](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/receipt/receipt.type.ts#L74)

Идентификатор магазина, от имени которого нужно отправить чек. Выдается ЮKassa. Присутствует, если вы используете Сплитование платежей .

***

### payment\_id?

> `optional` **payment\_id**: `string`

Defined in: [src/types/receipt/receipt.type.ts:47](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/receipt/receipt.type.ts#L47)

Идентификатор платежа, для которого был сформирован чек.

***

### receipt\_industry\_details?

> `optional` **receipt\_industry\_details**: [`PaymentSubjectIndustryDetails`](../../Items/interfaces/PaymentSubjectIndustryDetails.md)[]

Defined in: [src/types/receipt/receipt.type.ts:83](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/receipt/receipt.type.ts#L83)

Отраслевой реквизит чека (тег в 54 ФЗ — 1261). Можно передавать, если используете Чеки от ЮKassa или онлайн-кассу, обновленную до ФФД 1.2.

***

### receipt\_operational\_details?

> `optional` **receipt\_operational\_details**: `object`

Defined in: [src/types/receipt/receipt.type.ts:85](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/receipt/receipt.type.ts#L85)

Операционный реквизит чека (тег в 54 ФЗ — 1270). Можно передавать, если используете Чеки от ЮKassa или онлайн-кассу, обновленную до ФФД 1.2.

#### created\_at

> **created\_at**: `string`

Время создания операции (тег в 54 ФЗ — 1273).

Указывается по [UTC](https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F) и передается в формате [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

Пример: `2017-11-03T11:52:31.827Z`

#### operation\_id

> **operation\_id**: `number`

Идентификатор операции (тег в 54 ФЗ — 1271). Число от 0 до 255.

#### value

> **value**: `string`

Данные операции (тег в 54 ФЗ — 1272).

***

### refund\_id?

> `optional` **refund\_id**: `string`

Defined in: [src/types/receipt/receipt.type.ts:49](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/receipt/receipt.type.ts#L49)

Идентификатор возврата, для которого был сформирован чек. Отсутствует в чеке платежа.

***

### registered\_at?

> `readonly` `optional` **registered\_at**: `string`

Defined in: [src/types/receipt/receipt.type.ts:66](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/receipt/receipt.type.ts#L66)

Дата и время формирования чека в фискальном накопителе. Указывается в формате ISO 8601.

***

### settlements?

> `optional` **settlements**: [`Settlement`](../type-aliases/Settlement.md)[]

Defined in: [src/types/receipt/receipt.type.ts:72](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/receipt/receipt.type.ts#L72)

Перечень совершенных расчетов.

***

### status

> `readonly` **status**: [`ReceiptStatus`](../type-aliases/ReceiptStatus.md)

Defined in: [src/types/receipt/receipt.type.ts:58](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/receipt/receipt.type.ts#L58)

Статус доставки данных для чека в онлайн-кассу.

Возможные значения:
- `pending` — данные в обработке;
- `succeeded` — чек успешно зарегистрирован;
- `canceled` — чек зарегистрировать не удалось; если используете Чеки от ЮKassa, обратитесь в техническую поддержку, в остальных случаях сформируйте чек вручную.

***

### tax\_system\_code?

> `optional` **tax\_system\_code**: `number`

Defined in: [src/types/receipt/receipt.type.ts:81](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/receipt/receipt.type.ts#L81)

**Система налогообложения магазина (тег в 54 ФЗ — 1055).***

Для сторонних онлайн-касс: обязательный параметр, если вы используете онлайн-кассу Атол Онлайн, обновленную до ФФД 1.2, или у вас несколько систем налогообложения, в остальных случаях не передается.
[Перечень возможных значений](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#tax-systems)

Для Чеков от ЮKassa: параметр передавать не нужно, ЮKassa его проигнорирует.

***

### type

> **type**: [`ReceiptKind`](../type-aliases/ReceiptKind.md)

Defined in: [src/types/receipt/receipt.type.ts:45](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/receipt/receipt.type.ts#L45)

Тип чека в онлайн-кассе: приход (`payment`) или возврат прихода (`refund`).
