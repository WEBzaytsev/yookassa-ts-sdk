[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Receipts](../README.md) / ReceiptinPaymentType

# Type Alias: ReceiptinPaymentType

> **ReceiptinPaymentType** = `Partial`\<`Pick`\<[`CreateReceiptType`](CreateReceiptType.md), `"customer"` \| `"tax_system_code"` \| `"receipt_industry_details"` \| `"receipt_operational_details"`\>\> & `Required`\<`Pick`\<[`CreateReceiptType`](CreateReceiptType.md), `"items"`\>\>

Defined in: [src/types/receipt/receipt.type.ts:140](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/types/receipt/receipt.type.ts#L140)

***Данные для формирования чека,*** которые передаются при создании платежа.

Необходимо передавать в этих случаях:
- вы компания или ИП и для оплаты с соблюдением требований 54-ФЗ используете [Чеки от ЮKassa](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/basics);
- вы компания или ИП, для оплаты с соблюдением требований 54-ФЗ используете [стороннюю онлайн-кассу](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics) и отправляете данные для чеков по одному из сценариев: [Платеж и чек одновременно](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#payment-and-receipt) или [Сначала чек, потом платеж](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#payment-after-receipt);
- вы самозанятый и используете решение ЮKassa для [автоотправки чеков](https://yookassa.ru/developers/payment-acceptance/receipts/self-employed/basics).
