# YooKassa SDK

[![npm version](https://img.shields.io/npm/v/yookassa-ts-sdk.svg)](https://www.npmjs.com/package/yookassa-ts-sdk)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-compatible-f9f1e1.svg)](https://bun.sh/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[README на русском](README.ru.md) | [Documentation](docs/en/)

Modern TypeScript SDK for [YooKassa API](https://yookassa.ru/developers/api) integration. Supports payments, refunds, receipts, webhooks and more.

## Features

- 🚀 **Full TypeScript support** — complete type definitions for all API entities
- 🔄 **Automatic retries** — exponential backoff on network errors
- 🔑 **Idempotency** — automatic `Idempotence-Key` generation
- 🌐 **Proxy support** — HTTP/HTTPS proxy configuration
- ⚡ **Rate limiting** — built-in request throttling
- 🕐 **Timeouts** — configurable request timeouts
- 📦 **Instance caching** — efficient connection reuse
- 🔧 **Multi-runtime** — works with Node.js, Bun, and other runtimes

## Installation

```sh
npm install yookassa-ts-sdk
```

## Quick Start

```ts
import { YooKassa } from 'yookassa-ts-sdk';

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
| [Getting Started](docs/en/getting-started.md) | Configuration, instance caching |
| [Payments](docs/en/payments.md) | Create, capture, cancel, list payments |
| [Refunds](docs/en/refunds.md) | Create and list refunds |
| [Receipts](docs/en/receipts.md) | Create and list receipts (54-FZ) |
| [Webhooks](docs/en/webhooks.md) | Webhook management & incoming notifications |
| [Error Handling](docs/en/error-handling.md) | Error codes, retries |
| [Types](docs/en/types.md) | TypeScript types, enums, dictionaries |

## API Reference

### Payments

| Method | Description |
| --- | --- |
| `sdk.payments.create(data, idempotenceKey?)` | Create payment |
| `sdk.payments.load(id)` | Get payment by ID |
| `sdk.payments.list(filter?)` | List payments |
| `sdk.payments.capture(id, payload?, key?)` | Capture payment |
| `sdk.payments.cancel(id, idempotenceKey?)` | Cancel payment |

### Refunds

| Method | Description |
| --- | --- |
| `sdk.refunds.create(data, idempotenceKey?)` | Create refund |
| `sdk.refunds.load(id)` | Get refund by ID |
| `sdk.refunds.list(filter?)` | List refunds |

### Receipts

| Method | Description |
| --- | --- |
| `sdk.receipts.create(data, idempotenceKey?)` | Create receipt |
| `sdk.receipts.load(id)` | Get receipt by ID |
| `sdk.receipts.list(filter?)` | List receipts |

### Webhooks (OAuth required)

| Method | Description |
| --- | --- |
| `sdk.webhooks.create(data, idempotenceKey?)` | Create webhook |
| `sdk.webhooks.list()` | List webhooks |
| `sdk.webhooks.delete(id)` | Delete webhook |

### Shop (OAuth required)

| Method | Description |
| --- | --- |
| `sdk.shop.info()` | Get shop information |

## Error Handling

```ts
import { YooKassaErr } from 'yookassa-ts-sdk';

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

- [ ] **Payouts** — disbursements to cards/wallets
- [ ] **Deals** — Safe Deal (escrow for marketplaces)
- [ ] **Personal Data** — payout recipient data
- [ ] **Self-Employed** — payouts to self-employed
- [ ] **SBP Banks** — list of banks for SBP

## Maintainer

**WEBzaytsev** ([@WEBzaytsev](https://github.com/WEBzaytsev))

## Acknowledgements

This project is a fork of [yookassa-sdk](https://github.com/awardix/yookassa-sdk) by **Aleksey Aleksyuk** ([@awardix](https://github.com/awardix)).

Original project based on [yookassa-sdk](https://github.com/googlesheets-ru/yookassa-sdk) by **Dmitriy** ([@Mityayka1](https://github.com/Mityayka1)). Thanks for the original implementation!

## License

[MIT](LICENSE)
