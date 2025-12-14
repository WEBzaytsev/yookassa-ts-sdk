# Чеки

## Создание чека

```ts
const receipt = await sdk.receipts.create({
    type: 'payment',
    payment_id: 'payment_id',
    customer: { email: 'customer@example.com' },
    items: [
        {
            description: 'Товар',
            quantity: 1,
            amount: { value: '100.00', currency: 'RUB' },
            vat_code: 1,
        },
    ],
    send: true,
});
```

## Получение чека

```ts
const receipt = await sdk.receipts.load('receipt_id');
```

## Список чеков

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

## Справочник API

| Метод | Описание |
| --- | --- |
| `create(data, idempotenceKey?)` | Создать чек |
| `load(id)` | Получить чек по ID |
| `list(filter?)` | Список чеков |

