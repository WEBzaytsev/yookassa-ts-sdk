[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Receipts](../README.md) / ReceiptStatus

# Type Alias: ReceiptStatus

> **ReceiptStatus** = `"pending"` \| `"succeeded"` \| `"canceled"`

Defined in: [src/types/receipt/receipt.type.ts:25](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/receipt.type.ts#L25)

Статус доставки данных в онлайн-кассу:
- `pending` — в обработке;
- `succeeded` — зарегистрирован;
- `canceled` — не зарегистрирован; для Чеков ЮKassa — в поддержку, иначе — чек вручную.
