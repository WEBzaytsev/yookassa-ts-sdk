[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / YooKassaSdk

# Class: YooKassaSdk

Defined in: [src/client/sdk.ts:64](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/client/sdk.ts#L64)

YooKassa SDK client for payment processing.

## Features

- **Automatic retries** with exponential backoff on network errors and 5xx responses
- **Built-in rate limiting** via `maxRPS` configuration
- **Idempotency** — auto-generated or custom keys for safe retries
- **Instance caching** by `shop_id` for connection reuse

## Usage

```typescript
import { YooKassa } from '@webzaytsev/yookassa-ts-sdk';

const sdk = YooKassa({
    shop_id: 'your_shop_id',
    secret_key: 'your_secret_key',
});

// Create payment with auto-generated idempotency key
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
});

// Create payment with custom idempotency key (recommended for retries)
const payment = await sdk.payments.create(paymentData, `order-${orderId}`);
```

## See

https://yookassa.ru/developers/api

## Extends

- `Connector`

## Constructors

### Constructor

> **new YooKassaSdk**(`init`): `YooKassaSdk`

Defined in: [src/client/connector.ts:252](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/client/connector.ts#L252)

#### Parameters

##### init

[`ConnectorOpts`](../type-aliases/ConnectorOpts.md)

#### Returns

`YooKassaSdk`

#### Inherited from

`Connector.constructor`

## Properties

### deals

> `readonly` **deals**: `object`

Defined in: [src/client/sdk.ts:685](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/client/sdk.ts#L685)

Безопасная сделка.

#### create

> **create**: (`data`, `idempotenceKey?`) => `Promise`\<[`SafeDeal`](../interfaces/SafeDeal.md)\>

##### Parameters

###### data

[`SafeDealRequest`](../interfaces/SafeDealRequest.md)

###### idempotenceKey?

`string`

##### Returns

`Promise`\<[`SafeDeal`](../interfaces/SafeDeal.md)\>

##### See

https://yookassa.ru/developers/api#create_deal

#### list

> **list**: (`filter?`) => `Promise`\<[`SafeDeal`](../interfaces/SafeDeal.md)[]\>

##### Parameters

###### filter?

`Omit`\<[`GetDealListFilter`](../interfaces/GetDealListFilter.md), `"cursor"`\>

##### Returns

`Promise`\<[`SafeDeal`](../interfaces/SafeDeal.md)[]\>

##### See

https://yookassa.ru/developers/api#get_deals_list

#### load

> **load**: (`dealId`) => `Promise`\<[`SafeDeal`](../interfaces/SafeDeal.md)\>

##### Parameters

###### dealId

`string`

##### Returns

`Promise`\<[`SafeDeal`](../interfaces/SafeDeal.md)\>

##### See

https://yookassa.ru/developers/api#get_deal

***

### invoices

> `readonly` **invoices**: `object`

Defined in: [src/client/sdk.ts:701](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/client/sdk.ts#L701)

Выставленные счета (инвойсы).

#### create

> **create**: (`data`, `idempotenceKey?`) => `Promise`\<[`Invoice`](../interfaces/Invoice.md)\>

##### Parameters

###### data

[`CreateInvoiceRequest`](../interfaces/CreateInvoiceRequest.md)

###### idempotenceKey?

`string`

##### Returns

`Promise`\<[`Invoice`](../interfaces/Invoice.md)\>

##### See

https://yookassa.ru/developers/api#create_invoice

#### load

> **load**: (`invoiceId`) => `Promise`\<[`Invoice`](../interfaces/Invoice.md)\>

##### Parameters

###### invoiceId

`string`

##### Returns

`Promise`\<[`Invoice`](../interfaces/Invoice.md)\>

##### See

https://yookassa.ru/developers/api#get_invoice

***

### paymentMethods

> `readonly` **paymentMethods**: `object`

Defined in: [src/client/sdk.ts:655](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/client/sdk.ts#L655)

Создание и получение сохранённых способов оплаты (привязка карты и т. п.)

#### create

> **create**: (`data`, `idempotenceKey?`) => `Promise`\<[`SavePaymentMethod`](../type-aliases/SavePaymentMethod.md)\>

##### Parameters

###### data

[`SavePaymentMethodData`](../type-aliases/SavePaymentMethodData.md)

###### idempotenceKey?

`string`

##### Returns

`Promise`\<[`SavePaymentMethod`](../type-aliases/SavePaymentMethod.md)\>

##### See

https://yookassa.ru/developers/api#create_payment_method

#### load

> **load**: (`paymentMethodId`) => `Promise`\<[`SavePaymentMethod`](../type-aliases/SavePaymentMethod.md)\>

##### Parameters

###### paymentMethodId

`string`

##### Returns

`Promise`\<[`SavePaymentMethod`](../type-aliases/SavePaymentMethod.md)\>

##### See

https://yookassa.ru/developers/api#get_payment_method

***

### payments

> `readonly` **payments**: `object`

Defined in: [src/client/sdk.ts:434](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/client/sdk.ts#L434)

Методы работы с платежами

#### cancel

> **cancel**: (`paymentId`, `idempotenceKey?`) => `Promise`\<[`IPayment`](../YooKassa-SDK-API-Reference/namespaces/Payments/interfaces/IPayment.md)\>

**Отмена платежа**

Отменяет платёж в статусе `waiting_for_capture`. ЮKassa вернёт деньги плательщику.
Для карт, ЮMoney и SberPay — мгновенно; для остальных способов — до нескольких дней.

##### Parameters

###### paymentId

`string`

— ID платежа

###### idempotenceKey?

`string`

— ключ идемпотентности (опционально)

##### Returns

`Promise`\<[`IPayment`](../YooKassa-SDK-API-Reference/namespaces/Payments/interfaces/IPayment.md)\>

##### See

https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#capture-and-cancel

#### capture

> **capture**: (`paymentId`, `payload?`, `idempotenceKey?`) => `Promise`\<[`IPayment`](../YooKassa-SDK-API-Reference/namespaces/Payments/interfaces/IPayment.md)\>

**Подтверждение платежа**

Подтверждает готовность принять платёж. После подтверждения статус — `succeeded`.
Доступно только для `waiting_for_capture` в пределах срока способа оплаты.
По истечении срока платёж перейдёт в `canceled`, деньги вернутся пользователю.

##### Parameters

###### paymentId

`string`

— ID платежа

###### payload?

[`CapturePaymentRequest`](../YooKassa-SDK-API-Reference/namespaces/Payments/interfaces/CapturePaymentRequest.md)

— сумма, чек, авиабилеты, распределение

###### idempotenceKey?

`string`

— ключ идемпотентности (опционально)

##### Returns

`Promise`\<[`IPayment`](../YooKassa-SDK-API-Reference/namespaces/Payments/interfaces/IPayment.md)\>

##### See

https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#capture-and-cancel

#### create

> **create**: (`payment`, `idempotenceKey?`) => `Promise`\<[`IPayment`](../YooKassa-SDK-API-Reference/namespaces/Payments/interfaces/IPayment.md)\>

Creates a new payment.

## Idempotency

The `idempotenceKey` parameter ensures safe retries in distributed systems.
If not provided, SDK generates a UUID automatically.

**Recommended**: Use order ID or business identifier as idempotency key
to prevent duplicate payments on retries.

##### Parameters

###### payment

[`CreatePaymentRequest`](../YooKassa-SDK-API-Reference/namespaces/Payments/type-aliases/CreatePaymentRequest.md)

Payment data (amount, confirmation, etc.)

###### idempotenceKey?

`string`

Unique key for request deduplication. Use order ID for safe retries.

##### Returns

`Promise`\<[`IPayment`](../YooKassa-SDK-API-Reference/namespaces/Payments/interfaces/IPayment.md)\>

##### Example

```typescript
// Auto-generated idempotency key (for single attempts)
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
});

// Custom idempotency key (recommended for retries)
const payment = await sdk.payments.create(paymentData, `order-${orderId}`);

// Safe retry pattern for distributed systems
async function createPaymentWithRetry(orderId: string, data: CreatePaymentRequest) {
    const key = `payment-${orderId}`;
    try {
        return await sdk.payments.create(data, key);
    } catch (error) {
        // Same key = same result, no duplicate charge
        return await sdk.payments.create(data, key);
    }
}
```

##### See

https://yookassa.ru/developers/api#create_payment

#### list

> **list**: (`filter?`) => `Promise`\<[`IPayment`](../YooKassa-SDK-API-Reference/namespaces/Payments/interfaces/IPayment.md)[]\>

**Список платежей**

Возвращает платежи по фильтру.

*Список платежей**

Возвращает платежи по фильтру. [Работа со списками](https://yookassa.ru/developers/using-api/lists)

##### Parameters

###### filter?

`Omit`\<[`GetPaymentListFilter`](../type-aliases/GetPaymentListFilter.md), `"cursor"`\>

##### Returns

`Promise`\<[`IPayment`](../YooKassa-SDK-API-Reference/namespaces/Payments/interfaces/IPayment.md)[]\>

##### See

 - https://yookassa.ru/developers/api#get_payment
 - https://yookassa.ru/developers/using-api/lists

#### load

> **load**: (`id`) => `Promise`\<[`IPayment`](../YooKassa-SDK-API-Reference/namespaces/Payments/interfaces/IPayment.md)\>

**Платёж**

Возвращает актуальное состояние платежа по ID.

##### Parameters

###### id

`string`

##### Returns

`Promise`\<[`IPayment`](../YooKassa-SDK-API-Reference/namespaces/Payments/interfaces/IPayment.md)\>

##### See

https://yookassa.ru/developers/api#get_payment

***

### payouts

> `readonly` **payouts**: `object`

Defined in: [src/client/sdk.ts:608](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/client/sdk.ts#L608)

**Методы работы с выплатами**

Создание выплат физлицам и получение информации о них.
Доступно для обычных выплат и Безопасной сделки.

#### create

> **create**: (`payout`, `idempotenceKey?`) => `Promise`\<[`IPayout`](../YooKassa-SDK-API-Reference/namespaces/Payouts/interfaces/IPayout.md)\>

**Создание выплаты**

Создаёт выплату физлицу на указанное платёжное средство.

##### Parameters

###### payout

[`CreatePayoutRequest`](../YooKassa-SDK-API-Reference/namespaces/Payouts/interfaces/CreatePayoutRequest.md)

— данные выплаты

###### idempotenceKey?

`string`

— ключ идемпотентности (опционально)

##### Returns

`Promise`\<[`IPayout`](../YooKassa-SDK-API-Reference/namespaces/Payouts/interfaces/IPayout.md)\>

##### See

https://yookassa.ru/developers/api#create_payout

#### list

> **list**: (`filter?`) => `Promise`\<[`IPayout`](../YooKassa-SDK-API-Reference/namespaces/Payouts/interfaces/IPayout.md)[]\>

**Список выплат**

Возвращает выплаты по фильтру (`created_at`, `succeeded_at`).

##### Parameters

###### filter?

`Omit`\<[`GetPayoutListFilter`](../interfaces/GetPayoutListFilter.md), `"cursor"`\>

##### Returns

`Promise`\<[`IPayout`](../YooKassa-SDK-API-Reference/namespaces/Payouts/interfaces/IPayout.md)[]\>

##### See

https://yookassa.ru/developers/api#get_payouts_list

#### load

> **load**: (`id`) => `Promise`\<[`IPayout`](../YooKassa-SDK-API-Reference/namespaces/Payouts/interfaces/IPayout.md)\>

**Выплата**

Возвращает актуальное состояние выплаты по ID.

##### Parameters

###### id

`string`

##### Returns

`Promise`\<[`IPayout`](../YooKassa-SDK-API-Reference/namespaces/Payouts/interfaces/IPayout.md)\>

##### See

https://yookassa.ru/developers/api#get_payout

#### search

> **search**: (`filter?`) => `Promise`\<[`IPayout`](../YooKassa-SDK-API-Reference/namespaces/Payouts/interfaces/IPayout.md)[]\>

**Поиск выплат**

Ищет по `metadata` и периоду `created_at` (последние 3 месяца).

##### Parameters

###### filter?

`Omit`\<[`GetPayoutSearchFilter`](../interfaces/GetPayoutSearchFilter.md), `"cursor"`\>

##### Returns

`Promise`\<[`IPayout`](../YooKassa-SDK-API-Reference/namespaces/Payouts/interfaces/IPayout.md)[]\>

##### See

https://yookassa.ru/developers/api#search_payouts

#### See

https://yookassa.ru/developers/payouts/overview

***

### personalData

> `readonly` **personalData**: `object`

Defined in: [src/client/sdk.ts:670](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/client/sdk.ts#L670)

Персональные данные получателя (выплаты с проверкой, выписки)

#### create

> **create**: (`data`, `idempotenceKey?`) => `Promise`\<[`PersonalData`](../interfaces/PersonalData.md)\>

##### Parameters

###### data

[`CreatePersonalDataRequest`](../type-aliases/CreatePersonalDataRequest.md)

###### idempotenceKey?

`string`

##### Returns

`Promise`\<[`PersonalData`](../interfaces/PersonalData.md)\>

##### See

https://yookassa.ru/developers/api#create_personal_data

#### load

> **load**: (`personalDataId`) => `Promise`\<[`PersonalData`](../interfaces/PersonalData.md)\>

##### Parameters

###### personalDataId

`string`

##### Returns

`Promise`\<[`PersonalData`](../interfaces/PersonalData.md)\>

##### See

https://yookassa.ru/developers/api#get_personal_data

***

### receipts

> `readonly` **receipts**: `object`

Defined in: [src/client/sdk.ts:567](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/client/sdk.ts#L567)

**Методы работы с чеками**

Получение информации о чеках, отправленных через ЮKassa.

#### create

> **create**: (`receipt`, `idempotenceKey?`) => `Promise`\<[`IReceipt`](../YooKassa-SDK-API-Reference/namespaces/Receipts/interfaces/IReceipt.md)\>

**Создание чека**

Создаёт чек зачёта предоплаты по 54-ФЗ. При сценарии
[Сначала платёж, потом чек](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#receipt-after-payment)
передайте также данные чека прихода и возврата прихода.

##### Parameters

###### receipt

[`CreateReceiptType`](../YooKassa-SDK-API-Reference/namespaces/Receipts/type-aliases/CreateReceiptType.md)

— данные чека

###### idempotenceKey?

`string`

— ключ идемпотентности (опционально)

##### Returns

`Promise`\<[`IReceipt`](../YooKassa-SDK-API-Reference/namespaces/Receipts/interfaces/IReceipt.md)\>

##### See

https://yookassa.ru/developers/api#create_receipt

#### list

> **list**: (`filter?`) => `Promise`\<[`IReceipt`](../YooKassa-SDK-API-Reference/namespaces/Receipts/interfaces/IReceipt.md)[]\>

**Список чеков**

Возвращает чеки по фильтру: по платежу, возврату или все чеки магазина.

##### Parameters

###### filter?

`Omit`\<[`GetReceiptListFilter`](../type-aliases/GetReceiptListFilter.md), `"cursor"`\>

##### Returns

`Promise`\<[`IReceipt`](../YooKassa-SDK-API-Reference/namespaces/Receipts/interfaces/IReceipt.md)[]\>

##### See

 - https://yookassa.ru/developers/using-api/lists
 - https://yookassa.ru/developers/api#get_receipts_list

#### load

> **load**: (`receiptId`) => `Promise`\<[`IReceipt`](../YooKassa-SDK-API-Reference/namespaces/Receipts/interfaces/IReceipt.md)\>

**Чек**

Возвращает актуальное состояние чека по ID.

##### Parameters

###### receiptId

`string`

##### Returns

`Promise`\<[`IReceipt`](../YooKassa-SDK-API-Reference/namespaces/Receipts/interfaces/IReceipt.md)\>

#### See

https://yookassa.ru/developers/api#receipt

***

### refunds

> `readonly` **refunds**: `object`

Defined in: [src/client/sdk.ts:529](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/client/sdk.ts#L529)

Методы работы с возвратами

#### create

> **create**: (`refund`, `idempotenceKey?`) => `Promise`\<[`IRefund`](../YooKassa-SDK-API-Reference/namespaces/Refunds/interfaces/IRefund.md)\>

**Создание возврата**

Возвращает успешный платёж на указанную сумму. Срок — до трёх лет с создания платежа.
Комиссия ЮKassa не возвращается.

##### Parameters

###### refund

[`CreateRefundRequest`](../YooKassa-SDK-API-Reference/namespaces/Refunds/type-aliases/CreateRefundRequest.md)

— данные возврата

###### idempotenceKey?

`string`

— ключ идемпотентности (опционально)

##### Returns

`Promise`\<[`IRefund`](../YooKassa-SDK-API-Reference/namespaces/Refunds/interfaces/IRefund.md)\>

##### See

https://yookassa.ru/developers/api#create_refund

#### list

> **list**: (`filter?`) => `Promise`\<[`IRefund`](../YooKassa-SDK-API-Reference/namespaces/Refunds/interfaces/IRefund.md)[]\>

**Список возвратов**

Возвращает возвраты по фильтру.

##### Parameters

###### filter?

`Omit`\<[`GetRefundListFilter`](../type-aliases/GetRefundListFilter.md), `"cursor"`\>

##### Returns

`Promise`\<[`IRefund`](../YooKassa-SDK-API-Reference/namespaces/Refunds/interfaces/IRefund.md)[]\>

##### See

 - https://yookassa.ru/developers/using-api/lists
 - https://yookassa.ru/developers/api#get_refunds_list

#### load

> **load**: (`refundId`) => `Promise`\<[`IRefund`](../YooKassa-SDK-API-Reference/namespaces/Refunds/interfaces/IRefund.md)\>

**Возврат**

Возвращает актуальное состояние возврата по ID.

##### Parameters

###### refundId

`string`

##### Returns

`Promise`\<[`IRefund`](../YooKassa-SDK-API-Reference/namespaces/Refunds/interfaces/IRefund.md)\>

##### See

https://yookassa.ru/developers/api#get_refund

***

### sbpBanks

> `readonly` **sbpBanks**: `object`

Defined in: [src/client/sdk.ts:649](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/client/sdk.ts#L649)

Участники СБП — справочник для выплат через СБП

#### list

> **list**: () => `Promise`\<[`SbpParticipantBank`](../interfaces/SbpParticipantBank.md)[]\>

##### Returns

`Promise`\<[`SbpParticipantBank`](../interfaces/SbpParticipantBank.md)[]\>

##### See

https://yookassa.ru/developers/api#get_sbp_banks

***

### shop

> `readonly` **shop**: `object`

Defined in: [src/client/sdk.ts:793](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/client/sdk.ts#L793)

**Магазин**

Данные подключённого магазина.
**Нужен OAuth-токен** — только в партнёрской программе.

#### info

> **info**: () => `Promise`\<[`IShopInfo`](../interfaces/IShopInfo.md)\>

**Данные магазина**

Возвращает аккаунт: ID, статус, способы оплаты и т. д.

##### Returns

`Promise`\<[`IShopInfo`](../interfaces/IShopInfo.md)\>

##### See

https://yookassa.ru/developers/api#get_me

#### See

https://yookassa.ru/developers/api#get_me

***

### webhooks

> `readonly` **webhooks**: `object`

Defined in: [src/client/sdk.ts:720](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/client/sdk.ts#L720)

**Методы работы с вебхуками**

Уведомления о событиях ЮKassa.
**Нужен OAuth-токен** — только в партнёрской программе.

#### create

> **create**: (`webhook`, `idempotenceKey?`) => `Promise`\<[`IWebhook`](../interfaces/IWebhook.md)\>

**Создание вебхука**

Регистрирует вебхук для уведомлений о событиях.

##### Parameters

###### webhook

[`CreateWebhookRequest`](../interfaces/CreateWebhookRequest.md)

— `event`, `url`

###### idempotenceKey?

`string`

— ключ идемпотентности (опционально)

##### Returns

`Promise`\<[`IWebhook`](../interfaces/IWebhook.md)\>

##### See

https://yookassa.ru/developers/api#create_webhook

#### delete

> **delete**: (`webhookId`) => `Promise`\<`void`\>

**Удаление вебхука**

Удаляет вебхук по ID.

##### Parameters

###### webhookId

`string`

— ID вебхука

##### Returns

`Promise`\<`void`\>

##### See

https://yookassa.ru/developers/api#delete_webhook

#### list

> **list**: () => `Promise`\<[`IWebhook`](../interfaces/IWebhook.md)[]\>

**Список вебхуков**

Возвращает зарегистрированные вебхуки.

##### Returns

`Promise`\<[`IWebhook`](../interfaces/IWebhook.md)[]\>

##### See

https://yookassa.ru/developers/api#get_webhook_list

#### verify

> **verify**: (`body`) => `Promise`\<[`PaymentNotification`](../type-aliases/PaymentNotification.md) \| [`RefundNotification`](../type-aliases/RefundNotification.md)\>

**Верификация уведомления (payment или refund)**

Подтверждает подлинность уведомления **перезапросом объекта через API**.
Единственный надёжный способ убедиться, что уведомление от ЮKassa.

Возвращает нотификацию с актуальным объектом:
- `payment.*` → `PaymentNotification` с `IPayment`
- `refund.*` → `RefundNotification` с `IRefund`

Верифицирует уведомление (payment или refund): перезапрашивает объект через API.
Возвращает нотификацию с актуальным состоянием из API.

##### Parameters

###### body

`unknown`

##### Returns

`Promise`\<[`PaymentNotification`](../type-aliases/PaymentNotification.md) \| [`RefundNotification`](../type-aliases/RefundNotification.md)\>

##### Param

**body**

— тело запроса (`req.body`)

##### Throws

Некорректное тело или неподдерживаемый тип события

#### verifyPayment

> **verifyPayment**: (`body`) => `Promise`\<[`PaymentNotification`](../type-aliases/PaymentNotification.md)\>

**Верификация уведомления о платеже**

Как `verify`, но принимает только `payment.*`.
Отклоняет `refund.*` и прочие — `WebhookValidationError`.
Возвращает `PaymentNotification` с актуальным `IPayment`.

Верифицирует уведомление о платеже: перезапрашивает объект через API.
Отклоняет события вне `payment.*`.
Возвращает нотификацию с актуальным платежом из API.

##### Parameters

###### body

`unknown`

##### Returns

`Promise`\<[`PaymentNotification`](../type-aliases/PaymentNotification.md)\>

##### Param

**body**

— тело запроса (`req.body`)

##### Throws

Некорректное тело или событие не `payment.*`

#### verifyRefund

> **verifyRefund**: (`body`) => `Promise`\<[`RefundNotification`](../type-aliases/RefundNotification.md)\>

**Верификация уведомления о возврате**

Как `verify`, но принимает только `refund.*`.
Отклоняет `payment.*` и прочие — `WebhookValidationError`.
Возвращает `RefundNotification` с актуальным `IRefund`.

Верифицирует уведомление о возврате: перезапрашивает объект через API.
Отклоняет события вне `refund.*`.
Возвращает нотификацию с актуальным возвратом из API.

##### Parameters

###### body

`unknown`

##### Returns

`Promise`\<[`RefundNotification`](../type-aliases/RefundNotification.md)\>

##### Param

**body**

— тело запроса (`req.body`)

##### Throws

Некорректное тело или событие не `refund.*`

#### See

https://yookassa.ru/developers/api#webhook
