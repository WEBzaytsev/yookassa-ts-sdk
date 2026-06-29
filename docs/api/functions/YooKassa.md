[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / YooKassa

# Function: YooKassa()

> **YooKassa**(`init`, `forceNew?`): [`YooKassaSdk`](../classes/YooKassaSdk.md)

Defined in: [src/client/sdk.ts:836](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/client/sdk.ts#L836)

Creates or returns a cached YooKassaSdk instance.

Instances are cached by a hash of all credential fields (`shop_id`, `secret_key`,
`token`, `endpoint`, `proxy`), enabling connection reuse while ensuring that
changing any credential always produces a new instance (safe key rotation).

## Instance Caching

```typescript
// Same credentials = same instance (cached)
const sdk1 = YooKassa({ shop_id: '123', secret_key: 'key' });
const sdk2 = YooKassa({ shop_id: '123', secret_key: 'key' });
console.log(sdk1 === sdk2); // true

// Different secret = different instance (safe rotation)
const oldSdk = YooKassa({ shop_id: '123', secret_key: 'old' });
const newSdk = YooKassa({ shop_id: '123', secret_key: 'new' });
console.log(oldSdk === newSdk); // false

// Different shops = different instances
const shopA = YooKassa({ shop_id: 'A', secret_key: 'keyA' });
const shopB = YooKassa({ shop_id: 'B', secret_key: 'keyB' });
```

## Parameters

### init

[`ConnectorOpts`](../type-aliases/ConnectorOpts.md)

SDK configuration options

### forceNew?

`boolean` = `false`

Force create new instance (ignore cache)

## Returns

[`YooKassaSdk`](../classes/YooKassaSdk.md)

YooKassaSdk instance
