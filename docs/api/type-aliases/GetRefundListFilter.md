[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / GetRefundListFilter

# Type Alias: GetRefundListFilter

> **GetRefundListFilter** = `Omit`\<[`GetPaymentListFilter`](GetPaymentListFilter.md), `"captured_at"` \| `"payment_method"`\> & `object`

Defined in: [src/types/api.types.ts:45](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/api.types.ts#L45)

## Type Declaration

### payment\_id?

> `optional` **payment\_id?**: `string`

ID платежа — все возвраты по платежу.

#### Example

```ts
`payment_id=1da5c87d-0984-50e8-a7f3-8de646dd9ec9`
```

### status?

> `optional` **status?**: [`RefundStatus`](../YooKassa-SDK-API-Reference/namespaces/Refunds/type-aliases/RefundStatus.md)

Статус возврата:
- `pending` — создан, обрабатывается;
- `succeeded` — завершён, сумма переведена пользователю (финальный);
- `canceled` — отменён, детали в `cancellation_details` (финальный).
