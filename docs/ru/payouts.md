# Выплаты

Выплаты доступны при подключённом решении [«Выплаты»](https://yookassa.ru/developers/payouts/overview) в ЮKassa. Для API нужны **shop_id** и **secret_key шлюза** — они могут отличаться от учётных данных магазина приёма платежей.

## Создание выплаты

```ts
import { YooKassa } from '@webzaytsev/yookassa-ts-sdk';

const sdk = YooKassa({
    shop_id: process.env.YOOKASSA_PAYOUT_SHOP_ID!,
    secret_key: process.env.YOOKASSA_PAYOUT_SECRET_KEY!,
});

const payout = await sdk.payouts.create({
    amount: { value: '100.00', currency: 'RUB' },
    payout_destination_data: {
        type: 'yoo_money',
        account_number: '410011234567890',
    },
    description: 'Выплата по договору 37',
});

// С ключом идемпотентности
const same = await sdk.payouts.create(payoutData, 'your-unique-key');
```

Вместо `payout_destination_data` при необходимости передайте `payment_method_id` или `payout_token` — см. [API](https://yookassa.ru/developers/api#create_payout).

## Информация о выплате

```ts
const payout = await sdk.payouts.load('payout_id');
```

## Список выплат

```ts
const items = await sdk.payouts.list({
    created_at: { gte: '2024-01-01T00:00:00.000Z' },
    succeeded_at: { lte: '2024-12-31T23:59:59.999Z' },
    payout_destination: { type: 'sbp' },
    status: 'succeeded',
    limit: 50,
});
```

**Фильтры:**

| Фильтр | Описание |
| --- | --- |
| `created_at` | Время создания (`gte`, `gt`, `lte`, `lt`) |
| `succeeded_at` | Время успешного проведения (`gte`, `gt`, `lte`, `lt`) |
| `payout_destination` | `{ type: 'bank_card' \| 'yoo_money' \| 'sbp' }` → в query параметр `payout_destination.type` |
| `status` | `pending`, `succeeded`, `canceled` |
| `limit` | Размер страницы (1–100, по умолчанию 10) |
| `cursor` | Курсор пагинации |

Параметры списков передаются в точечной нотации (`created_at.gte` и т. п.); SDK сериализует объект фильтра в нужный вид.

## Поиск выплат

`search` ищет выплаты по полям `metadata` и/или диапазону `created_at`. Диапазон `created_at` ограничен последними **3 месяцами**.

```ts
const items = await sdk.payouts.search({
    created_at: { gte: '2024-01-01T00:00:00.000Z' },
    metadata: { order_id: '37' },
});
```

**Фильтры:**

| Фильтр | Описание |
| --- | --- |
| `created_at` | Время создания (`gte`, `gt`, `lte`, `lt`); максимальный диапазон — 3 месяца |
| `metadata` | Пары ключ/значение из метаданных выплаты (например, `{ order_id: '37' }`) |
| `limit` | Размер страницы (1–100, по умолчанию 10) |
| `cursor` | Курсор пагинации |

## Справочник методов

| Метод | Описание |
| --- | --- |
| `create(data, idempotenceKey?)` | Создать выплату |
| `load(id)` | Получить выплату по ID |
| `list(filter?)` | Список выплат |
| `search(filter?)` | Поиск выплат по metadata и created_at (окно 3 месяца) |

Типы TypeScript: `Payouts.IPayout`, `Payouts.CreatePayoutRequest`, `GetPayoutListFilter`, `GetPayoutSearchFilter`.
