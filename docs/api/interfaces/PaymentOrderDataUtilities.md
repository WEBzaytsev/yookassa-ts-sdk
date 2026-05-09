[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / PaymentOrderDataUtilities

# Interface: PaymentOrderDataUtilities

Defined in: [src/types/payments/paymentOrder.type.ts:54](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentOrder.type.ts#L54)

Платёжное поручение для оплаты жилищно-коммунальных услуг (ЖКУ).

Необходимо передавать при оплате ЖКУ.
Кроме обязательных параметров, должен быть передан хотя бы один из:
`payment_document_id`, `payment_document_number`, `account_number`,
`unified_account_number` или `service_id`.

## See

https://yookassa.ru/developers/payment-acceptance/scenario-extensions/utility-payments

## Properties

### account\_number?

> `optional` **account\_number?**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:88](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentOrder.type.ts#L88)

Номер лицевого счёта (до 30 символов).
Обязателен, если не передан `payment_document_id`, `payment_document_number`,
`unified_account_number` или `service_id`.

***

### amount

> **amount**: [`IAmount`](IAmount.md)

Defined in: [src/types/payments/paymentOrder.type.ts:57](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentOrder.type.ts#L57)

Сумма платёжного поручения — равна общей сумме платежа

***

### kbk?

> `optional` **kbk?**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:66](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentOrder.type.ts#L66)

Код бюджетной классификации (КБК), до 20 символов

***

### oktmo?

> `optional` **oktmo?**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:68](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentOrder.type.ts#L68)

Код ОКТМО, до 8 символов

***

### payment\_document\_id?

> `optional` **payment\_document\_id?**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:76](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentOrder.type.ts#L76)

Идентификатор платёжного документа (18 символов).
Обязателен, если не передан `payment_document_number`, `account_number`,
`unified_account_number` или `service_id`.

***

### payment\_document\_number?

> `optional` **payment\_document\_number?**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:82](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentOrder.type.ts#L82)

Номер платёжного документа на стороне поставщика ЖКУ (до 30 символов).
Обязателен, если не передан `payment_document_id`, `account_number`,
`unified_account_number` или `service_id`.

***

### payment\_period?

> `optional` **payment\_period?**: [`PaymentPeriod`](PaymentPeriod.md)

Defined in: [src/types/payments/paymentOrder.type.ts:70](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentOrder.type.ts#L70)

Период оплаты

***

### payment\_purpose

> **payment\_purpose**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:62](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentOrder.type.ts#L62)

Назначение платежа (не более 210 символов).
Формулировка должна соответствовать рекомендациям Письма Банка России № ИН-04-45/12.

***

### recipient

> **recipient**: [`PaymentOrderRecipientUtilities`](PaymentOrderRecipientUtilities.md)

Defined in: [src/types/payments/paymentOrder.type.ts:64](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentOrder.type.ts#L64)

Получатель платежа

***

### service\_id?

> `optional` **service\_id?**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:100](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentOrder.type.ts#L100)

Идентификатор ЖКУ (13 символов).
Обязателен, если не передан `payment_document_id`, `payment_document_number`,
`account_number` или `unified_account_number`.

***

### type

> **type**: `"utilities"`

Defined in: [src/types/payments/paymentOrder.type.ts:55](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentOrder.type.ts#L55)

***

### unified\_account\_number?

> `optional` **unified\_account\_number?**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:94](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentOrder.type.ts#L94)

Единый лицевой счёт — уникальный идентификатор в ГИС ЖКХ (10 символов).
Обязателен, если не передан `payment_document_id`, `payment_document_number`,
`account_number` или `service_id`.
