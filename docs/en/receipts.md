# Receipts

## Create Receipt

```ts
const receipt = await sdk.receipts.create({
    type: 'payment',
    payment_id: 'payment_id',
    customer: { email: 'customer@example.com' },
    items: [
        {
            description: 'Product',
            quantity: 1,
            amount: { value: '100.00', currency: 'RUB' },
            vat_code: 1,
        },
    ],
    send: true,
});
```

## Get Receipt

```ts
const receipt = await sdk.receipts.load('receipt_id');
```

## List Receipts

```ts
const receipts = await sdk.receipts.list({
    payment_id: 'payment_id',
});
```

**Available filters:**

| Filter | Description |
| --- | --- |
| `payment_id` | Filter by payment ID |
| `refund_id` | Filter by refund ID |

## API Reference

| Method                         | Description                |
| ------------------------------ | -------------------------- |
| `create(data, idempotenceKey?)` | Create receipt            |
| `load(id)`                      | Get receipt by ID         |
| `list(filter?)`                 | List receipts             |

