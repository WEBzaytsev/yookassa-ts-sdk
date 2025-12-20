[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / CreatePaymentRequest

# Type Alias: CreatePaymentRequest

> **CreatePaymentRequest** = `Pick`\<[`IPayment`](../interfaces/IPayment.md), `"amount"` \| `"description"` \| `"recipient"` \| `"confirmation"` \| `"metadata"` \| `"transfers"` \| `"deal"` \| `"merchant_customer_id"`\> & `object`

Defined in: [src/types/payments/payment.type.ts:232](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/payments/payment.type.ts#L232)

Чтобы принять оплату, необходимо создать объект платежа — `Payment`. Он содержит всю необходимую информацию для проведения оплаты (сумму, валюту и статус). У платежа линейный жизненный цикл, он последовательно переходит из статуса в статус.

## Type Declaration

### airline?

> `optional` **airline**: [`IAirline`](../../../../type-aliases/IAirline.md)

Объект с данными для продажи авиабилетов. Используется только для платежей банковской картой.

### capture?

> `optional` **capture**: `boolean`

[Автоматический прием](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#capture-true) поступившего платежа.

### client\_ip?

> `optional` **client\_ip**: `string`

IPv4 или IPv6-адрес пользователя. Если не указан, используется IP-адрес TCP-подключения.

### payment\_method\_data?

> `optional` **payment\_method\_data**: [`PaymentMethodData`](../../../../type-aliases/PaymentMethodData.md)

Данные для оплаты конкретным [способом](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/manual-integration/basics#integration-options) (`payment_method`).

Вы можете не передавать этот объект в запросе. В этом случае пользователь будет выбирать способ оплаты на стороне ЮKassa.

### payment\_method\_id?

> `optional` **payment\_method\_id**: `string`

Идентификатор [сохраненного способа оплаты](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments)

### payment\_token?

> `optional` **payment\_token**: `string`

Одноразовый токен для проведения оплаты, сформированный с помощью [Checkout.js](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/checkout-js/basics) или [мобильного SDK](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/mobile-sdks/basics).

Пример: `+u7PDjMTkf08NtD66P6+eYWa2yjU3gsSIhOOO+OWsOg=`

### receipt?

> `optional` **receipt**: [`ReceiptinPaymentType`](../../Receipts/type-aliases/ReceiptinPaymentType.md)

***Данные для формирования чека.***

Необходимо передавать в этих случаях:
- вы компания или ИП и для оплаты с соблюдением требований 54-ФЗ используете [Чеки от ЮKassa](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/basics);
- вы компания или ИП, для оплаты с соблюдением требований 54-ФЗ используете [стороннюю онлайн-кассу](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics) и отправляете данные для чеков по одному из сценариев: [Платеж и чек одновременно](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#payment-and-receipt) или [Сначала чек, потом платеж](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#payment-after-receipt);
- вы самозанятый и используете решение ЮKassa для [автоотправки чеков](https://yookassa.ru/developers/payment-acceptance/receipts/self-employed/basics).

### receiver?

> `optional` **receiver**: [`Receiver`](../../../../type-aliases/Receiver.md)

Реквизиты получателя оплаты при [пополнении электронного кошелька, банковского счета или баланса телефона](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/receiver-data)

### save\_payment\_method?

> `optional` **save\_payment\_method**: `boolean`

Сохранение платежных данных (с их помощью можно проводить повторные [безакцептные списания](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments) ). Значение `true` инициирует создание многоразового `payment_method`.

### statements?

> `optional` **statements**: [`Statement`](../interfaces/Statement.md)[]

Данные для отправки квитанции по платежу на email пользователя.
Доступно для оплаты банковской картой, SberPay или СБП.

#### See

https://yookassa.ru/developers/payment-acceptance/getting-started/selecting-integration-scenario
