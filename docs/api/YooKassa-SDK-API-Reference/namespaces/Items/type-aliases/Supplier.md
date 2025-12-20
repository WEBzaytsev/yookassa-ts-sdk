[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Items](../README.md) / Supplier

# Type Alias: Supplier

> **Supplier** = `object`

Defined in: [src/types/receipt/item.type.ts:84](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/receipt/item.type.ts#L84)

Информация о поставщике товара или услуги (тег в 54 ФЗ — 1224).
Можно передавать, если вы отправляете данные для формирования чека
по сценарию [Сначала платеж, потом чек](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#receipt-after-payment).

## Properties

### inn?

> `optional` **inn**: `string`

Defined in: [src/types/receipt/item.type.ts:94](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/receipt/item.type.ts#L94)

ИНН поставщика в маскированном виде (тег в 54 ФЗ — 1226). Пример: ***. Параметр предусмотрен форматом фискальных документов (ФФД) и является обязательным, начиная с версии 1.05.

***

### name

> **name**: `string`

Defined in: [src/types/receipt/item.type.ts:86](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/receipt/item.type.ts#L86)

Наименование поставщика (тег в 54 ФЗ — 1225). Параметр предусмотрен форматом фискальных документов (ФФД) и является обязательным, начиная с версии 1.1.

***

### phone?

> `optional` **phone**: `string`

Defined in: [src/types/receipt/item.type.ts:92](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/receipt/item.type.ts#L92)

Телефон поставщика (тег в 54 ФЗ — 1171).
Указывается в формате ITU-T E.164,
Параметр предусмотрен форматом фискальных документов (ФФД) и является обязательным, начиная с версии 1.1.

#### Example

```ts
`79000000000`.
```
