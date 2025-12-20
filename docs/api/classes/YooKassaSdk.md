[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / YooKassaSdk

# Class: YooKassaSdk

Defined in: [src/client/sdk.ts:48](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/client/sdk.ts#L48)

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

Defined in: [src/client/connector.ts:232](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/client/connector.ts#L232)

#### Parameters

##### init

[`ConnectorOpts`](../type-aliases/ConnectorOpts.md)

#### Returns

`YooKassaSdk`

#### Inherited from

`Connector.constructor`

## Properties

### payments

> `readonly` **payments**: `object`

Defined in: [src/client/sdk.ts:245](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/client/sdk.ts#L245)

Методы для работы с платежами

#### cancel()

> **cancel**: (`paymentId`, `idempotenceKey?`) => `Promise`\<[`IPayment`](../YooKassa-SDK-API-Reference/namespaces/Payments/interfaces/IPayment.md)\>

****Отмена платежа****

Отменяет платеж, находящийся в статусе `waiting_for_capture`.
Отмена платежа значит, что вы не готовы выдать пользователю товар или оказать услугу.
Как только вы отменяете платеж, мы начинаем возвращать деньги на счет плательщика.
Для платежей банковскими картами, из кошелька ЮMoney или через SberPay отмена происходит мгновенно.
Для остальных способов оплаты возврат может занимать до нескольких дней.

[Подробнее о подтверждении и отмене платежей](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#capture-and-cancel)

##### Parameters

###### paymentId

`string`

идентификатор платежа

###### idempotenceKey?

`string`

ключ идемпотентности (опционально)

##### Returns

`Promise`\<[`IPayment`](../YooKassa-SDK-API-Reference/namespaces/Payments/interfaces/IPayment.md)\>

#### capture()

> **capture**: (`paymentId`, `payload?`, `idempotenceKey?`) => `Promise`\<[`IPayment`](../YooKassa-SDK-API-Reference/namespaces/Payments/interfaces/IPayment.md)\>

****Подтверждение платежа***

Подтверждает вашу готовность принять платеж.
После подтверждения платеж перейдет в статус `succeeded`.
Это значит, что вы можете выдать товар или оказать услугу пользователю.
Подтвердить можно только платеж в статусе `waiting_for_capture`
и только в течение определенного времени (зависит от способа оплаты).
Если вы не подтвердите платеж в отведенное время, он автоматически
перейдет в статус `canceled`, и деньги вернутся пользователю.

[Подробнее о подтверждении и отмене платежей](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#capture-and-cancel)

##### Parameters

###### paymentId

`string`

идентификатор платежа

###### payload?

[`CapturePaymentRequest`](../YooKassa-SDK-API-Reference/namespaces/Payments/interfaces/CapturePaymentRequest.md)

данные для подтверждения (сумма, чек, авиабилеты, распределение)

###### idempotenceKey?

`string`

ключ идемпотентности (опционально)

##### Returns

`Promise`\<[`IPayment`](../YooKassa-SDK-API-Reference/namespaces/Payments/interfaces/IPayment.md)\>

#### create()

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

#### list()

> **list**: (`filter?`) => `Promise`\<[`IPayment`](../YooKassa-SDK-API-Reference/namespaces/Payments/interfaces/IPayment.md)[]\>

****Список платежей****

Запрос позволяет получить список платежей, отфильтрованный по заданным критериям.

Retrieves a list of payments filtered by the specified criteria.

***Получить список платежей****

Запрос позволяет получить список платежей, отфильтрованный по заданным критериям. [Подробнее о работе со списками](https://yookassa.ru/developers/using-api/lists)

##### Parameters

###### filter?

`Omit`\<[`GetPaymentListFilter`](../type-aliases/GetPaymentListFilter.md), `"cursor"`\>

##### Returns

`Promise`\<[`IPayment`](../YooKassa-SDK-API-Reference/namespaces/Payments/interfaces/IPayment.md)[]\>

##### Param

The parameters for filtering the payments.

##### Returns

A promise that resolves to the list of payments.

[API Documentation](https://yookassa.ru/developers/api#get_payment)

[Working with lists documentation](https://yookassa.ru/developers/using-api/lists)

**PaymentListParams**

These are the parameters that can be used to filter the payments.

**created_at**
- `gte` (optional): Filter by the creation time. The time should be greater than or equal to the specified value. Format: ISO 8601. Example: `created_at.gte=2018-07-18T10:51:18.139Z`
- `gt` (optional): Filter by the creation time. The time should be greater than the specified value. Format: ISO 8601. Example: `created_at.gt=2018-07-18T10:51:18.139Z`
- `lte` (optional): Filter by the creation time. The time should be less than or equal to the specified value. Format: ISO 8601. Example: `created_at.lte=2018-07-18T10:51:18.139Z`
- `lt` (optional): Filter by the creation time. The time should be less than the specified value. Format: ISO 8601. Example: `created_at.lt=2018-07-18T10:51:18.139Z`

**captured_at**
- `gte` (optional): Filter by the time of payment confirmation. The time should be greater than or equal to the specified value. Format: ISO 8601. Example: `captured_at.gte=2018-07-18T10:51:18.139Z`
- `gt` (optional): Filter by the time of payment confirmation. The time should be greater than the specified value. Format: ISO 8601. Example: `captured_at.gt=2018-07-18T10:51:18.139Z`
- `lte` (optional): Filter by the time of payment confirmation. The time should be less than or equal to the specified value. Format: ISO 8601. Example: `captured_at.lte=2018-07-18T10:51:18.139Z`
- `lt` (optional): Filter by the time of payment confirmation. The time should be less than the specified value. Format: ISO 8601. Example: `captured_at.lt=2018-07-18T10:51:18.139Z`

**payment_method**
- `string` (optional): Filter by payment method code. Example: `payment_method=bank_card`

**status**
- `string` (optional): Filter by payment status. Example: `status=succeeded`

**limit**
- `number` (optional): The number of objects returned in the response. Possible values: from 1 to 100. Example: `limit=50`
- Default value: `10`

**cursor**
- `string` (optional): Used to retrieve the next fragment of the list. Example: `cursor=37a5c87d-3984-51e8-a7f3-8de646d39ec15`
- Used as an indicator to retrieve the next fragment of the list. This should be used if there are more objects in the list than the number specified in the limit parameter. An example of how to use it is provided in the "Working with lists" documentation.

**PaymentList**

This is the response structure for the list of payments.

**next_cursor**
- `string` (optional): Used to retrieve the next fragment of the list.

**payments**
- `Payments.Payment[]` (optional): The list of payments.

#### load()

> **load**: (`id`) => `Promise`\<[`IPayment`](../YooKassa-SDK-API-Reference/namespaces/Payments/interfaces/IPayment.md)\>

****Информация о платеже****

Запрос позволяет получить информацию о текущем состоянии платежа по его уникальному идентификатору.

[Документация](https://yookassa.ru/developers/api#get_payment)

##### Parameters

###### id

`string`

##### Returns

`Promise`\<[`IPayment`](../YooKassa-SDK-API-Reference/namespaces/Payments/interfaces/IPayment.md)\>

***

### receipts

> `readonly` **receipts**: `object`

Defined in: [src/client/sdk.ts:432](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/client/sdk.ts#L432)

****Методы для работы с чеками****

С помощью API можно получать информацию о чеках, для которых вы отправили данные через ЮKassa.

#### create()

> **create**: (`receipt`, `idempotenceKey?`) => `Promise`\<[`ReceiptType`](../YooKassa-SDK-API-Reference/namespaces/Receipts/type-aliases/ReceiptType.md)\>

****Создание чека****

Используйте этот запрос при оплате с соблюдением требований 54-ФЗ, чтобы создать чек зачета предоплаты.
Если вы работаете по сценарию [Сначала платеж, потом чек](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#receipt-after-payment),
в запросе также нужно передавать данные для формирования чека прихода и чека возврата прихода.

##### Parameters

###### receipt

[`CreateReceiptType`](../YooKassa-SDK-API-Reference/namespaces/Receipts/type-aliases/CreateReceiptType.md)

данные чека

###### idempotenceKey?

`string`

ключ идемпотентности (опционально)

##### Returns

`Promise`\<[`ReceiptType`](../YooKassa-SDK-API-Reference/namespaces/Receipts/type-aliases/ReceiptType.md)\>

##### See

https://yookassa.ru/developers/api#create_receipt

#### list()

> **list**: (`filter?`) => `Promise`\<[`ReceiptType`](../YooKassa-SDK-API-Reference/namespaces/Receipts/type-aliases/ReceiptType.md)[]\>

****Список чеков****

Запрос позволяет получить список чеков, отфильтрованный по заданным критериям.
Можно запросить чеки по конкретному платежу, чеки по конкретному возврату или все чеки магазина.

[Подробнее о работе со списками](https://yookassa.ru/developers/using-api/lists)

##### Parameters

###### filter?

`Omit`\<[`GetReceiptListFilter`](../type-aliases/GetReceiptListFilter.md), `"cursor"`\>

##### Returns

`Promise`\<[`ReceiptType`](../YooKassa-SDK-API-Reference/namespaces/Receipts/type-aliases/ReceiptType.md)[]\>

##### See

https://yookassa.ru/developers/api#get_receipts_list

#### load()

> **load**: (`receiptId`) => `Promise`\<[`ReceiptType`](../YooKassa-SDK-API-Reference/namespaces/Receipts/type-aliases/ReceiptType.md)\>

****Информация о чеке****

Запрос позволяет получить информацию о текущем состоянии чека по его уникальному идентификатору.

##### Parameters

###### receiptId

`string`

##### Returns

`Promise`\<[`ReceiptType`](../YooKassa-SDK-API-Reference/namespaces/Receipts/type-aliases/ReceiptType.md)\>

#### See

https://yookassa.ru/developers/api#receipt

***

### refunds

> `readonly` **refunds**: `object`

Defined in: [src/client/sdk.ts:393](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/client/sdk.ts#L393)

Методы для работы с возвратами

#### create()

> **create**: (`refund`, `idempotenceKey?`) => `Promise`\<[`IRefund`](../YooKassa-SDK-API-Reference/namespaces/Refunds/interfaces/IRefund.md)\>

****Создание возврата****

Создает возврат успешного платежа на указанную сумму.
Платеж можно вернуть только в течение трех лет с момента его создания.
Комиссия ЮKassa за проведение платежа не возвращается.

##### Parameters

###### refund

[`CreateRefundRequest`](../YooKassa-SDK-API-Reference/namespaces/Refunds/type-aliases/CreateRefundRequest.md)

данные возврата

###### idempotenceKey?

`string`

ключ идемпотентности (опционально)

##### Returns

`Promise`\<[`IRefund`](../YooKassa-SDK-API-Reference/namespaces/Refunds/interfaces/IRefund.md)\>

##### See

https://yookassa.ru/developers/api#create_refund

#### list()

> **list**: (`filter?`) => `Promise`\<[`IRefund`](../YooKassa-SDK-API-Reference/namespaces/Refunds/interfaces/IRefund.md)[]\>

****Список возвратов****

Запрос позволяет получить список возвратов, отфильтрованный по заданным критериям.

[Подробнее о работе со списками](https://yookassa.ru/developers/using-api/lists)

##### Parameters

###### filter?

`Omit`\<[`GetRefundListFilter`](../type-aliases/GetRefundListFilter.md), `"cursor"`\>

##### Returns

`Promise`\<[`IRefund`](../YooKassa-SDK-API-Reference/namespaces/Refunds/interfaces/IRefund.md)[]\>

##### See

https://yookassa.ru/developers/api#get_refunds_list

#### load()

> **load**: (`refundId`) => `Promise`\<[`IRefund`](../YooKassa-SDK-API-Reference/namespaces/Refunds/interfaces/IRefund.md)\>

****Информация о возврате****

Запрос позволяет получить информацию о текущем состоянии возврата по его уникальному идентификатору.

##### Parameters

###### refundId

`string`

##### Returns

`Promise`\<[`IRefund`](../YooKassa-SDK-API-Reference/namespaces/Refunds/interfaces/IRefund.md)\>

##### See

https://yookassa.ru/developers/api#get_refund

***

### shop

> `readonly` **shop**: `object`

Defined in: [src/client/sdk.ts:511](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/client/sdk.ts#L511)

****Информация о магазине****

Позволяет получить информацию о подключённом магазине.
**Требуется OAuth-токен** — функционал доступен только в рамках партнёрской программы.

#### info()

> **info**: () => `Promise`\<[`IShopInfo`](../interfaces/IShopInfo.md)\>

****Получить информацию о магазине****

Возвращает информацию об аккаунте: идентификатор, статус, доступные способы оплаты и т.д.

##### Returns

`Promise`\<[`IShopInfo`](../interfaces/IShopInfo.md)\>

##### See

https://yookassa.ru/developers/api#get_me

#### See

https://yookassa.ru/developers/api#get_me

***

### webhooks

> `readonly` **webhooks**: `object`

Defined in: [src/client/sdk.ts:474](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/client/sdk.ts#L474)

****Методы для работы с вебхуками****

Вебхуки позволяют получать уведомления о событиях в ЮKassa.
**Требуется OAuth-токен** — функционал доступен только в рамках партнёрской программы.

#### create()

> **create**: (`webhook`, `idempotenceKey?`) => `Promise`\<[`IWebhook`](../interfaces/IWebhook.md)\>

****Создание вебхука****

Создаёт вебхук для получения уведомлений о событиях.

##### Parameters

###### webhook

[`CreateWebhookRequest`](../interfaces/CreateWebhookRequest.md)

данные вебхука (event, url)

###### idempotenceKey?

`string`

ключ идемпотентности (опционально)

##### Returns

`Promise`\<[`IWebhook`](../interfaces/IWebhook.md)\>

##### See

https://yookassa.ru/developers/api#create_webhook

#### delete()

> **delete**: (`webhookId`) => `Promise`\<`void`\>

****Удаление вебхука****

Удаляет вебхук по идентификатору.

##### Parameters

###### webhookId

`string`

идентификатор вебхука

##### Returns

`Promise`\<`void`\>

##### See

https://yookassa.ru/developers/api#delete_webhook

#### list()

> **list**: () => `Promise`\<[`IWebhook`](../interfaces/IWebhook.md)[]\>

****Список вебхуков****

Возвращает список созданных вебхуков.

##### Returns

`Promise`\<[`IWebhook`](../interfaces/IWebhook.md)[]\>

##### See

https://yookassa.ru/developers/api#get_webhook_list

#### See

https://yookassa.ru/developers/api#webhook
