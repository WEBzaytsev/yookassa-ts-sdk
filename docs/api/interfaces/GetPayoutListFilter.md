[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / GetPayoutListFilter

# Interface: GetPayoutListFilter

Defined in: [src/types/payouts/payoutListFilter.type.ts:11](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payoutListFilter.type.ts#L11)

Фильтр списка выплат.

## See

https://yookassa.ru/developers/api#get_payouts_list

## Properties

### created\_at?

> `optional` **created\_at?**: [`DateFilter`](../type-aliases/DateFilter.md)

Defined in: [src/types/payouts/payoutListFilter.type.ts:13](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payoutListFilter.type.ts#L13)

Фильтр по времени создания

***

### cursor?

> `optional` **cursor?**: `string`

Defined in: [src/types/payouts/payoutListFilter.type.ts:29](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payoutListFilter.type.ts#L29)

Указатель на следующий фрагмент списка

***

### limit?

> `optional` **limit?**: `number`

Defined in: [src/types/payouts/payoutListFilter.type.ts:27](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payoutListFilter.type.ts#L27)

Число объектов в ответе: от 1 до 100.

#### Default

```ts
10
```

***

### payout\_destination?

> `optional` **payout\_destination?**: `object`

Defined in: [src/types/payouts/payoutListFilter.type.ts:20](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payoutListFilter.type.ts#L20)

Фильтр по `payout_destination.type` в query

#### type?

> `optional` **type?**: [`PayoutDestinationFilterType`](../type-aliases/PayoutDestinationFilterType.md)

***

### status?

> `optional` **status?**: [`PayoutStatus`](../YooKassa-SDK-API-Reference/namespaces/Payouts/type-aliases/PayoutStatus.md)

Defined in: [src/types/payouts/payoutListFilter.type.ts:22](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payoutListFilter.type.ts#L22)

Фильтр по статусу выплаты

***

### succeeded\_at?

> `optional` **succeeded\_at?**: [`DateFilter`](../type-aliases/DateFilter.md)

Defined in: [src/types/payouts/payoutListFilter.type.ts:18](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payoutListFilter.type.ts#L18)

Фильтр по `succeeded_at` в объекте выплаты.

#### See

https://yookassa.ru/developers/api#get_payouts_list
