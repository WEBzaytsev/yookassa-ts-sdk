# Возвраты

## Создание возврата

```ts
const refund = await sdk.refunds.create({
    payment_id: 'payment_id',
    amount: { value: '50.00', currency: 'RUB' },
});

// С ключом идемпотентности
const refund = await sdk.refunds.create(refundData, 'unique-key');
```

## Получение возврата

```ts
const refund = await sdk.refunds.load('refund_id');
```

## Список возвратов

```ts
const refunds = await sdk.refunds.list({
    payment_id: 'payment_id',
    limit: 10,
});
```

**Доступные фильтры:**

| Фильтр | Описание |
| --- | --- |
| `created_at` | Время создания (`gte`, `gt`, `lte`, `lt`) |
| `payment_id` | ID платежа |
| `status` | Статус (`pending`, `succeeded`, `canceled`) |
| `limit` | Число результатов (1–100, по умолчанию: 10) |

## Справочник API

| Метод | Описание |
| --- | --- |
| `create(data, idempotenceKey?)` | Создать возврат |
| `load(id)` | Получить возврат по ID |
| `list(filter?)` | Список возвратов |
