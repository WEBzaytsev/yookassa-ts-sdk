# YooKassa SDK

[![npm version](https://img.shields.io/npm/v/yookassa-api-sdk.svg)](https://www.npmjs.com/package/yookassa-api-sdk)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-compatible-f9f1e1.svg)](https://bun.sh/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[README на русском](README.ru.md)

Modern TypeScript SDK for [YooKassa API](https://yookassa.ru/developers/api) integration. Supports payments, refunds, receipts, webhooks and more.

## Features

- 🚀 **Full TypeScript support** — complete type definitions for all API entities
- 🔄 **Automatic retries** — exponential backoff on network errors
- 🔑 **Idempotency** — automatic `Idempotence-Key` generation with option to override
- 🌐 **Proxy support** — HTTP/HTTPS proxy configuration
- ⚡ **Rate limiting** — built-in request throttling
- 🕐 **Timeouts** — configurable request timeouts
- 📦 **Instance caching** — efficient connection reuse
- 🔧 **Multi-runtime** — works with Node.js, Bun, and other runtimes

## Installation

```sh
# npm
npm install yookassa-api-sdk

# yarn
yarn add yookassa-api-sdk

# bun
bun add yookassa-api-sdk
```

## Quick Start

```ts
import { YooKassa } from 'yookassa-api-sdk';

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

## Configuration

```ts
interface ConnectorOpts {
    /** Shop ID (required) */
    shop_id: string;

    /** Secret key (required) */
    secret_key: string;

    /** OAuth token for partner API (webhooks, shop info) */
    token?: string;

    /** Debug mode — logs requests and responses */
    debug?: boolean;

    /** Request timeout in ms (default: 5000) */
    timeout?: number;

    /** Number of retry attempts on errors (default: 5) */
    retries?: number;

    /** Max requests per second (default: 5) */
    maxRPS?: number;

    /** Proxy server URL */
    proxy?: string;

    /** Custom API endpoint */
    endpoint?: string;
}
```

### Examples

```ts
// Basic
const sdk = YooKassa({
    shop_id: '123456',
    secret_key: 'test_secret_key',
});

// With debug and custom settings
const sdk = YooKassa({
    shop_id: '123456',
    secret_key: 'live_secret_key',
    debug: true,
    timeout: 10000,
    retries: 3,
    maxRPS: 10,
});

// With proxy
const sdk = YooKassa({
    shop_id: '123456',
    secret_key: 'live_secret_key',
    proxy: 'http://user:password@proxy.example.com:8080',
});

// With OAuth token (for webhooks and shop info)
const sdk = YooKassa({
    shop_id: '123456',
    secret_key: 'live_secret_key',
    token: 'your_oauth_token',
});
```

## Instance Caching

SDK automatically caches instances by `shop_id`. This allows:

- Connection reuse
- Working with multiple shops simultaneously

```ts
// Both calls return the same instance
const sdk1 = YooKassa({ shop_id: '123', secret_key: 'key1' });
const sdk2 = YooKassa({ shop_id: '123', secret_key: 'key1' });
console.log(sdk1 === sdk2); // true

// Different shops — different instances
const shop1 = YooKassa({ shop_id: '111', secret_key: 'key1' });
const shop2 = YooKassa({ shop_id: '222', secret_key: 'key2' });

// Force create a new instance
const newSdk = YooKassa({ shop_id: '123', secret_key: 'new_key' }, true);

// Clear cache
import { clearYooKassaCache } from 'yookassa-api-sdk';
clearYooKassaCache('123'); // Remove specific shop
clearYooKassaCache(); // Clear entire cache
```

## Payments

### Create Payment

```ts
import { CurrencyEnum } from 'yookassa-api-sdk';

const payment = await sdk.payments.create({
    amount: {
        value: '100.00',
        currency: CurrencyEnum.RUB,
    },
    confirmation: {
        type: 'redirect',
        return_url: 'https://example.com/return',
    },
    capture: true,
    description: 'Order #123',
    metadata: {
        order_id: '123',
    },
});

// With custom idempotence key
const payment = await sdk.payments.create(paymentData, 'your-unique-key');
```

### Get Payment

```ts
const payment = await sdk.payments.load('payment_id');
console.log(payment.status); // pending, waiting_for_capture, succeeded, canceled
```

### List Payments

```ts
const payments = await sdk.payments.list({
    created_at: { gte: '2024-01-01T00:00:00.000Z' },
    status: 'succeeded',
    limit: 50,
});
```

**Available filters:**

| Filter | Description |
| --- | --- |
| `created_at` | Filter by creation time (`gte`, `gt`, `lte`, `lt`) |
| `captured_at` | Filter by capture time |
| `status` | Filter by status (`pending`, `waiting_for_capture`, `succeeded`, `canceled`) |
| `payment_method` | Filter by payment method code |
| `limit` | Number of results (1-100, default: 10) |

### Capture Payment

```ts
// Simple capture
const payment = await sdk.payments.capture('payment_id');

// Partial capture with receipt
const payment = await sdk.payments.capture('payment_id', {
    amount: { value: '50.00', currency: 'RUB' },
    receipt: {
        customer: { email: 'customer@example.com' },
        items: [
            {
                description: 'Product',
                quantity: 1,
                amount: { value: '50.00', currency: 'RUB' },
                vat_code: 1,
            },
        ],
    },
});
```

### Cancel Payment

```ts
const payment = await sdk.payments.cancel('payment_id');
```

## Two-Stage Payments

For high-value orders, use [two-stage payments](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#two-stage) — first hold funds, then capture or cancel.

```ts
// Stage 1: Create payment with capture: false (hold funds)
const payment = await sdk.payments.create({
    amount: { value: '5000.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    capture: false, // Don't capture immediately
    description: 'Order #456',
});

// Stage 2a: Capture the payment (after verifying stock, etc.)
const captured = await sdk.payments.capture(payment.id);

// Stage 2b: Or cancel if needed
const canceled = await sdk.payments.cancel(payment.id);
```

## Confirmation Scenarios

SDK supports all YooKassa [confirmation types](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#confirmation-scenarios):

### Redirect (default)

User is redirected to YooKassa or bank page:

```ts
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    confirmation: {
        type: 'redirect',
        return_url: 'https://example.com/return',
        locale: 'ru_RU', // Optional: interface language
    },
});

// Redirect user to payment page
console.log(payment.confirmation.confirmation_url);
```

### Embedded (Widget)

Payment via [YooKassa widget](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/widget/basics):

```ts
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    confirmation: { type: 'embedded' },
});

// Use token to initialize widget
console.log(payment.confirmation.confirmation_token);
```

### QR Code (SBP)

Payment via QR code for SBP:

```ts
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    payment_method_data: { type: 'sbp' },
    confirmation: { type: 'qr' },
});

// Generate QR code from this data
console.log(payment.confirmation.confirmation_data);
```

### Mobile Application

For SberPay, T-Pay and other mobile payments:

```ts
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    payment_method_data: { type: 'sberbank' },
    confirmation: { type: 'mobile_application', return_url: 'https://example.com' },
});

// Deep link to mobile app
console.log(payment.confirmation.confirmation_url);
```

## Payment Tokens

For integration with [Checkout.js](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/checkout-js/basics) or [Mobile SDK](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/mobile-sdks/basics):

```ts
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    payment_token: 'token_from_checkout_js_or_mobile_sdk',
    description: 'Order #789',
});
```

## Recurring Payments (Auto-debiting)

SDK supports [recurring payments](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments) — automatic charges without user confirmation.

### Save Payment Method

```ts
// First payment — save card for future charges
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    save_payment_method: true, // Request to save payment method
    description: 'Subscription payment',
});

// After successful payment, payment_method.id will be available
console.log(payment.payment_method.id); // Use for future charges
```

### Charge Saved Method

```ts
// Subsequent auto-debit (no user confirmation needed)
const recurringPayment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    payment_method_id: 'saved_payment_method_id', // ID from first payment
    capture: true,
    description: 'Monthly subscription',
});
```

### Check if Method is Saved

```ts
const payment = await sdk.payments.load('payment_id');

if (payment.payment_method?.saved) {
    // Method is saved, can be used for recurring payments
    console.log('Saved method ID:', payment.payment_method.id);
}
```

## Airline Tickets

For selling airline tickets with bank cards, pass [airline data](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/airline-tickets):

```ts
const payment = await sdk.payments.create({
    amount: { value: '15000.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    payment_method_data: { type: 'bank_card' },
    airline: {
        ticket_number: '5554916004417', // or booking_reference
        passengers: [
            { first_name: 'SERGEI', last_name: 'IVANOV' },
        ],
        legs: [
            {
                departure_airport: 'LED',
                destination_airport: 'AMS',
                departure_date: '2024-12-24',
                carrier_code: 'SU',
            },
        ],
    },
});
```

## Receiver Data

For [topping up wallets, bank accounts, or phone balances](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/receiver-data):

```ts
// Top up bank account
const payment = await sdk.payments.create({
    amount: { value: '1000.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    receiver: {
        type: 'bank_account',
        account_number: '40817810000000000001',
        bic: '044525225',
    },
});

// Top up phone balance
const payment = await sdk.payments.create({
    amount: { value: '500.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    receiver: {
        type: 'mobile_balance',
        phone: '79001234567',
    },
});

// Top up digital wallet
const payment = await sdk.payments.create({
    amount: { value: '500.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    receiver: {
        type: 'digital_wallet',
        account_number: '4100175017397',
    },
});
```

## Split Payments

For [marketplaces](https://yookassa.ru/developers/solutions-for-platforms/split-payments/basics) — distribute payment between multiple sellers:

```ts
const payment = await sdk.payments.create({
    amount: { value: '1000.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    transfers: [
        {
            account_id: 'seller_shop_id_1',
            amount: { value: '600.00', currency: 'RUB' },
            platform_fee_amount: { value: '50.00', currency: 'RUB' }, // Your commission
        },
        {
            account_id: 'seller_shop_id_2',
            amount: { value: '400.00', currency: 'RUB' },
            platform_fee_amount: { value: '30.00', currency: 'RUB' },
        },
    ],
});
```

## Metadata

Attach custom data to payments (up to 16 keys, returned in responses and webhooks):

```ts
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    metadata: {
        order_id: 'order-123',
        user_id: 'user-456',
        source: 'mobile_app',
    },
});

// Later, retrieve metadata
const loaded = await sdk.payments.load(payment.id);
console.log(loaded.metadata.order_id); // 'order-123'
```

## Refunds

### Create Refund

```ts
const refund = await sdk.refunds.create({
    payment_id: 'payment_id',
    amount: { value: '50.00', currency: 'RUB' },
});

// With idempotence key
const refund = await sdk.refunds.create(refundData, 'unique-key');
```

### Get Refund

```ts
const refund = await sdk.refunds.load('refund_id');
```

### List Refunds

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

## Receipts

### Create Receipt

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

### Get Receipt

```ts
const receipt = await sdk.receipts.load('receipt_id');
```

### List Receipts

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

## Webhooks (Partner API)

> **Note:** Webhooks require an OAuth token. This functionality is only available as part of the [partner program](https://yookassa.ru/developers/partners-api/basics).

### Create Webhook

```ts
const webhook = await sdk.webhooks.create({
    event: 'payment.succeeded',
    url: 'https://example.com/webhook',
});
```

### List Webhooks

```ts
const webhooks = await sdk.webhooks.list();
```

### Delete Webhook

```ts
await sdk.webhooks.delete('webhook_id');
```

## Shop Info (Partner API)

> **Note:** Requires OAuth token.

```ts
const shop = await sdk.shop.info();
console.log(shop.account_id, shop.status, shop.payment_methods);
```

## Error Handling

```ts
import { YooKassaErr } from 'yookassa-api-sdk';

try {
    const payment = await sdk.payments.create({ ... });
} catch (error) {
    if (error instanceof YooKassaErr) {
        console.error(error.name);    // Error code (e.g., 'invalid_request')
        console.error(error.message); // Error description
        console.error(error.id);      // Request ID
    }
}
```

### Error Codes

| Code                    | Description             |
| ----------------------- | ----------------------- |
| `invalid_request`       | Invalid request         |
| `invalid_credentials`   | Invalid credentials     |
| `forbidden`             | Access denied           |
| `not_found`             | Object not found        |
| `too_many_requests`     | Rate limit exceeded     |
| `internal_server_error` | Server error            |
| `NETWORK_ERROR`         | Network error           |
| `ECONNABORTED`          | Request timeout         |
| `MISSING_OAUTH_TOKEN`   | OAuth token required    |

## API Reference

### Payments

| Method                         | Description                |
| ------------------------------ | -------------------------- |
| `create(data, idempotenceKey?)` | Create payment            |
| `load(id)`                      | Get payment by ID         |
| `list(filter?)`                 | List payments             |
| `capture(id, payload?, key?)`   | Capture payment           |
| `cancel(id, idempotenceKey?)`   | Cancel payment            |

### Refunds

| Method                         | Description                |
| ------------------------------ | -------------------------- |
| `create(data, idempotenceKey?)` | Create refund             |
| `load(id)`                      | Get refund by ID          |
| `list(filter?)`                 | List refunds              |

### Receipts

| Method                         | Description                |
| ------------------------------ | -------------------------- |
| `create(data, idempotenceKey?)` | Create receipt            |
| `load(id)`                      | Get receipt by ID         |
| `list(filter?)`                 | List receipts             |

### Webhooks (OAuth required)

| Method                         | Description                |
| ------------------------------ | -------------------------- |
| `create(data, idempotenceKey?)` | Create webhook            |
| `list()`                        | List webhooks             |
| `delete(id)`                    | Delete webhook            |

### Shop (OAuth required)

| Method   | Description                |
| -------- | -------------------------- |
| `info()` | Get shop information       |

## TypeScript Types

SDK exports all types for type-safe development:

```ts
import type {
    // Payment types
    Payments,           // Namespace with IPayment, CreatePaymentRequest, etc.
    IPaymentMethod,     // Payment method types
    IConfirmation,      // Confirmation types

    // Refund types
    Refunds,            // Namespace with IRefund, CreateRefundRequest, etc.

    // Receipt types
    Receipts,           // Namespace with ReceiptType, CreateReceiptType, etc.
    Items,              // Namespace with Item type for receipt items

    // Other types
    Customer,           // Customer data type
    Receiver,           // Receiver data for top-ups
    IAirline,           // Airline ticket data
    IWebhook,           // Webhook type
    IShopInfo,          // Shop info type
    IAmount,            // Amount type { value, currency }
    ConnectorOpts,      // SDK configuration type
    YooKassaErr,        // Error class

    // Filter types
    GetPaymentListFilter,
    GetRefundListFilter,
    GetReceiptListFilter,
    DateFilter,
} from 'yookassa-api-sdk';
```

## Enums

SDK exports TypeScript enums for type-safe development:

```ts
import {
    CurrencyEnum,
    LocaleEnum,
    PaymentMethodsEnum,
    ConfirmationTypesEnum,
    WebhookEventEnum,
} from 'yookassa-api-sdk';
```

| Enum | Description |
| --- | --- |
| `CurrencyEnum` | Currency codes (RUB, USD, EUR, etc.) |
| `LocaleEnum` | Interface language (`ru_RU`, `en_US`) |
| `PaymentMethodsEnum` | Payment methods (`bank_card`, `sbp`, `yoo_money`, etc.) |
| `ConfirmationTypesEnum` | Confirmation scenarios (`redirect`, `embedded`, `qr`, etc.) |
| `WebhookEventEnum` | Webhook events (`payment.succeeded`, `refund.succeeded`, etc.) |

> ⚠️ **Deprecated payment methods:**
> - `qiwi` — QIWI Bank license revoked by Central Bank of Russia on 21.02.2024. This payment method no longer works.
> - `alfabank` — Alfa-Click service is deprecated. Use other payment methods.

### Example

```ts
import { CurrencyEnum, PaymentMethodsEnum, ConfirmationTypesEnum } from 'yookassa-api-sdk';

const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: CurrencyEnum.RUB },
    payment_method_data: { type: PaymentMethodsEnum.sbp },
    confirmation: { type: ConfirmationTypesEnum.redirect, return_url: 'https://example.com' },
});
```

## Dictionaries

SDK exports helper dictionaries for working with YooKassa codes and statuses:

```ts
import {
    paymentCancelReasonMap,
    refundCancelReasonMap,
    paymentSubjectMap,
    AgentTypeMap,
    measureTypeMap,
    SettlementTypeMap,
} from 'yookassa-api-sdk';
```

| Dictionary | Description |
| --- | --- |
| `paymentCancelReasonMap` | [Payment cancellation reasons](https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments#cancellation-details-reason) |
| `refundCancelReasonMap` | [Refund cancellation reasons](https://yookassa.ru/developers/payment-acceptance/after-the-payment/refunds#declined-refunds-cancellation-details-reason) |
| `paymentSubjectMap` | [Payment subject types](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#payment-subject) (54-FZ) |
| `AgentTypeMap` | [Agent types](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#agent-type) (54-FZ) |
| `measureTypeMap` | Measure units for receipt items |
| `SettlementTypeMap` | Settlement types for receipts |

### Example

```ts
import { paymentCancelReasonMap } from 'yookassa-api-sdk';

const payment = await sdk.payments.load('payment_id');

if (payment.status === 'canceled' && payment.cancellation_details) {
    const reason = payment.cancellation_details.reason;
    console.log(paymentCancelReasonMap[reason]); // Human-readable description
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

This project is a fork of [yookassa-api-sdk](https://github.com/awardix/yookassa-sdk) by **Aleksey Aleksyuk** ([@awardix](https://github.com/awardix)).

Original project based on [yookassa-sdk](https://github.com/googlesheets-ru/yookassa-sdk) by **Dmitriy** ([@Mityayka1](https://github.com/Mityayka1)). Thanks for the original implementation!

## License

[MIT](LICENSE)

