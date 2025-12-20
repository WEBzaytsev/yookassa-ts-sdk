# Платежи

## Создание платежа

```ts
import { CurrencyEnum } from '@webzaytsev/yookassa-ts-sdk';

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
    description: 'Заказ #123',
    metadata: {
        order_id: '123',
    },
});

// С пользовательским ключом идемпотентности
const payment = await sdk.payments.create(paymentData, 'your-unique-key');
```

## Получение платежа

```ts
const payment = await sdk.payments.load('payment_id');
console.log(payment.status); // pending, waiting_for_capture, succeeded, canceled
```

## Список платежей

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
| `payment_method` | Фильтр по коду способа оплаты |
| `limit` | Количество результатов (1-100, по умолчанию: 10) |

## Подтверждение платежа

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

## Отмена платежа

```ts
const payment = await sdk.payments.cancel('payment_id');
```

---

## Двухстадийные платежи

Для дорогих заказов используйте [двухстадийные платежи](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#two-stage) — сначала холдирование, затем подтверждение или отмена.

```ts
// Стадия 1: Создание платежа с capture: false (холдирование)
const payment = await sdk.payments.create({
    amount: { value: '5000.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    capture: false, // Не списывать сразу
    description: 'Заказ #456',
});

// Стадия 2a: Подтверждение платежа (после проверки наличия товара и т.д.)
const captured = await sdk.payments.capture(payment.id);

// Стадия 2b: Или отмена при необходимости
const canceled = await sdk.payments.cancel(payment.id);
```

---

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

// Перенаправить пользователя на страницу оплаты
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

---

## Платёжные токены

Для интеграции с [Checkout.js](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/checkout-js/basics) или [Mobile SDK](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/mobile-sdks/basics):

```ts
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    payment_token: 'token_from_checkout_js_or_mobile_sdk',
    description: 'Заказ #789',
});
```

---

## Автоплатежи (рекуррентные платежи)

SDK поддерживает [автоплатежи](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments) — автоматические списания без подтверждения пользователем.

### Поддерживаемые способы оплаты

| Способ оплаты | Безусловное сохранение | Условное сохранение | Примечание |
|---------------|:----------------------:|:-------------------:|------------|
| Банковская карта | ✅ | ✅ | |
| ЮMoney (кошелёк) | ✅ | ✅ | Кроме карт, привязанных к кошельку |
| SberPay | ✅ | ❌ | |
| T-Pay | ✅ | ❌ | |
| СБП | ✅ | ❌ | [Не все банки поддерживают](https://sbp.nspk.ru/participants/) |

> **Безусловное сохранение** (`save_payment_method: true`) — пользователь не может отказаться от сохранения.
>
> **Условное сохранение** — пользователь сам решает, сохранять ли способ оплаты на форме ЮKassa.

### Сохранение способа оплаты

```ts
// Первый платёж — сохраняем способ оплаты для будущих списаний
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    save_payment_method: true, // Запрос на сохранение способа оплаты
    description: 'Оплата подписки',
});

// После успешного платежа будет доступен payment_method.id
console.log(payment.payment_method.id); // Используйте для будущих списаний
```

### Списание по сохранённому методу

```ts
// Последующие автосписания (без подтверждения пользователем)
const recurringPayment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    payment_method_id: 'saved_payment_method_id', // ID из первого платежа
    capture: true,
    description: 'Ежемесячная подписка',
});
```

### Проверка сохранения метода

```ts
const payment = await sdk.payments.load('payment_id');

if (payment.payment_method?.saved) {
    // Метод сохранён, можно использовать для автоплатежей
    console.log('ID сохранённого метода:', payment.payment_method.id);
}
```

---

## Авиабилеты

Для продажи авиабилетов банковскими картами передайте [данные авиабилета](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/airline-tickets):

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

---

## Данные получателя

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

---

## Сплитование платежей

Для [маркетплейсов](https://yookassa.ru/developers/solutions-for-platforms/split-payments/basics) — распределение платежа между продавцами:

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

---

## Метаданные

Прикрепляйте пользовательские данные к платежам (до 16 ключей, возвращаются в ответах и вебхуках):

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

