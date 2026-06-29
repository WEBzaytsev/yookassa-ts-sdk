[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Refunds](../README.md) / CreateRefundRequest

# Type Alias: CreateRefundRequest

> **CreateRefundRequest** = `Pick`\<[`IRefund`](../interfaces/IRefund.md), `"payment_id"` \| `"amount"` \| `"description"` \| `"sources"` \| `"deal"`\> & `object`

Defined in: [src/types/refunds/refund.type.ts:105](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/refunds/refund.type.ts#L105)

## Type Declaration

### receipt?

> `optional` **receipt?**: [`CreateReceiptType`](../../Receipts/type-aliases/CreateReceiptType.md)

**Данные для чека**

Передайте, если:
- компания/ИП с [Чеками ЮKassa](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/basics);
- компания/ИП со [сторонней кассой](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics) по сценарию [платёж и чек](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#payment-and-receipt) или [сначала чек](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#payment-after-receipt);
- самозанятый с [автоотправкой чеков](https://yookassa.ru/developers/payment-acceptance/receipts/self-employed/basics).

### refund\_method\_data?

> `optional` **refund\_method\_data?**: [`ElectronicCertificateRefundMethod`](../../../../type-aliases/ElectronicCertificateRefundMethod.md)

Детали возврата — зависят от способа оплаты платежа
