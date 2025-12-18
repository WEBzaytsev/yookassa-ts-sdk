[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Receipts](../README.md) / ReceiptRegistrationStatus

# Type Alias: ReceiptRegistrationStatus

> **ReceiptRegistrationStatus** = `"pending"` \| `"succeeded"` \| `"canceled"`

Defined in: [src/types/receipt/receipt.type.ts:14](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/421052f4b89e2476891b70faab4f1b4ec3acb883/src/types/receipt/receipt.type.ts#L14)

Статус регистрации чека. Возможные значения:
- `pending` — данные в обработке;
- `succeeded` — чек успешно зарегистрирован;
- `canceled` — чек зарегистрировать не удалось; если используете Чеки от ЮKassa, обратитесь в техническую поддержку, в остальных случаях сформируйте чек вручную.
Присутствует, если вы используете [решения ЮKassa для отправки чеков](https://yookassa.ru/developers/payment-acceptance/receipts/basics) в налоговую.
