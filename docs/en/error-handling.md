# Error Handling

## YooKassaErr

```ts
import { YooKassaErr } from '@webzaytsev/yookassa-ts-sdk';

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

## Error Codes

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

## Common Errors

### "Receipt is missing or illegal"

This error occurs when fiscalization (mandatory receipt generation) is enabled in your YooKassa account, but the payment request:

1. **Missing receipt data** — the `receipt` field is not provided
2. **Invalid receipt data** — required fields are missing or values don't meet requirements

**Solution:**

#### Option 1: Include receipt data when creating payment

```ts
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    description: 'Order #123',
    receipt: {
        customer: {
            email: 'customer@example.com', // Required for YooKassa Receipts
        },
        items: [
            {
                description: 'Product',
                quantity: 1,
                amount: { value: '100.00', currency: 'RUB' },
                vat_code: 1, // VAT code (required)
            },
        ],
    },
})
```

**Required receipt fields:**
- `customer.email` or `customer.phone` — customer contact information
- `items` — array of items (minimum 1 item)
- `items[].description` — item name
- `items[].quantity` — quantity
- `items[].amount` — item price
- `items[].vat_code` — VAT code

**Check:**
- Sum of all items in `items` must match payment amount
- All required fields are filled
- VAT codes match your tax system

#### Option 2: Disable fiscalization (if not required)

If you don't work under 54-FZ, you can disable mandatory receipt generation in YooKassa account settings:

1. Log in to [YooKassa dashboard](https://yookassa.ru/my)
2. Go to shop settings
3. Disable mandatory receipt generation

**Note:** Disabling fiscalization is only possible if you're not required to work under 54-FZ (not a company or individual entrepreneur).

#### Option 3: Create receipt separately ("Payment first, then receipt" scenario)

If using a third-party cash register, you can create payment without receipt, then send receipt separately:

```ts
// 1. Create payment without receipt
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    // receipt not provided
})

// 2. After successful payment, create receipt
if (payment.status === 'succeeded') {
    const receipt = await sdk.receipts.create({
        type: 'payment',
        payment_id: payment.id,
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
        settlements: [
            {
                type: 'prepayment',
                amount: { value: '100.00', currency: 'RUB' },
            },
        ],
    })
}
```

**More information:**
- [YooKassa Receipts](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/basics)
- [Third-party cash registers](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics)

## Automatic Retries

SDK automatically retries requests on:

- Network errors
- Server errors (5xx)
- Rate limiting (429)

Configure retry behavior:

```ts
const sdk = YooKassa({
    shop_id: '123456',
    secret_key: 'secret',
    retries: 3,      // Number of retry attempts (default: 5)
    timeout: 10000,  // Request timeout in ms (default: 5000)
});
```

