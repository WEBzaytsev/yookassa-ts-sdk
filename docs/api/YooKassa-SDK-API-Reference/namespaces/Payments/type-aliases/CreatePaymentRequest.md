[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / CreatePaymentRequest

# Type Alias: CreatePaymentRequest

> **CreatePaymentRequest** = `Pick`\<[`IPayment`](../interfaces/IPayment.md), `"amount"` \| `"description"` \| `"recipient"` \| `"confirmation"` \| `"metadata"` \| `"transfers"` \| `"deal"` \| `"merchant_customer_id"`\> & `object`

Defined in: [src/types/payments/payment.type.ts:229](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L229)

Запрос создания платежа. Платёж последовательно переходит из статуса в статус.

## Type Declaration

### airline?

> `optional` **airline?**: [`IAirline`](../../../../type-aliases/IAirline.md)

Данные авиабилетов. Только для оплаты картой

### capture?

> `optional` **capture?**: `boolean`

[Автоприём](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#capture-true) платежа

### client\_ip?

> `optional` **client\_ip?**: `string`

IPv4 или IPv6 пользователя. По умолчанию — IP TCP-соединения

### payment\_method\_data?

> `optional` **payment\_method\_data?**: [`PaymentMethodData`](../../../../type-aliases/PaymentMethodData.md)

Данные [конкретного способа](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/manual-integration/basics#integration-options).
Без поля пользователь выберет способ на стороне ЮKassa.

### payment\_method\_id?

> `optional` **payment\_method\_id?**: `string`

ID [сохранённого способа оплаты](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments)

### payment\_order\_data?

> `optional` **payment\_order\_data?**: [`PaymentOrderData`](../../../../type-aliases/PaymentOrderData.md)

Платёжное поручение ЖКХ.

#### See

https://yookassa.ru/developers/payment-acceptance/scenario-extensions/utility-payments

### payment\_token?

> `optional` **payment\_token?**: `string`

Токен оплаты из [Checkout.js](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/checkout-js/basics)
или [мобильного SDK](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/mobile-sdks/basics).
Пример: `+u7PDjMTkf08NtD66P6+eYWa2yjU3gsSIhOOO+OWsOg=`

### receipt?

> `optional` **receipt?**: [`ReceiptinPaymentType`](../../Receipts/type-aliases/ReceiptinPaymentType.md)

**Данные для чека**

Передайте, если:
- компания/ИП с [Чеками ЮKassa](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/basics);
- компания/ИП со [сторонней кассой](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics) по сценарию [платёж и чек](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#payment-and-receipt) или [сначала чек](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#payment-after-receipt);
- самозанятый с [автоотправкой чеков](https://yookassa.ru/developers/payment-acceptance/receipts/self-employed/basics).

### receiver?

> `optional` **receiver?**: [`Receiver`](../../../../type-aliases/Receiver.md)

Реквизиты получателя при [пополнении кошелька, счёта или баланса телефона](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/receiver-data)

### save\_payment\_method?

> `optional` **save\_payment\_method?**: `boolean`

Сохранение платёжных данных для [безакцептных списаний](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments).
`true` создаёт многоразовый `payment_method`.

### statements?

> `optional` **statements?**: [`Statement`](../interfaces/Statement.md)[]

Квитанция на email. Для карты, SberPay, СБП.

#### See

https://yookassa.ru/developers/payment-acceptance/getting-started/selecting-integration-scenario
