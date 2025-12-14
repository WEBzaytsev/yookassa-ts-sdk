# Error Handling

## YooKassaErr

```ts
import { YooKassaErr } from 'yookassa-ts-sdk';

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

