[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / GetPayoutListFilter

# Interface: GetPayoutListFilter

Defined in: [src/types/payouts/payoutListFilter.type.ts:11](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payouts/payoutListFilter.type.ts#L11)

Фильтр для получения списка выплат.

## See

https://yookassa.ru/developers/api#get_payouts_list

## Properties

### created\_at?

> `optional` **created\_at?**: [`DateFilter`](../type-aliases/DateFilter.md)

Defined in: [src/types/payouts/payoutListFilter.type.ts:13](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payouts/payoutListFilter.type.ts#L13)

Фильтр по времени создания

***

### cursor?

> `optional` **cursor?**: `string`

Defined in: [src/types/payouts/payoutListFilter.type.ts:31](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payouts/payoutListFilter.type.ts#L31)

Указатель на следующий фрагмент списка

***

### limit?

> `optional` **limit?**: `number`

Defined in: [src/types/payouts/payoutListFilter.type.ts:29](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payouts/payoutListFilter.type.ts#L29)

Количество объектов в ответе (от 1 до 100).

#### Default

```ts
10
```

***

### payout\_destination?

> `optional` **payout\_destination?**: `object`

Defined in: [src/types/payouts/payoutListFilter.type.ts:22](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payouts/payoutListFilter.type.ts#L22)

Фильтр по типу назначения выплаты в query: `payout_destination.type`.

#### type?

> `optional` **type?**: [`PayoutDestinationFilterType`](../type-aliases/PayoutDestinationFilterType.md)

***

### status?

> `optional` **status?**: [`PayoutStatus`](../YooKassa-SDK-API-Reference/namespaces/Payouts/type-aliases/PayoutStatus.md)

Defined in: [src/types/payouts/payoutListFilter.type.ts:24](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payouts/payoutListFilter.type.ts#L24)

Фильтр по статусу выплаты

***

### succeeded\_at?

> `optional` **succeeded\_at?**: [`DateFilter`](../type-aliases/DateFilter.md)

Defined in: [src/types/payouts/payoutListFilter.type.ts:18](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payouts/payoutListFilter.type.ts#L18)

Фильтр по времени успешного проведения выплаты (`succeeded_at` в объекте выплаты).

#### See

https://yookassa.ru/developers/api#get_payouts_list
