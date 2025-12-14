# Refunds

## Create Refund

```ts
const refund = await sdk.refunds.create({
    payment_id: 'payment_id',
    amount: { value: '50.00', currency: 'RUB' },
});

// With idempotence key
const refund = await sdk.refunds.create(refundData, 'unique-key');
```

## Get Refund

```ts
const refund = await sdk.refunds.load('refund_id');
```

## List Refunds

```ts
const refunds = await sdk.refunds.list({
    payment_id: 'payment_id',
    limit: 10,
});
```

**Available filters:**

| Filter | Description |
| --- | --- |
| `created_at` | Filter by creation time (`gte`, `gt`, `lte`, `lt`) |
| `payment_id` | Filter by payment ID |
| `status` | Filter by status (`pending`, `succeeded`, `canceled`) |
| `limit` | Number of results (1-100, default: 10) |

## API Reference

| Method                         | Description                |
| ------------------------------ | -------------------------- |
| `create(data, idempotenceKey?)` | Create refund             |
| `load(id)`                      | Get refund by ID          |
| `list(filter?)`                 | List refunds              |

