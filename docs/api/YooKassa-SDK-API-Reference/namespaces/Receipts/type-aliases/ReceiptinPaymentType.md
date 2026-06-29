[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Receipts](../README.md) / ReceiptinPaymentType

# Type Alias: ReceiptinPaymentType

> **ReceiptinPaymentType** = `Partial`\<`Pick`\<[`CreateReceiptType`](CreateReceiptType.md), `"customer"` \| `"tax_system_code"` \| `"receipt_industry_details"` \| `"receipt_operational_details"`\>\> & `Required`\<`Pick`\<[`CreateReceiptType`](CreateReceiptType.md), `"items"`\>\>

Defined in: [src/types/receipt/receipt.type.ts:127](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/receipt.type.ts#L127)

Данные для чека при создании платежа. Передавайте, если:
- компания или ИП и оплата по 54-ФЗ через [Чеки ЮKassa](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/basics);
- компания или ИП, [сторонняя касса](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics) — сценарии [Платёж и чек одновременно](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#payment-and-receipt) или [Сначала чек, потом платёж](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#payment-after-receipt);
- самозанятый — [автоотправка чеков](https://yookassa.ru/developers/payment-acceptance/receipts/self-employed/basics).
