# YooKassa SDK

[![npm version](https://img.shields.io/npm/v/yookassa-api-sdk.svg)](https://www.npmjs.com/package/yookassa-api-sdk)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-compatible-f9f1e1.svg)](https://bun.sh/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[README in English](README.md)

Современный TypeScript SDK для интеграции с [YooKassa API](https://yookassa.ru/developers/api). Поддерживает платежи, возвраты, чеки, вебхуки и многое другое.

## Особенности

- 🚀 **Полная типизация** — написан на TypeScript с полной поддержкой типов
- 🔄 **Автоматические повторы** — retry с exponential backoff при сетевых ошибках
- 🔑 **Идемпотентность** — автоматическая генерация `Idempotence-Key` с возможностью переопределения
- 🌐 **Поддержка прокси** — работа через HTTP/HTTPS прокси
- ⚡ **Rate limiting** — встроенное ограничение частоты запросов
- 🕐 **Таймауты** — настраиваемые таймауты запросов
- 📦 **Кэширование инстансов** — эффективное переиспользование соединений
- 🔧 **Совместимость** — работает с Node.js, Bun и другими рантаймами

## Установка

```sh
# npm
npm install yookassa-api-sdk

# yarn
yarn add yookassa-api-sdk

# bun
bun add yookassa-api-sdk
```

## Быстрый старт

```ts
import { YooKassa } from 'yookassa-api-sdk';

const sdk = YooKassa({
    shop_id: 'ваш_идентификатор_магазина',
    secret_key: 'ваш_секретный_ключ',
});

// Создание платежа
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    description: 'Заказ №1',
});

console.log(payment.confirmation.confirmation_url);
```

## Параметры подключения

```ts
interface ConnectorOpts {
    /** Идентификатор магазина (обязательный) */
    shop_id: string;

    /** Секретный ключ магазина (обязательный) */
    secret_key: string;

    /** OAuth-токен для партнёрского API (вебхуки, информация о магазине) */
    token?: string;

    /** Режим отладки — логирует запросы и ответы */
    debug?: boolean;

    /** Таймаут запроса в миллисекундах (по умолчанию: 5000) */
    timeout?: number;

    /** Количество повторных попыток при ошибках (по умолчанию: 5) */
    retries?: number;

    /** Максимальное количество запросов в секунду (по умолчанию: 5) */
    maxRPS?: number;

    /** Прокси-сервер (строка URL) */
    proxy?: string;

    /** Кастомный эндпоинт API */
    endpoint?: string;
}
```

### Примеры инициализации

```ts
// Базовая инициализация
const sdk = YooKassa({
    shop_id: '123456',
    secret_key: 'test_secret_key',
});

// С отладкой и кастомными настройками
const sdk = YooKassa({
    shop_id: '123456',
    secret_key: 'live_secret_key',
    debug: true,
    timeout: 10000, // 10 секунд
    retries: 3, // 3 повтора
    maxRPS: 10, // 10 запросов в секунду
});

// С прокси (строка)
const sdk = YooKassa({
    shop_id: '123456',
    secret_key: 'live_secret_key',
    proxy: 'http://user:password@proxy.example.com:8080',
});

// С OAuth токеном (для вебхуков и информации о магазине)
const sdk = YooKassa({
    shop_id: '123456',
    secret_key: 'live_secret_key',
    token: 'your_oauth_token',
});
```

## Кэширование инстансов

SDK автоматически кэширует инстансы по `shop_id`. Это позволяет:

- Переиспользовать соединения
- Работать с несколькими магазинами одновременно

```ts
// Оба вызова вернут один и тот же инстанс
const sdk1 = YooKassa({ shop_id: '123', secret_key: 'key1' });
const sdk2 = YooKassa({ shop_id: '123', secret_key: 'key1' });
console.log(sdk1 === sdk2); // true

// Разные магазины — разные инстансы
const shop1 = YooKassa({ shop_id: '111', secret_key: 'key1' });
const shop2 = YooKassa({ shop_id: '222', secret_key: 'key2' });

// Принудительное создание нового инстанса
const newSdk = YooKassa({ shop_id: '123', secret_key: 'new_key' }, true);

// Очистка кэша
import { clearYooKassaCache } from 'yookassa-api-sdk';
clearYooKassaCache('123'); // Удалить конкретный магазин
clearYooKassaCache(); // Очистить весь кэш
```

## Платежи

### Создание платежа

```ts
import { CurrencyEnum } from 'yookassa-api-sdk';

const payment = await sdk.payments.create({
    amount: {
        value: '100.00',
        currency: CurrencyEnum.RUB,
    },
    confirmation: {
        type: 'redirect',
        return_url: 'https://example.com/return',
    },
    capture: true,
    description: 'Заказ №123',
    metadata: {
        order_id: '123',
    },
});

// С явным ключом идемпотентности
const payment = await sdk.payments.create(paymentData, 'your-unique-key');
```

[Документация по созданию платежа](https://yookassa.ru/developers/api#create_payment)

### Получение информации о платеже

```ts
const payment = await sdk.payments.load('payment_id');
console.log(payment.status); // pending, waiting_for_capture, succeeded, canceled
```

[Документация](https://yookassa.ru/developers/api#get_payment)

### Список платежей

```ts
const payments = await sdk.payments.list({
    created_at: { gte: '2024-01-01T00:00:00.000Z' },
    status: 'succeeded',
    limit: 50,
});
```

**Доступные фильтры:**

| Фильтр | Описание |
| --- | --- |
| `created_at` | Фильтр по времени создания (`gte`, `gt`, `lte`, `lt`) |
| `captured_at` | Фильтр по времени подтверждения |
| `status` | Фильтр по статусу (`pending`, `waiting_for_capture`, `succeeded`, `canceled`) |
| `payment_method` | Фильтр по способу оплаты |
| `limit` | Количество результатов (1-100, по умолчанию: 10) |

[Документация](https://yookassa.ru/developers/api#get_payments_list)

### Подтверждение платежа

```ts
// Простое подтверждение
const payment = await sdk.payments.capture('payment_id');

// Частичное подтверждение с чеком
const payment = await sdk.payments.capture('payment_id', {
    amount: { value: '50.00', currency: 'RUB' },
    receipt: {
        customer: { email: 'customer@example.com' },
        items: [
            {
                description: 'Товар',
                quantity: 1,
                amount: { value: '50.00', currency: 'RUB' },
                vat_code: 1,
            },
        ],
    },
});
```

[Документация](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#capture-and-cancel)

### Отмена платежа

```ts
const payment = await sdk.payments.cancel('payment_id');
```

[Документация](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#capture-and-cancel)

## Двухстадийные платежи

Для дорогих заказов используйте [двухстадийные платежи](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#two-stage) — сначала холдирование, затем списание или отмена.

```ts
// Этап 1: Создание платежа с capture: false (холдирование)
const payment = await sdk.payments.create({
    amount: { value: '5000.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    capture: false, // Не списывать сразу
    description: 'Заказ №456',
});

// Этап 2а: Подтверждение платежа (после проверки наличия товара и т.д.)
const captured = await sdk.payments.capture(payment.id);

// Этап 2б: Или отмена при необходимости
const canceled = await sdk.payments.cancel(payment.id);
```

## Сценарии подтверждения

SDK поддерживает все [сценарии подтверждения](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#confirmation-scenarios) YooKassa:

### Redirect (по умолчанию)

Пользователь перенаправляется на страницу YooKassa или банка:

```ts
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    confirmation: {
        type: 'redirect',
        return_url: 'https://example.com/return',
        locale: 'ru_RU', // Опционально: язык интерфейса
    },
});

// Перенаправьте пользователя на страницу оплаты
console.log(payment.confirmation.confirmation_url);
```

### Embedded (Виджет)

Оплата через [виджет YooKassa](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/widget/basics):

```ts
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    confirmation: { type: 'embedded' },
});

// Используйте токен для инициализации виджета
console.log(payment.confirmation.confirmation_token);
```

### QR-код (СБП)

Оплата по QR-коду через СБП:

```ts
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    payment_method_data: { type: 'sbp' },
    confirmation: { type: 'qr' },
});

// Сгенерируйте QR-код из этих данных
console.log(payment.confirmation.confirmation_data);
```

### Мобильное приложение

Для SberPay, T-Pay и других мобильных платежей:

```ts
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    payment_method_data: { type: 'sberbank' },
    confirmation: { type: 'mobile_application', return_url: 'https://example.com' },
});

// Диплинк в мобильное приложение
console.log(payment.confirmation.confirmation_url);
```

## Платёжные токены

Для интеграции с [Checkout.js](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/checkout-js/basics) или [мобильным SDK](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/mobile-sdks/basics):

```ts
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    payment_token: 'токен_из_checkout_js_или_mobile_sdk',
    description: 'Заказ №789',
});
```

## Автоплатежи (рекуррентные платежи)

SDK поддерживает [автоплатежи](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments) — автоматические списания без подтверждения пользователем.

### Сохранение платёжного метода

```ts
// Первый платёж — сохраняем карту для будущих списаний
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    save_payment_method: true, // Запрос на сохранение метода оплаты
    description: 'Оплата подписки',
});

// После успешного платежа будет доступен payment_method.id
console.log(payment.payment_method.id); // Используем для будущих списаний
```

### Списание с сохранённого метода

```ts
// Последующее автосписание (без подтверждения пользователем)
const recurringPayment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    payment_method_id: 'saved_payment_method_id', // ID из первого платежа
    capture: true,
    description: 'Ежемесячная подписка',
});
```

### Проверка сохранённого метода

```ts
const payment = await sdk.payments.load('payment_id');

if (payment.payment_method?.saved) {
    // Метод сохранён, можно использовать для автоплатежей
    console.log('ID сохранённого метода:', payment.payment_method.id);
}
```

## Авиабилеты

Для продажи авиабилетов банковской картой передайте [данные о перелёте](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/airline-tickets):

```ts
const payment = await sdk.payments.create({
    amount: { value: '15000.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    payment_method_data: { type: 'bank_card' },
    airline: {
        ticket_number: '5554916004417', // или booking_reference
        passengers: [
            { first_name: 'SERGEI', last_name: 'IVANOV' },
        ],
        legs: [
            {
                departure_airport: 'LED',
                destination_airport: 'AMS',
                departure_date: '2024-12-24',
                carrier_code: 'SU',
            },
        ],
    },
});
```

## Пополнение счетов и кошельков

Для [пополнения кошельков, банковских счетов или баланса телефона](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/receiver-data):

```ts
// Пополнение банковского счёта
const payment = await sdk.payments.create({
    amount: { value: '1000.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    receiver: {
        type: 'bank_account',
        account_number: '40817810000000000001',
        bic: '044525225',
    },
});

// Пополнение баланса телефона
const payment = await sdk.payments.create({
    amount: { value: '500.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    receiver: {
        type: 'mobile_balance',
        phone: '79001234567',
    },
});

// Пополнение электронного кошелька
const payment = await sdk.payments.create({
    amount: { value: '500.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    receiver: {
        type: 'digital_wallet',
        account_number: '4100175017397',
    },
});
```

## Сплитование платежей

Для [маркетплейсов](https://yookassa.ru/developers/solutions-for-platforms/split-payments/basics) — распределение платежа между несколькими продавцами:

```ts
const payment = await sdk.payments.create({
    amount: { value: '1000.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    transfers: [
        {
            account_id: 'seller_shop_id_1',
            amount: { value: '600.00', currency: 'RUB' },
            platform_fee_amount: { value: '50.00', currency: 'RUB' }, // Ваша комиссия
        },
        {
            account_id: 'seller_shop_id_2',
            amount: { value: '400.00', currency: 'RUB' },
            platform_fee_amount: { value: '30.00', currency: 'RUB' },
        },
    ],
});
```

## Метаданные

Прикрепляйте произвольные данные к платежам (до 16 ключей, возвращаются в ответах и вебхуках):

```ts
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    metadata: {
        order_id: 'order-123',
        user_id: 'user-456',
        source: 'mobile_app',
    },
});

// Позже получите метаданные
const loaded = await sdk.payments.load(payment.id);
console.log(loaded.metadata.order_id); // 'order-123'
```

## Возвраты

### Создание возврата

```ts
const refund = await sdk.refunds.create({
    payment_id: 'payment_id',
    amount: {
        value: '50.00',
        currency: CurrencyEnum.RUB,
    },
});
```

[Документация](https://yookassa.ru/developers/api#create_refund)

### Получение информации о возврате

```ts
const refund = await sdk.refunds.load('refund_id');
```

[Документация](https://yookassa.ru/developers/api#get_refund)

### Список возвратов

```ts
const refunds = await sdk.refunds.list({
    payment_id: 'payment_id',
    limit: 10,
});
```

**Доступные фильтры:**

| Фильтр | Описание |
| --- | --- |
| `created_at` | Фильтр по времени создания (`gte`, `gt`, `lte`, `lt`) |
| `payment_id` | Фильтр по ID платежа |
| `status` | Фильтр по статусу (`pending`, `succeeded`, `canceled`) |
| `limit` | Количество результатов (1-100, по умолчанию: 10) |

[Документация](https://yookassa.ru/developers/api#get_refunds_list)

## Чеки

### Создание чека

```ts
const receipt = await sdk.receipts.create({
    type: 'payment',
    payment_id: 'payment_id',
    customer: {
        email: 'customer@example.com',
    },
    items: [
        {
            description: 'Товар',
            quantity: 1,
            amount: { value: '100.00', currency: CurrencyEnum.RUB },
            vat_code: 1,
        },
    ],
    send: true,
});
```

[Документация](https://yookassa.ru/developers/api#create_receipt)

### Получение информации о чеке

```ts
const receipt = await sdk.receipts.load('receipt_id');
```

[Документация](https://yookassa.ru/developers/api#get_receipt)

### Список чеков

```ts
const receipts = await sdk.receipts.list({
    payment_id: 'payment_id',
});
```

**Доступные фильтры:**

| Фильтр | Описание |
| --- | --- |
| `payment_id` | Фильтр по ID платежа |
| `refund_id` | Фильтр по ID возврата |

[Документация](https://yookassa.ru/developers/api#get_receipts_list)

## Вебхуки (Партнёрское API)

> **Важно:** Для работы с вебхуками требуется OAuth-токен. Функционал доступен только в рамках [партнёрской программы](https://yookassa.ru/developers/partners-api/basics).

### Создание вебхука

```ts
const webhook = await sdk.webhooks.create({
    event: 'payment.succeeded',
    url: 'https://example.com/webhook',
});
```

### Список вебхуков

```ts
const webhooks = await sdk.webhooks.list();
```

### Удаление вебхука

```ts
await sdk.webhooks.delete('webhook_id');
```

## Информация о магазине (Партнёрское API)

> **Важно:** Требуется OAuth-токен.

```ts
const shop = await sdk.shop.info();
console.log(shop.account_id, shop.status, shop.payment_methods);
```

## Обработка ошибок

SDK возвращает унифицированный формат ответа:

```ts
try {
    const payment = await sdk.payments.create({ ... })
    // Успех
} catch (error) {
    // YooKassaErr содержит:
    // - error.name — код ошибки (например, 'invalid_request')
    // - error.message — описание ошибки
    // - error.id — идентификатор запроса
    console.error(error.name, error.message)
}
```

### Типы ошибок

| Код                     | Описание                      |
| ----------------------- | ----------------------------- |
| `invalid_request`       | Неверный запрос               |
| `invalid_credentials`   | Неверные учётные данные       |
| `forbidden`             | Доступ запрещён               |
| `not_found`             | Объект не найден              |
| `too_many_requests`     | Превышен лимит запросов       |
| `internal_server_error` | Ошибка сервера                |
| `NETWORK_ERROR`         | Сетевая ошибка                |
| `ECONNABORTED`          | Таймаут запроса               |
| `MISSING_OAUTH_TOKEN`   | Требуется OAuth-токен         |

## Справочник методов

### Payments

| Метод                              | Описание                |
| ---------------------------------- | ----------------------- |
| `create(data, idempotenceKey?)`    | Создание платежа        |
| `load(id)`                         | Получение платежа по ID |
| `list(filter?)`                    | Список платежей         |
| `capture(id, payload?, key?)`      | Подтверждение платежа   |
| `cancel(id, idempotenceKey?)`      | Отмена платежа          |

### Refunds

| Метод                              | Описание                 |
| ---------------------------------- | ------------------------ |
| `create(data, idempotenceKey?)`    | Создание возврата        |
| `load(id)`                         | Получение возврата по ID |
| `list(filter?)`                    | Список возвратов         |

### Receipts

| Метод                              | Описание             |
| ---------------------------------- | -------------------- |
| `create(data, idempotenceKey?)`    | Создание чека        |
| `load(id)`                         | Получение чека по ID |
| `list(filter?)`                    | Список чеков         |

### Webhooks (требуется OAuth)

| Метод                              | Описание             |
| ---------------------------------- | -------------------- |
| `create(data, idempotenceKey?)`    | Создание вебхука     |
| `list()`                           | Список вебхуков      |
| `delete(id)`                       | Удаление вебхука     |

### Shop (требуется OAuth)

| Метод    | Описание                    |
| -------- | --------------------------- |
| `info()` | Информация о магазине       |

## TypeScript типы

SDK экспортирует все типы для типобезопасной разработки:

```ts
import type {
    // Типы платежей
    Payments,           // Namespace с IPayment, CreatePaymentRequest и др.
    IPaymentMethod,     // Типы способов оплаты
    IConfirmation,      // Типы подтверждения

    // Типы возвратов
    Refunds,            // Namespace с IRefund, CreateRefundRequest и др.

    // Типы чеков
    Receipts,           // Namespace с ReceiptType, CreateReceiptType и др.
    Items,              // Namespace с типом Item для товаров в чеке

    // Другие типы
    Customer,           // Тип данных покупателя
    Receiver,           // Тип получателя для пополнений
    IAirline,           // Данные авиабилета
    IWebhook,           // Тип вебхука
    IShopInfo,          // Тип информации о магазине
    IAmount,            // Тип суммы { value, currency }
    ConnectorOpts,      // Тип конфигурации SDK
    YooKassaErr,        // Класс ошибки

    // Типы фильтров
    GetPaymentListFilter,
    GetRefundListFilter,
    GetReceiptListFilter,
    DateFilter,
} from 'yookassa-api-sdk';
```

## Перечисления (Enums)

SDK экспортирует TypeScript перечисления для типобезопасной разработки:

```ts
import {
    CurrencyEnum,
    LocaleEnum,
    PaymentMethodsEnum,
    ConfirmationTypesEnum,
    WebhookEventEnum,
} from 'yookassa-api-sdk';
```

| Enum | Описание |
| --- | --- |
| `CurrencyEnum` | Коды валют (RUB, USD, EUR и др.) |
| `LocaleEnum` | Язык интерфейса (`ru_RU`, `en_US`) |
| `PaymentMethodsEnum` | Способы оплаты (`bank_card`, `sbp`, `yoo_money` и др.) |
| `ConfirmationTypesEnum` | Сценарии подтверждения (`redirect`, `embedded`, `qr` и др.) |
| `WebhookEventEnum` | События вебхуков (`payment.succeeded`, `refund.succeeded` и др.) |

> ⚠️ **Устаревшие способы оплаты:**
> - `qiwi` — ЦБ РФ отозвал лицензию у QIWI Банка 21.02.2024. Способ оплаты не работает.
> - `alfabank` — Сервис Альфа-Клик устарел. Используйте другие способы оплаты.

### Пример использования

```ts
import { CurrencyEnum, PaymentMethodsEnum, ConfirmationTypesEnum } from 'yookassa-api-sdk';

const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: CurrencyEnum.RUB },
    payment_method_data: { type: PaymentMethodsEnum.sbp },
    confirmation: { type: ConfirmationTypesEnum.redirect, return_url: 'https://example.com' },
});
```

## Справочники

SDK экспортирует вспомогательные справочники для работы с кодами и статусами YooKassa:

```ts
import {
    paymentCancelReasonMap,
    refundCancelReasonMap,
    paymentSubjectMap,
    AgentTypeMap,
    measureTypeMap,
    SettlementTypeMap,
} from 'yookassa-api-sdk';
```

| Справочник | Описание |
| --- | --- |
| `paymentCancelReasonMap` | [Причины отмены платежа](https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments#cancellation-details-reason) |
| `refundCancelReasonMap` | [Причины отмены возврата](https://yookassa.ru/developers/payment-acceptance/after-the-payment/refunds#declined-refunds-cancellation-details-reason) |
| `paymentSubjectMap` | [Признак предмета расчёта](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#payment-subject) (54-ФЗ) |
| `AgentTypeMap` | [Тип посредника](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#agent-type) (54-ФЗ) |
| `measureTypeMap` | Мера количества предмета расчёта |
| `SettlementTypeMap` | Тип расчёта для чеков |

### Пример использования

```ts
import { paymentCancelReasonMap } from 'yookassa-api-sdk';

const payment = await sdk.payments.load('payment_id');

if (payment.status === 'canceled' && payment.cancellation_details) {
    const reason = payment.cancellation_details.reason;
    console.log(paymentCancelReasonMap[reason]); // Человекочитаемое описание
}
```

## Roadmap

- [ ] **Выплаты** (payouts) — выплаты на карты/кошельки
- [ ] **Сделки** (deals) — Безопасная сделка (эскроу для маркетплейсов)
- [ ] **Персональные данные** — данные получателей выплат
- [ ] **Самозанятые** — выплаты самозанятым
- [ ] **Банки СБП** — список банков для СБП

## Мейнтейнер

**WEBzaytsev** ([@WEBzaytsev](https://github.com/WEBzaytsev))

## Благодарности

Этот проект является форком [yookassa-api-sdk](https://github.com/awardix/yookassa-sdk) от **Aleksey Aleksyuk** ([@awardix](https://github.com/awardix)).

Оригинальный проект основан на [yookassa-sdk](https://github.com/googlesheets-ru/yookassa-sdk) от **Dmitriy** ([@Mityayka1](https://github.com/Mityayka1)). Спасибо за оригинальную реализацию!

## Лицензия

[MIT](LICENSE)
