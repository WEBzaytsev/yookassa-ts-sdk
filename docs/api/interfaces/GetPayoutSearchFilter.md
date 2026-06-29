[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / GetPayoutSearchFilter

# Interface: GetPayoutSearchFilter

Defined in: [src/types/payouts/payoutSearchFilter.type.ts:9](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payoutSearchFilter.type.ts#L9)

Фильтр поиска выплат (`GET /payouts/search`).
Только за последние 3 месяца; в query `metadata` — точное совпадение одной пары ключ–значение.

## See

https://yookassa.ru/developers/api#search_payouts

## Properties

### created\_at?

> `optional` **created\_at?**: [`DateFilter`](../type-aliases/DateFilter.md)

Defined in: [src/types/payouts/payoutSearchFilter.type.ts:10](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payoutSearchFilter.type.ts#L10)

***

### cursor?

> `optional` **cursor?**: `string`

Defined in: [src/types/payouts/payoutSearchFilter.type.ts:16](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payoutSearchFilter.type.ts#L16)

***

### limit?

> `optional` **limit?**: `number`

Defined in: [src/types/payouts/payoutSearchFilter.type.ts:15](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payoutSearchFilter.type.ts#L15)

***

### metadata?

> `optional` **metadata?**: [`Metadata`](Metadata.md)

Defined in: [src/types/payouts/payoutSearchFilter.type.ts:14](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payoutSearchFilter.type.ts#L14)

Ровно одна пара «ключ–значение» (ограничение API).
