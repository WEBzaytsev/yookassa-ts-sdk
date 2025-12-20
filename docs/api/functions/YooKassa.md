[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / YooKassa

# Function: YooKassa()

> **YooKassa**(`init`, `forceNew`): [`YooKassaSdk`](../classes/YooKassaSdk.md)

Defined in: [src/client/sdk.ts:561](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/client/sdk.ts#L561)

Creates or returns a cached YooKassaSdk instance.

Instances are cached by `shop_id`, enabling connection reuse
and multi-store support in a single application.

## Instance Caching

```typescript
// Same shop_id = same instance (cached)
const sdk1 = YooKassa({ shop_id: '123', secret_key: 'key' });
const sdk2 = YooKassa({ shop_id: '123', secret_key: 'key' });
console.log(sdk1 === sdk2); // true

// Different shops = different instances
const shopA = YooKassa({ shop_id: 'A', secret_key: 'keyA' });
const shopB = YooKassa({ shop_id: 'B', secret_key: 'keyB' });
```

## Distributed Systems Configuration

```typescript
// For multiple server instances sharing API rate limits
const sdk = YooKassa({
    shop_id: process.env.YOOKASSA_SHOP_ID,
    secret_key: process.env.YOOKASSA_SECRET_KEY,
    maxRPS: 2,       // Low per-instance limit
    retries: 5,      // More retries for resilience
    timeout: 15000,  // Longer timeout
});
```

## Parameters

### init

[`ConnectorOpts`](../type-aliases/ConnectorOpts.md)

SDK configuration options

### forceNew

`boolean` = `false`

Force create new instance (ignore cache)

## Returns

[`YooKassaSdk`](../classes/YooKassaSdk.md)

YooKassaSdk instance
