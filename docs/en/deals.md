# Safe Deal

[Safe Deal](https://yookassa.ru/developers/solutions-for-platforms/safe-deal/basics) lets a marketplace hold buyer payments and pay out sellers after the deal closes. The SDK exposes deal management through `sdk.deals.*`. Link payments, refunds, and payouts to a deal with `deal: { id }`.

## Create deal

```ts
const deal = await sdk.deals.create({
    type: 'safe_deal',
    fee_moment: 'payment_succeeded', // or 'deal_closed'
    description: 'Order #42',
    metadata: { order_id: '42' },
});

// With idempotence key
const same = await sdk.deals.create(dealData, 'your-unique-key');
```

**`fee_moment`** — when the marketplace commission is charged:

| Value | Description |
| --- | --- |
| `payment_succeeded` | Commission is charged when the payment succeeds |
| `deal_closed` | Commission is charged when the deal closes |

## Get deal

```ts
const deal = await sdk.deals.load('deal_id');
```

## List deals

```ts
const deals = await sdk.deals.list({
    created_at: { gte: '2024-01-01T00:00:00.000Z' },
    status: 'opened',
    full_text_search: 'Order #42',
    limit: 50,
});
```

**Filters:**

| Filter | Description |
| --- | --- |
| `created_at` | Creation time (`gte`, `gt`, `lte`, `lt`) |
| `expires_at` | Expiration time (`gte`, `gt`, `lte`, `lt`) |
| `status` | `opened` or `closed` |
| `full_text_search` | Full-text search across deal fields |
| `limit` | Page size (1–100, default 10) |
| `cursor` | Pagination cursor |

List query parameters use dot notation (e.g. `created_at.gte`). The SDK serializes filters accordingly.

## Using a deal in payments, refunds, and payouts

After creating a deal, pass its `id` when creating related operations.

### Payment

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

### Refund

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

### Payout

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

## Webhook

When a deal closes, YooKassa sends a `deal.closed` event. See [Webhooks](webhooks.md) for handling incoming notifications.

## API reference

| Method | Description |
| --- | --- |
| `create(data, idempotenceKey?)` | Create a deal |
| `load(id)` | Get a deal by ID |
| `list(filter?)` | List deals |

TypeScript types: [`SafeDeal`](../api/interfaces/SafeDeal.md), [`SafeDealRequest`](../api/interfaces/SafeDealRequest.md), [`GetDealListFilter`](../api/interfaces/GetDealListFilter.md).
