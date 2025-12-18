[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / GetRefundListFilter

# Type Alias: GetRefundListFilter

> **GetRefundListFilter** = `Omit`\<[`GetPaymentListFilter`](GetPaymentListFilter.md), `"captured_at"` \| `"payment_method"`\> & `object`

Defined in: [src/types/api.types.ts:51](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/api.types.ts#L51)

## Type Declaration

### payment\_id?

> `optional` **payment\_id**: `string`

Фильтр по идентификатору платежа (получить все возвраты по платежу).

#### Example

```ts
payment_id=1da5c87d-0984-50e8-a7f3-8de646dd9ec9
```

### status?

> `optional` **status**: [`RefundStatus`](../YooKassa-SDK-API-Reference/namespaces/Refunds/type-aliases/RefundStatus.md)

Статус возврата платежа. Возможные значения:
- `pending` — возврат создан, но пока еще обрабатывается;
- `succeeded` — возврат успешно завершен, указанная в запросе сумма переведена на платежное средство пользователя (финальный и неизменяемый статус);
- `canceled` — возврат отменен, инициатор и причина отмены указаны в объекте cancellation_details (финальный и неизменяемый статус).
