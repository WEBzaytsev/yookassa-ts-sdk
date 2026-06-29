[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Items](../README.md) / Supplier

# Type Alias: Supplier

> **Supplier** = `object`

Defined in: [src/types/receipt/item.type.ts:79](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L79)

Поставщик товара или услуги (тег 54 ФЗ — 1224).
Для сценария [Сначала платёж, потом чек](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#receipt-after-payment).

## Properties

### inn?

> `optional` **inn?**: `string`

Defined in: [src/types/receipt/item.type.ts:88](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L88)

ИНН поставщика, маскированный (тег 54 ФЗ — 1226). Пример: `***`. Обязателен с ФФД 1.05

***

### name

> **name**: `string`

Defined in: [src/types/receipt/item.type.ts:81](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L81)

Наименование поставщика (тег 54 ФЗ — 1225). Обязателен с ФФД 1.1

***

### phone?

> `optional` **phone?**: `string`

Defined in: [src/types/receipt/item.type.ts:86](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L86)

Телефон поставщика (тег 54 ФЗ — 1171).
Формат ITU-T E.164. Обязателен с ФФД 1.1.

#### Example

```ts
`79000000000`.
```
