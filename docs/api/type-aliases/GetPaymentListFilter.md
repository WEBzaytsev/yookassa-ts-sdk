[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / GetPaymentListFilter

# Type Alias: GetPaymentListFilter

> **GetPaymentListFilter** = `object`

Defined in: [src/types/api.types.ts:17](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/api.types.ts#L17)

## Properties

### captured\_at?

> `optional` **captured\_at?**: [`DateFilter`](DateFilter.md)

Defined in: [src/types/api.types.ts:21](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/api.types.ts#L21)

Фильтр по времени подтверждения

***

### created\_at?

> `optional` **created\_at?**: [`DateFilter`](DateFilter.md)

Defined in: [src/types/api.types.ts:19](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/api.types.ts#L19)

Фильтр по времени создания

***

### cursor?

> `optional` **cursor?**: `string`

Defined in: [src/types/api.types.ts:42](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/api.types.ts#L42)

Указатель на следующий фрагмент списка — значение `next_cursor` из предыдущего ответа.
Используйте, если объектов больше, чем `limit`.

#### Example

```ts
`cursor=37a5c87d-3984-51e8-a7f3-8de646d39ec15`
```

#### See

[Пагинация](https://yookassa.ru/developers/using-api/lists#pagination)

***

### limit?

> `optional` **limit?**: `number`

Defined in: [src/types/api.types.ts:35](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/api.types.ts#L35)

Число объектов в ответе: от 1 до 100.

#### Example

```ts
`limit=50`
```

#### Default

```ts
10
```

***

### payment\_method?

> `optional` **payment\_method?**: [`PaymentMethodsEnum`](../enumerations/PaymentMethodsEnum.md)

Defined in: [src/types/api.types.ts:26](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/api.types.ts#L26)

Фильтр по [способу оплаты](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-methods#all)

#### Example

```ts
`payment_method=bank_card`
```

***

### status?

> `optional` **status?**: [`PaymentStatus`](../YooKassa-SDK-API-Reference/namespaces/Payments/type-aliases/PaymentStatus.md)

Defined in: [src/types/api.types.ts:29](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/api.types.ts#L29)

Фильтр по статусу платежа

#### Example

```ts
`status=succeeded`
```
