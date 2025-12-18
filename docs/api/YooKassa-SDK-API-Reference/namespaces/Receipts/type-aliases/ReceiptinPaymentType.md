[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Receipts](../README.md) / ReceiptinPaymentType

# Type Alias: ReceiptinPaymentType

> **ReceiptinPaymentType** = `Partial`\<`Pick`\<[`CreateReceiptType`](CreateReceiptType.md), `"customer"` \| `"tax_system_code"` \| `"receipt_industry_details"` \| `"receipt_operational_details"`\>\> & `Required`\<`Pick`\<[`CreateReceiptType`](CreateReceiptType.md), `"items"`\>\>

Defined in: [src/types/receipt/receipt.type.ts:146](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/receipt/receipt.type.ts#L146)

***Данные для формирования чека,*** которые передаются при создании платежа.

Необходимо передавать в этих случаях:
- вы компания или ИП и для оплаты с соблюдением требований 54-ФЗ используете [Чеки от ЮKassa](1);
- вы компания или ИП, для оплаты с соблюдением требований 54-ФЗ используете [стороннюю онлайн-кассу](2) и отправляете данные для чеков по одному из сценариев: [Платеж и чек одновременно](3) или [Сначала чек, потом платеж](4) ;
- вы самозанятый и используете решение ЮKassa для [автоотправки чеков](5)

[1]: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/basics
[2]: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics
[3]: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#payment-and-receipt
[4]: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#payment-after-receipt
[5]: https://yookassa.ru/developers/payment-acceptance/receipts/self-employed/basics
