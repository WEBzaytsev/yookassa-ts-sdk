[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / GetReceiptListFilter

# Type Alias: GetReceiptListFilter

> **GetReceiptListFilter** = `Pick`\<[`GetRefundListFilter`](GetRefundListFilter.md), `"payment_id"` \| `"cursor"`\> & `object`

Defined in: [src/types/api.types.ts:60](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/api.types.ts#L60)

## Type Declaration

### refund\_id?

> `optional` **refund\_id?**: `string`

ID возврата — все чеки по возврату. Передайте либо `payment_id`, либо `refund_id`.

#### Example

```ts
`refund_id=1da5c87d-0984-50e8-a7f3-8de646dd9ec9`
```
