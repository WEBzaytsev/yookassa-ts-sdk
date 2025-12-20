[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Receipts](../README.md) / ReceiptStatus

# Type Alias: ReceiptStatus

> **ReceiptStatus** = `"pending"` \| `"succeeded"` \| `"canceled"`

Defined in: [src/types/receipt/receipt.type.ts:27](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/receipt/receipt.type.ts#L27)

Статус доставки данных для чека в онлайн-кассу.

Возможные значения:
- `pending` — данные в обработке;
- `succeeded` — чек успешно зарегистрирован;
- `canceled` — чек зарегистрировать не удалось; если используете Чеки от ЮKassa, обратитесь в техническую поддержку, в остальных случаях сформируйте чек вручную.
