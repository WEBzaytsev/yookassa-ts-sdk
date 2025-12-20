[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Receipts](../README.md) / CreateReceiptType

# Type Alias: CreateReceiptType

> **CreateReceiptType** = `Pick`\<`IReceiptGeneral`, `"type"` \| `"payment_id"` \| `"refund_id"` \| `"items"` \| `"tax_system_code"` \| `"receipt_industry_details"` \| `"receipt_operational_details"` \| `"on_behalf_of"`\> & `object`

Defined in: [src/types/receipt/receipt.type.ts:99](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/receipt/receipt.type.ts#L99)

## Type Declaration

### additional\_user\_props?

> `optional` **additional\_user\_props**: `object`

Дополнительный реквизит пользователя (тег в 54 ФЗ — 1084).
Можно передавать, если вы отправляете данные для формирования чека по сценарию Сначала платеж, потом чек

#### additional\_user\_props.name

> **name**: `string`

Наименование дополнительного реквизита пользователя (тег в 54 ФЗ — 1085). Не более 64 символов.

#### additional\_user\_props.value

> **value**: `string`

Значение дополнительного реквизита пользователя (тег в 54 ФЗ — 1086). Не более 234 символов.

### customer

> **customer**: [`Customer`](../../../../type-aliases/Customer.md)

Информация о пользователе.

Необходимо указать как минимум контактные данные: для Чеков от ЮKassa — электронную почту (`customer.email`),
в остальных случаях — электронную почту (`customer.email`) или номер телефона (`customer.phone`).

### send

> **send**: `true`

Формирование чека в онлайн-кассе сразу после создания объекта чека. Сейчас можно передать только значение `true`.

### settlements

> **settlements**: [`Settlement`](Settlement.md)[]

Перечень совершенных расчетов.
