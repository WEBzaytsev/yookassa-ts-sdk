[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Receipts](../README.md) / CreateReceiptType

# Type Alias: CreateReceiptType

> **CreateReceiptType** = `Pick`\<[`IReceipt`](../interfaces/IReceipt.md), `"type"` \| `"payment_id"` \| `"refund_id"` \| `"items"` \| `"tax_system_code"` \| `"receipt_industry_details"` \| `"receipt_operational_details"` \| `"on_behalf_of"`\> & `object`

Defined in: [src/types/receipt/receipt.type.ts:96](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/receipt.type.ts#L96)

## Type Declaration

### additional\_user\_props?

> `optional` **additional\_user\_props?**: `object`

Дополнительный реквизит пользователя (тег 54 ФЗ — 1084). Для сценария «Сначала платёж, потом чек»

#### additional\_user\_props.name

> **name**: `string`

Наименование дополнительного реквизита (тег 54 ФЗ — 1085). До 64 символов

#### additional\_user\_props.value

> **value**: `string`

Значение дополнительного реквизита (тег 54 ФЗ — 1086). До 234 символов

### customer

> **customer**: [`Customer`](../../../../type-aliases/Customer.md)

Данные пользователя. Минимум контактов: для Чеков ЮKassa — `customer.email`; иначе — `customer.email` или `customer.phone`.

### send

> **send**: `true`

Регистрация чека в кассе сразу после создания. Передавайте только `true`

### settlements

> **settlements**: [`Settlement`](Settlement.md)[]

Совершённые расчёты
