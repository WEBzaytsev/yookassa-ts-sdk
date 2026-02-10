[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / GetReceiptListFilter

# Type Alias: GetReceiptListFilter

> **GetReceiptListFilter** = `Pick`\<[`GetRefundListFilter`](GetRefundListFilter.md), `"payment_id"` \| `"cursor"`\> & `object`

Defined in: [src/types/api.types.ts:66](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/c8dc341ff73a5ece64b0ee18dd5940355be4e506/src/types/api.types.ts#L66)

## Type Declaration

### refund\_id?

> `optional` **refund\_id**: `string`

Фильтр по идентификатору возврата (получить все чеки для указанного возврата).
В запросе можно передать только что-то одно: или идентификатор платежа, или идентификатор возврата.

#### Example

```ts
Пример: refund_id=1da5c87d-0984-50e8-a7f3-8de646dd9ec9
```
