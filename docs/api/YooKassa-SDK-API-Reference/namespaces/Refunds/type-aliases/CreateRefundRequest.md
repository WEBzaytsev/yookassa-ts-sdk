[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Refunds](../README.md) / CreateRefundRequest

# Type Alias: CreateRefundRequest

> **CreateRefundRequest** = `Pick`\<[`IRefund`](../interfaces/IRefund.md), `"payment_id"` \| `"amount"` \| `"description"` \| `"sources"` \| `"deal"`\> & `object`

Defined in: [src/types/refunds/refund.type.ts:104](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/refunds/refund.type.ts#L104)

## Type Declaration

### receipt?

> `optional` **receipt**: [`CreateReceiptType`](../../Receipts/type-aliases/CreateReceiptType.md)

***Данные для формирования чека.***

Необходимо передавать в этих случаях:
- вы компания или ИП и для оплаты с соблюдением требований 54-ФЗ используете [Чеки от ЮKassa](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/basics);
- вы компания или ИП, для оплаты с соблюдением требований 54-ФЗ используете [стороннюю онлайн-кассу](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics) и отправляете данные для чеков по одному из сценариев: [Платеж и чек одновременно](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#payment-and-receipt) или [Сначала чек, потом платеж](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#payment-after-receipt);
- вы самозанятый и используете решение ЮKassa для [автоотправки чеков](https://yookassa.ru/developers/payment-acceptance/receipts/self-employed/basics).

### refund\_method\_data?

> `optional` **refund\_method\_data**: [`ElectronicCertificateRefundMethod`](../../../../type-aliases/ElectronicCertificateRefundMethod.md)

Детали возврата. Зависят от способа оплаты, который использовался при проведении платежа.
