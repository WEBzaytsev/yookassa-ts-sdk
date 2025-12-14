# YooKassa SDK

[![npm version](https://img.shields.io/npm/v/yookassa-ts-sdk.svg)](https://www.npmjs.com/package/yookassa-ts-sdk)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-compatible-f9f1e1.svg)](https://bun.sh/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[English README](README.md) | [Документация](docs/ru/)

Современный TypeScript SDK для интеграции с [API YooKassa](https://yookassa.ru/developers/api). Поддерживает платежи, возвраты, чеки, вебхуки и многое другое.

## Возможности

- 🚀 **Полная поддержка TypeScript** — типы для всех сущностей API
- 🔄 **Автоматические повторы** — экспоненциальная задержка при сетевых ошибках
- 🔑 **Идемпотентность** — автоматическая генерация `Idempotence-Key`
- 🌐 **Поддержка прокси** — настройка HTTP/HTTPS прокси
- ⚡ **Ограничение запросов** — встроенный rate limiting
- 🕐 **Таймауты** — настраиваемые таймауты запросов
- 📦 **Кэширование инстансов** — эффективное переиспользование соединений
- 🔧 **Мультирантайм** — работает с Node.js, Bun и другими средами

## Установка

```sh
npm install yookassa-ts-sdk
```

Или из GitHub Packages:

```sh
npm install @webzaytsev/yookassa-ts-sdk --registry=https://npm.pkg.github.com
```

## Быстрый старт

```ts
import { YooKassa } from 'yookassa-ts-sdk';

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
| [Чеки](docs/ru/receipts.md) | Создание и список чеков (54-ФЗ) |
| [Вебхуки](docs/ru/webhooks.md) | Управление вебхуками и входящие уведомления |
| [Обработка ошибок](docs/ru/error-handling.md) | Коды ошибок, повторы |
| [Типы](docs/ru/types.md) | TypeScript типы, enums, справочники |

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

### Вебхуки (требуется OAuth)

| Метод | Описание |
| --- | --- |
| `sdk.webhooks.create(data, idempotenceKey?)` | Создать вебхук |
| `sdk.webhooks.list()` | Список вебхуков |
| `sdk.webhooks.delete(id)` | Удалить вебхук |

### Магазин (требуется OAuth)

| Метод | Описание |
| --- | --- |
| `sdk.shop.info()` | Получить информацию о магазине |

## Обработка ошибок

```ts
import { YooKassaErr } from 'yookassa-ts-sdk';

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

- [ ] **Выплаты** — выплаты на карты/кошельки
- [ ] **Сделки** — Безопасная сделка (эскроу для маркетплейсов)
- [ ] **Персональные данные** — данные получателя выплат
- [ ] **Самозанятые** — выплаты самозанятым
- [ ] **Банки СБП** — список банков для СБП

## Мейнтейнер

**WEBzaytsev** ([@WEBzaytsev](https://github.com/WEBzaytsev))

## Благодарности

Проект является форком [yookassa-sdk](https://github.com/awardix/yookassa-sdk) от **Aleksey Aleksyuk** ([@awardix](https://github.com/awardix)).

Изначальный проект основан на [yookassa-sdk](https://github.com/googlesheets-ru/yookassa-sdk) от **Dmitriy** ([@Mityayka1](https://github.com/Mityayka1)). Спасибо за исходную реализацию!

## Лицензия

[MIT](LICENSE)
