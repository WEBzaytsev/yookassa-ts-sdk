# YooKassa TypeScript SDK

Modern TypeScript SDK for [YooKassa Payment API](https://yookassa.ru/developers/api).

## Installation

```bash
npm install @webzaytsev/yookassa-ts-sdk
```

## Quick Start

```typescript
import { YooKassa } from '@webzaytsev/yookassa-ts-sdk';

const sdk = YooKassa({
  shop_id: 'your_shop_id',
  secret_key: 'your_secret_key',
});

const payment = await sdk.payments.create({
  amount: { value: '100.00', currency: 'RUB' },
  confirmation: { type: 'redirect', return_url: 'https://example.com' },
});
```

## Documentation

### Guides
- [Getting Started](en/getting-started.md) - Configuration and initialization
- [Payments](en/payments.md) - Create, capture, cancel payments
- [Refunds](en/refunds.md) - Create and manage refunds
- [Receipts](en/receipts.md) - Fiscalization (54-FZ compliance)
- [Webhooks](en/webhooks.md) - Webhook management and validation
- [Error Handling](en/error-handling.md) - Error codes and retry logic
- [Types](en/types.md) - TypeScript types and enums

### API Reference
- [Full API Documentation](api/) - Auto-generated from source code

### Examples
- [Examples Directory](../examples/) - Working code examples

## Features

- Full TypeScript support with detailed type definitions
- Automatic retries with exponential backoff
- Built-in idempotency key generation
- Proxy support (HTTP/HTTPS)
- Rate limiting
- Webhook signature validation
- Instance caching for multi-store support

## Links

- [npm package](https://npmjs.com/package/@webzaytsev/yookassa-ts-sdk)
- [GitHub Repository](https://github.com/WEBzaytsev/yookassa-ts-sdk)
- [YooKassa API Documentation](https://yookassa.ru/developers/api)
