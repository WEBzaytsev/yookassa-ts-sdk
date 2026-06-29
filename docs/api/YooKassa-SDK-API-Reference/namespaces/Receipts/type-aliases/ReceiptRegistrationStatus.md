[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Receipts](../README.md) / ReceiptRegistrationStatus

# Type Alias: ReceiptRegistrationStatus

> **ReceiptRegistrationStatus** = `"pending"` \| `"succeeded"` \| `"canceled"`

Defined in: [src/types/receipt/receipt.type.ts:14](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/receipt.type.ts#L14)

Статус регистрации чека:
- `pending` — в обработке;
- `succeeded` — зарегистрирован;
- `canceled` — не зарегистрирован; для Чеков ЮKassa — в поддержку, иначе — чек вручную.
Есть при [отправке чеков через ЮKassa](https://yookassa.ru/developers/payment-acceptance/receipts/basics) в налоговую.
