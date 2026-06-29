# Безопасная сделка

[Безопасная сделка](https://yookassa.ru/developers/solutions-for-platforms/safe-deal/basics) позволяет маркетплейсу удерживать платежи покупателей и выплачивать продавцам после закрытия сделки. SDK управляет сделками через `sdk.deals.*`; платежи, возвраты и выплаты привязываются к сделке через `deal: { id }`.

## Создание сделки

```ts
const deal = await sdk.deals.create({
    type: 'safe_deal',
    fee_moment: 'payment_succeeded', // или 'deal_closed'
    description: 'Заказ #42',
    metadata: { order_id: '42' },
});

// С ключом идемпотентности
const same = await sdk.deals.create(dealData, 'your-unique-key');
```

**`fee_moment`** — момент списания комиссии маркетплейса:

| Значение | Описание |
| --- | --- |
| `payment_succeeded` | Комиссия списывается при успешной оплате |
| `deal_closed` | Комиссия списывается при закрытии сделки |

## Информация о сделке

```ts
const deal = await sdk.deals.load('deal_id');
```

## Список сделок

```ts
const deals = await sdk.deals.list({
    created_at: { gte: '2024-01-01T00:00:00.000Z' },
    status: 'opened',
    full_text_search: 'Заказ #42',
    limit: 50,
});
```

**Фильтры:**

| Фильтр | Описание |
| --- | --- |
| `created_at` | Время создания (`gte`, `gt`, `lte`, `lt`) |
| `expires_at` | Время истечения (`gte`, `gt`, `lte`, `lt`) |
| `status` | `opened` или `closed` |
| `full_text_search` | Полнотекстовый поиск по полям сделки |
| `limit` | Размер страницы (1–100, по умолчанию 10) |
| `cursor` | Курсор пагинации |

Параметры списков передаются в точечной нотации (`created_at.gte` и т. п.); SDK сериализует объект фильтра в нужный вид.

## Использование сделки в платежах, возвратах и выплатах

После создания сделки передайте её `id` при создании связанных операций.

### Платёж

```ts
const payment = await sdk.payments.create({
    amount: { value: '1000.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    deal: {
        id: deal.id,
        settlements: [
            {
                type: 'payout',
                amount: { value: '900.00', currency: 'RUB' },
            },
        ],
    },
});
```

### Возврат

```ts
const refund = await sdk.refunds.create({
    payment_id: payment.id,
    amount: { value: '500.00', currency: 'RUB' },
    deal: {
        id: deal.id,
        refund_settlements: [
            {
                type: 'payout',
                amount: { value: '450.00', currency: 'RUB' },
            },
        ],
    },
});
```

### Выплата

```ts
const payout = await sdk.payouts.create({
    amount: { value: '900.00', currency: 'RUB' },
    payout_destination_data: {
        type: 'yoo_money',
        account_number: '410011234567890',
    },
    deal: { id: deal.id },
});
```

## Вебхук

При закрытии сделки ЮKassa отправляет событие `deal.closed`. Обработку входящих уведомлений см. в [Вебхуки](webhooks.md).

## Справочник методов

| Метод | Описание |
| --- | --- |
| `create(data, idempotenceKey?)` | Создать сделку |
| `load(id)` | Получить сделку по ID |
| `list(filter?)` | Список сделок |

Типы TypeScript: [`SafeDeal`](../api/interfaces/SafeDeal.md), [`SafeDealRequest`](../api/interfaces/SafeDealRequest.md), [`GetDealListFilter`](../api/interfaces/GetDealListFilter.md).
