# YooKassa SDK

[![npm version](https://img.shields.io/npm/v/@webzaytsev/yookassa-ts-sdk.svg)](https://www.npmjs.com/package/@webzaytsev/yookassa-ts-sdk)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue.svg)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-compatible-f9f1e1.svg)](https://bun.sh/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[README на русском](README.ru.md) | [Documentation](docs/en/)

A modern TypeScript SDK for integrating with the [YooKassa API](https://yookassa.ru/developers/api). It covers payments, refunds, receipts, webhooks, and more.

## Features

- 🚀 **Full TypeScript support** — types aligned with the YooKassa OpenAPI paths covered by this SDK
- 🔄 **Automatic retries** — exponential backoff on network failures
- 🔑 **Idempotency** — automatic `Idempotence-Key` generation
- 🌐 **Proxy support** — HTTP/HTTPS proxy configuration
- ⚡ **Rate limiting** — built-in request throttling
- 🕐 **Timeouts** — configurable request timeouts
- 📦 **Instance caching** — efficient connection reuse
- 🔧 **Multi-runtime** — runs on Node.js, Bun, and other runtimes

## Installation

```sh
npm install @webzaytsev/yookassa-ts-sdk
```

### Developing this repository

```sh
corepack enable
pnpm install
pnpm run check
pnpm run build
```

```ts
import { YooKassa } from '@webzaytsev/yookassa-ts-sdk';

const sdk = YooKassa({
    shop_id: 'your_shop_id',
    secret_key: 'your_secret_key',
});

// Create a payment
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    description: 'Order #1',
});

console.log(payment.confirmation.confirmation_url);
```

## Documentation

| Section | Description |
| --- | --- |
| [Getting Started](docs/en/getting-started.md) | Configuration and instance caching |
| [Payments](docs/en/payments.md) | Create, capture, cancel, and list payments |
| [Refunds](docs/en/refunds.md) | Create and list refunds |
| [Payouts](docs/en/payouts.md) | Create, load, and list payouts (gateway credentials) |
| [Deals](docs/en/deals.md) | Safe Deal: create, load, and list |
| [Webhooks](docs/en/webhooks.md) | Webhook management and incoming notifications |
| [Error Handling](docs/en/error-handling.md) | Error codes and retries |
| [API Reference](docs/api/) | TypeScript types, interfaces, and enums |

## API Reference

### Payments

| Method | Description |
| --- | --- |
| `sdk.payments.create(data, idempotenceKey?)` | Create a payment |
| `sdk.payments.load(id)` | Get a payment by ID |
| `sdk.payments.list(filter?)` | List payments |
| `sdk.payments.capture(id, payload?, key?)` | Capture a payment |
| `sdk.payments.cancel(id, idempotenceKey?)` | Cancel a payment |

### Refunds

| Method | Description |
| --- | --- |
| `sdk.refunds.create(data, idempotenceKey?)` | Create a refund |
| `sdk.refunds.load(id)` | Get a refund by ID |
| `sdk.refunds.list(filter?)` | List refunds |

### Receipts

| Method | Description |
| --- | --- |
| `sdk.receipts.create(data, idempotenceKey?)` | Create a receipt |
| `sdk.receipts.load(id)` | Get a receipt by ID |
| `sdk.receipts.list(filter?)` | List receipts |

### Payouts

Use the **payout gateway** `shop_id` and `secret_key` from your YooKassa dashboard ([payouts](https://yookassa.ru/developers/payouts/overview)).

| Method | Description |
| --- | --- |
| `sdk.payouts.create(data, idempotenceKey?)` | Create a payout |
| `sdk.payouts.load(id)` | Get a payout by ID |
| `sdk.payouts.list(filter?)` | List payouts (supports `succeeded_at`, `payout_destination.type`, and more) |
| `sdk.payouts.search(filter?)` | Search payouts by `metadata` and `created_at` (last 3 months) |

### SBP banks

| Method | Description |
| --- | --- |
| `sdk.sbpBanks.list()` | List FPS (SBP) participant banks |

### Saved payment methods

| Method | Description |
| --- | --- |
| `sdk.paymentMethods.create(data, idempotenceKey?)` | Create a saved payment method (e.g. bank card binding) |
| `sdk.paymentMethods.load(id)` | Get a saved payment method by ID |

### Personal data (payouts)

| Method | Description |
| --- | --- |
| `sdk.personalData.create(data, idempotenceKey?)` | Create a personal data object |
| `sdk.personalData.load(id)` | Get personal data by ID |

### Deals (Safe Deal)

| Method | Description |
| --- | --- |
| `sdk.deals.create(data, idempotenceKey?)` | Create a deal |
| `sdk.deals.list(filter?)` | List deals |
| `sdk.deals.load(id)` | Get a deal by ID |

### Invoices

| Method | Description |
| --- | --- |
| `sdk.invoices.create(data, idempotenceKey?)` | Create an invoice |
| `sdk.invoices.load(id)` | Get an invoice by ID |

### Webhooks

CRUD methods (`create`, `list`, `delete`) require an OAuth token. `verify*` methods work with the standard API key.

| Method | Description |
| --- | --- |
| `sdk.webhooks.create(data, idempotenceKey?)` | Create a webhook (OAuth) |
| `sdk.webhooks.list()` | List webhooks (OAuth) |
| `sdk.webhooks.delete(id)` | Delete a webhook (OAuth) |
| `sdk.webhooks.verify(body)` | Parse and re-fetch a notification (payment or refund) |
| `sdk.webhooks.verifyPayment(body)` | Parse and re-fetch a payment notification |
| `sdk.webhooks.verifyRefund(body)` | Parse and re-fetch a refund notification |

### Shop (OAuth required)

| Method | Description |
| --- | --- |
| `sdk.shop.info()` | Get shop information |

## Error Handling

```ts
import { YooKassaErr } from '@webzaytsev/yookassa-ts-sdk';

try {
    const payment = await sdk.payments.create({ ... });
} catch (error) {
    if (error instanceof YooKassaErr) {
        console.error(error.name);    // Error code
        console.error(error.message); // Error description
        console.error(error.id);      // Request ID
    }
}
```

## Roadmap

- [x] **Payouts** — create, load, list, search
- [x] **Deals, personal data, SBP banks, invoices, saved payment methods** — see API tables above
- [ ] **Self-Employed** — dedicated scenarios beyond generic payout types

## Maintainer

**WEBzaytsev** ([@WEBzaytsev](https://github.com/WEBzaytsev))

## Acknowledgements

This project is a fork of [yookassa-sdk](https://github.com/awardix/yookassa-sdk) by **Aleksey Aleksyuk** ([@awardix](https://github.com/awardix)).

The original project was based on [yookassa-sdk](https://github.com/googlesheets-ru/yookassa-sdk) by **Dmitriy** ([@Mityayka1](https://github.com/Mityayka1)). Thanks for the original implementation!

## License

[MIT](LICENSE)
