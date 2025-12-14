# Getting Started

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

## Examples

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
import { clearYooKassaCache } from '@webzaytsev/yookassa-ts-sdk';
clearYooKassaCache('123'); // Remove specific shop
clearYooKassaCache(); // Clear entire cache
```

