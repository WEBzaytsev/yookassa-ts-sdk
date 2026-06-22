# Payouts

Payouts are available when your YooKassa account has [payouts](https://yookassa.ru/developers/payouts/overview) enabled. Use the **gateway** `shop_id` and `secret_key` (not necessarily the same as for accepting payments).

## Create payout

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
    description: 'Payout contract 37',
});

// With idempotence key
const same = await sdk.payouts.create(payoutData, 'your-unique-key');
```

You can also use `payment_method_id` or `payout_token` instead of `payout_destination_data` when applicable — see the [API](https://yookassa.ru/developers/api#create_payout).

## Get payout

```ts
const payout = await sdk.payouts.load('payout_id');
```

## List payouts

```ts
const items = await sdk.payouts.list({
    created_at: { gte: '2024-01-01T00:00:00.000Z' },
    succeeded_at: { lte: '2024-12-31T23:59:59.999Z' },
    payout_destination: { type: 'sbp' },
    status: 'succeeded',
    limit: 50,
});
```

**Filters:**

| Filter | Description |
| --- | --- |
| `created_at` | Creation time (`gte`, `gt`, `lte`, `lt`) |
| `succeeded_at` | Successful payout time (`gte`, `gt`, `lte`, `lt`) |
| `payout_destination` | `{ type: 'bank_card' \| 'yoo_money' \| 'sbp' }` → query `payout_destination.type` |
| `status` | `pending`, `succeeded`, `canceled` |
| `limit` | Page size (1–100, default 10) |
| `cursor` | Pagination cursor |

List query parameters use dot notation (e.g. `created_at.gte`); the SDK serializes filters accordingly.

## Search payouts

`search` looks up payouts by `metadata` fields and/or `created_at` range. The `created_at` window is limited to the last **3 months**.

```ts
const items = await sdk.payouts.search({
    created_at: { gte: '2024-01-01T00:00:00.000Z' },
    metadata: { order_id: '37' },
});
```

**Filters:**

| Filter | Description |
| --- | --- |
| `created_at` | Creation time (`gte`, `gt`, `lte`, `lt`); max window — 3 months |
| `metadata` | Key/value pairs from payout metadata (e.g. `{ order_id: '37' }`) |
| `limit` | Page size (1–100, default 10) |
| `cursor` | Pagination cursor |

## API reference

| Method | Description |
| --- | --- |
| `create(data, idempotenceKey?)` | Create payout |
| `load(id)` | Get payout by ID |
| `list(filter?)` | List payouts |
| `search(filter?)` | Search payouts by metadata and created_at (3-month window) |

TypeScript types: `Payouts.IPayout`, `Payouts.CreatePayoutRequest`, `GetPayoutListFilter`, `GetPayoutSearchFilter`.
