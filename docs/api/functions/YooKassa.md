[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / YooKassa

# Function: YooKassa()

> **YooKassa**(`init`, `forceNew?`): [`YooKassaSdk`](../classes/YooKassaSdk.md)

Defined in: [src/client/sdk.ts:892](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/client/sdk.ts#L892)

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
