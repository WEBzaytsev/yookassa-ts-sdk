[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / PaymentOrderDataUtilities

# Interface: PaymentOrderDataUtilities

Defined in: [src/types/payments/paymentOrder.type.ts:51](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentOrder.type.ts#L51)

Платёжное поручение для оплаты ЖКУ.

Обязателен при оплате ЖКУ. Кроме обязательных полей передайте хотя бы одно из:
`payment_document_id`, `payment_document_number`, `account_number`,
`unified_account_number`, `service_id`.

## See

https://yookassa.ru/developers/payment-acceptance/scenario-extensions/utility-payments

## Properties

### account\_number?

> `optional` **account\_number?**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:85](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentOrder.type.ts#L85)

Лицевой счёт (до 30 символов).
Обязателен без `payment_document_id`, `payment_document_number`,
`unified_account_number`, `service_id`.

***

### amount

> **amount**: [`IAmount`](IAmount.md)

Defined in: [src/types/payments/paymentOrder.type.ts:54](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentOrder.type.ts#L54)

Сумма поручения — равна сумме платежа

***

### kbk?

> `optional` **kbk?**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:63](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentOrder.type.ts#L63)

КБК, до 20 символов

***

### oktmo?

> `optional` **oktmo?**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:65](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentOrder.type.ts#L65)

ОКТМО, до 8 символов

***

### payment\_document\_id?

> `optional` **payment\_document\_id?**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:73](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentOrder.type.ts#L73)

ID платёжного документа (18 символов).
Обязателен без `payment_document_number`, `account_number`,
`unified_account_number`, `service_id`.

***

### payment\_document\_number?

> `optional` **payment\_document\_number?**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:79](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentOrder.type.ts#L79)

Номер документа у поставщика ЖКУ (до 30 символов).
Обязателен без `payment_document_id`, `account_number`,
`unified_account_number`, `service_id`.

***

### payment\_period?

> `optional` **payment\_period?**: [`PaymentPeriod`](PaymentPeriod.md)

Defined in: [src/types/payments/paymentOrder.type.ts:67](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentOrder.type.ts#L67)

Период оплаты

***

### payment\_purpose

> **payment\_purpose**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:59](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentOrder.type.ts#L59)

Назначение платежа (до 210 символов).
Формулировка по Письму Банка России № ИН-04-45/12.

***

### recipient

> **recipient**: [`PaymentOrderRecipientUtilities`](PaymentOrderRecipientUtilities.md)

Defined in: [src/types/payments/paymentOrder.type.ts:61](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentOrder.type.ts#L61)

Получатель платежа

***

### service\_id?

> `optional` **service\_id?**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:97](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentOrder.type.ts#L97)

ID ЖКУ (13 символов).
Обязателен без `payment_document_id`, `payment_document_number`,
`account_number`, `unified_account_number`.

***

### type

> **type**: `"utilities"`

Defined in: [src/types/payments/paymentOrder.type.ts:52](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentOrder.type.ts#L52)

***

### unified\_account\_number?

> `optional` **unified\_account\_number?**: `string`

Defined in: [src/types/payments/paymentOrder.type.ts:91](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentOrder.type.ts#L91)

Единый лицевой счёт в ГИС ЖКХ (10 символов).
Обязателен без `payment_document_id`, `payment_document_number`,
`account_number`, `service_id`.
