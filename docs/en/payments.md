# Payments

## Create Payment

```ts
import { CurrencyEnum } from '@webzaytsev/yookassa-ts-sdk';

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

## Get Payment

```ts
const payment = await sdk.payments.load('payment_id');
console.log(payment.status); // pending, waiting_for_capture, succeeded, canceled
```

## List Payments

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

## Capture Payment

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

## Cancel Payment

```ts
const payment = await sdk.payments.cancel('payment_id');
```

---

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

---

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

---

## Payment Tokens

For integration with [Checkout.js](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/checkout-js/basics) or [Mobile SDK](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/mobile-sdks/basics):

```ts
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    payment_token: 'token_from_checkout_js_or_mobile_sdk',
    description: 'Order #789',
});
```

---

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

---

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

---

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

---

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

---

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

