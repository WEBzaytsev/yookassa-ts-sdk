[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / ConnectorOpts

# Type Alias: ConnectorOpts

> **ConnectorOpts** = `object`

Defined in: [src/client/connector.ts:86](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/client/connector.ts#L86)

Configuration options for YooKassa SDK.

## Rate Limiting

SDK includes built-in rate limiting via `maxRPS` parameter. All requests are automatically
throttled to prevent API rate limit errors. In distributed systems with multiple instances,
set `maxRPS` lower (e.g., 2-3) per instance to share the rate limit across nodes.

## Concurrent Requests

SDK handles concurrent requests safely:
- Rate limiter queues requests exceeding `maxRPS`
- Each request gets unique idempotency key (auto-generated or provided)
- Instance caching by `shop_id` ensures connection reuse

## Example

```typescript
// High-load configuration for single instance
const sdk = YooKassa({
    shop_id: 'your_shop_id',
    secret_key: 'your_secret_key',
    maxRPS: 10,      // Higher limit for single instance
    retries: 3,      // Fewer retries for faster failure
    timeout: 10000,  // Longer timeout for stability
});

// Distributed system configuration (per instance)
const sdk = YooKassa({
    shop_id: 'your_shop_id',
    secret_key: 'your_secret_key',
    maxRPS: 2,       // Low limit per instance (5 instances = 10 total RPS)
    retries: 5,      // More retries for resilience
});
```

## Properties

### debug?

> `optional` **debug?**: `boolean`

Defined in: [src/client/connector.ts:109](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/client/connector.ts#L109)

Debug mode — logs all requests and responses

***

### endpoint?

> `optional` **endpoint?**: `string`

Defined in: [src/client/connector.ts:105](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/client/connector.ts#L105)

API endpoint URL (without trailing slash)

#### Default

```ts
"https://api.yookassa.ru/v3"
```

***

### maxRPS?

> `optional` **maxRPS?**: `number`

Defined in: [src/client/connector.ts:124](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/client/connector.ts#L124)

Maximum requests per second (rate limiting).

SDK automatically queues requests exceeding this limit.
For distributed systems, divide your total RPS limit by number of instances.

#### Default

```ts
5
```

#### Example

```ts
// Single instance: use full rate limit
maxRPS: 10

// 5 distributed instances sharing limit
maxRPS: 2  // 2 * 5 = 10 total RPS
```

***

### proxy?

> `optional` **proxy?**: [`ProxyConfig`](ProxyConfig.md)

Defined in: [src/client/connector.ts:142](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/client/connector.ts#L142)

Proxy server URL (e.g., "http://user:pass@proxy.example.com:8080")

***

### retries?

> `optional` **retries?**: `number`

Defined in: [src/client/connector.ts:138](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/client/connector.ts#L138)

Number of retry attempts on retryable errors (5xx, 429, network errors).

Uses exponential backoff: 1s, 2s, 4s, 8s, 16s...
Idempotency key is preserved across retries, ensuring no duplicate payments.

#### Default

```ts
5
```

***

### secret\_key

> **secret\_key**: `string`

Defined in: [src/client/connector.ts:94](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/client/connector.ts#L94)

Secret key from YooKassa dashboard

***

### shop\_id

> **shop\_id**: `string`

Defined in: [src/client/connector.ts:90](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/client/connector.ts#L90)

Shop identifier from YooKassa dashboard

***

### timeout?

> `optional` **timeout?**: `number`

Defined in: [src/client/connector.ts:129](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/client/connector.ts#L129)

Request timeout in milliseconds

#### Default

```ts
5000
```

***

### token?

> `optional` **token?**: `string`

Defined in: [src/client/connector.ts:100](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/client/connector.ts#L100)

OAuth token for partner API (webhooks, shop info).
Required for `sdk.webhooks.*` and `sdk.shop.*` methods.

#### See

https://yookassa.ru/developers/partners-api/basics
