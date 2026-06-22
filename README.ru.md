# YooKassa SDK

[![npm version](https://img.shields.io/npm/v/@webzaytsev/yookassa-ts-sdk.svg)](https://www.npmjs.com/package/@webzaytsev/yookassa-ts-sdk)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue.svg)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-compatible-f9f1e1.svg)](https://bun.sh/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[English README](README.md) | [Документация](docs/ru/)

Современный TypeScript SDK для интеграции с [API YooKassa](https://yookassa.ru/developers/api). Поддерживает платежи, возвраты, чеки, вебхуки и многое другое.

## Возможности

- 🚀 **Полная поддержка TypeScript** — типы по путям OpenAPI ЮKassa, которые покрывает SDK
- 🔄 **Автоматические повторы** — экспоненциальная задержка при сетевых ошибках
- 🔑 **Идемпотентность** — автоматическая генерация `Idempotence-Key`
- 🌐 **Поддержка прокси** — настройка HTTP/HTTPS прокси
- ⚡ **Ограничение запросов** — встроенный rate limiting
- 🕐 **Таймауты** — настраиваемые таймауты запросов
- 📦 **Кэширование инстансов** — эффективное переиспользование соединений
- 🔧 **Мультирантайм** — работает с Node.js, Bun и другими средами

## Установка

```sh
npm install @webzaytsev/yookassa-ts-sdk
```

### Разработка этого репозитория

```sh
corepack enable
pnpm install
pnpm run check
pnpm run build
```

## Быстрый старт

```ts
import { YooKassa } from '@webzaytsev/yookassa-ts-sdk';

const sdk = YooKassa({
    shop_id: 'ваш_shop_id',
    secret_key: 'ваш_secret_key',
});

// Создание платежа
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    description: 'Заказ #1',
});

console.log(payment.confirmation.confirmation_url);
```

## Документация

| Раздел | Описание |
| --- | --- |
| [Начало работы](docs/ru/getting-started.md) | Конфигурация, кэширование инстансов |
| [Платежи](docs/ru/payments.md) | Создание, подтверждение, отмена, список платежей |
| [Возвраты](docs/ru/refunds.md) | Создание и список возвратов |
| [Выплаты](docs/ru/payouts.md) | Выплаты: создание, загрузка, список (учётные данные шлюза) |
| [Вебхуки](docs/ru/webhooks.md) | Управление вебхуками и входящие уведомления |
| [Обработка ошибок](docs/ru/error-handling.md) | Коды ошибок, повторы |
| [API Reference](docs/api/) | TypeScript типы, интерфейсы, enums |

## Справочник API

### Платежи

| Метод | Описание |
| --- | --- |
| `sdk.payments.create(data, idempotenceKey?)` | Создать платёж |
| `sdk.payments.load(id)` | Получить платёж по ID |
| `sdk.payments.list(filter?)` | Список платежей |
| `sdk.payments.capture(id, payload?, key?)` | Подтвердить платёж |
| `sdk.payments.cancel(id, idempotenceKey?)` | Отменить платёж |

### Возвраты

| Метод | Описание |
| --- | --- |
| `sdk.refunds.create(data, idempotenceKey?)` | Создать возврат |
| `sdk.refunds.load(id)` | Получить возврат по ID |
| `sdk.refunds.list(filter?)` | Список возвратов |

### Чеки

| Метод | Описание |
| --- | --- |
| `sdk.receipts.create(data, idempotenceKey?)` | Создать чек |
| `sdk.receipts.load(id)` | Получить чек по ID |
| `sdk.receipts.list(filter?)` | Список чеков |

### Выплаты

Используйте **shop_id** и **secret_key шлюза выплат** из личного кабинета ([обзор выплат](https://yookassa.ru/developers/payouts/overview)).

| Метод | Описание |
| --- | --- |
| `sdk.payouts.create(data, idempotenceKey?)` | Создать выплату |
| `sdk.payouts.load(id)` | Информация о выплате по ID |
| `sdk.payouts.list(filter?)` | Список выплат (в т.ч. `succeeded_at`, `payout_destination.type`) |
| `sdk.payouts.search(filter?)` | Поиск выплат по `metadata` и `created_at` (до 3 месяцев) |

### Банки СБП

| Метод | Описание |
| --- | --- |
| `sdk.sbpBanks.list()` | Список участников СБП |

### Сохранённые способы оплаты

| Метод | Описание |
| --- | --- |
| `sdk.paymentMethods.create(data, idempotenceKey?)` | Создать сохранённый способ оплаты (привязка карты и т.п.) |
| `sdk.paymentMethods.load(id)` | Информация о способе оплаты по ID |

### Персональные данные (выплаты)

| Метод | Описание |
| --- | --- |
| `sdk.personalData.create(data, idempotenceKey?)` | Создать объект персональных данных |
| `sdk.personalData.load(id)` | Информация о персональных данных по ID |

### Сделки (безопасная сделка)

| Метод | Описание |
| --- | --- |
| `sdk.deals.create(data, idempotenceKey?)` | Создать сделку |
| `sdk.deals.list(filter?)` | Список сделок |
| `sdk.deals.load(id)` | Информация о сделке по ID |

### Счета (инвойсы)

| Метод | Описание |
| --- | --- |
| `sdk.invoices.create(data, idempotenceKey?)` | Создать счёт |
| `sdk.invoices.load(id)` | Информация о счёте по ID |

### Вебхуки

Методы управления (`create`, `list`, `delete`) требуют OAuth-токен. Методы `verify*` работают со стандартным секретным ключом.

| Метод | Описание |
| --- | --- |
| `sdk.webhooks.create(data, idempotenceKey?)` | Создать вебхук (OAuth) |
| `sdk.webhooks.list()` | Список вебхуков (OAuth) |
| `sdk.webhooks.delete(id)` | Удалить вебхук (OAuth) |
| `sdk.webhooks.verify(body)` | Разобрать и загрузить уведомление (платёж или возврат) |
| `sdk.webhooks.verifyPayment(body)` | Разобрать и загрузить уведомление о платеже |
| `sdk.webhooks.verifyRefund(body)` | Разобрать и загрузить уведомление о возврате |

### Магазин (требуется OAuth)

| Метод | Описание |
| --- | --- |
| `sdk.shop.info()` | Получить информацию о магазине |

## Обработка ошибок

```ts
import { YooKassaErr } from '@webzaytsev/yookassa-ts-sdk';

try {
    const payment = await sdk.payments.create({ ... });
} catch (error) {
    if (error instanceof YooKassaErr) {
        console.error(error.name);    // Код ошибки
        console.error(error.message); // Описание ошибки
        console.error(error.id);      // ID запроса
    }
}
```

## Roadmap

- [x] **Выплаты** — создание, загрузка, список, поиск
- [x] **Сделки, персональные данные, банки СБП, счета, сохранённые способы оплаты** — см. таблицы API выше
- [ ] **Самозанятые** — отдельные сценарии поверх общих типов выплат

## Мейнтейнер

**WEBzaytsev** ([@WEBzaytsev](https://github.com/WEBzaytsev))

## Благодарности

Проект является форком [yookassa-sdk](https://github.com/awardix/yookassa-sdk) от **Aleksey Aleksyuk** ([@awardix](https://github.com/awardix)).

Изначальный проект основан на [yookassa-sdk](https://github.com/googlesheets-ru/yookassa-sdk) от **Dmitriy** ([@Mityayka1](https://github.com/Mityayka1)). Спасибо за исходную реализацию!

## Лицензия

[MIT](LICENSE)
