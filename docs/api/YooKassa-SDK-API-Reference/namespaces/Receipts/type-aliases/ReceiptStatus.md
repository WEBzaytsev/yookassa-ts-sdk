[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Receipts](../README.md) / ReceiptStatus

# Type Alias: ReceiptStatus

> **ReceiptStatus** = `"pending"` \| `"succeeded"` \| `"canceled"`

Defined in: [src/types/receipt/receipt.type.ts:27](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/receipt/receipt.type.ts#L27)

Статус доставки данных для чека в онлайн-кассу.

Возможные значения:
- `pending` — данные в обработке;
- `succeeded` — чек успешно зарегистрирован;
- `canceled` — чек зарегистрировать не удалось; если используете Чеки от ЮKassa, обратитесь в техническую поддержку, в остальных случаях сформируйте чек вручную.
