[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / GetPayoutSearchFilter

# Interface: GetPayoutSearchFilter

Defined in: src/types/payouts/payoutSearchFilter.type.ts:9

Фильтр поиска выплат (`GET /payouts/search`).
Доступен только за последние 3 месяца; в query `metadata` — точное совпадение одной пары ключ-значение.

## See

https://yookassa.ru/developers/api#search_payouts

## Properties

### created\_at?

> `optional` **created\_at?**: [`DateFilter`](../type-aliases/DateFilter.md)

Defined in: src/types/payouts/payoutSearchFilter.type.ts:10

***

### cursor?

> `optional` **cursor?**: `string`

Defined in: src/types/payouts/payoutSearchFilter.type.ts:16

***

### limit?

> `optional` **limit?**: `number`

Defined in: src/types/payouts/payoutSearchFilter.type.ts:15

***

### metadata?

> `optional` **metadata?**: [`Metadata`](Metadata.md)

Defined in: src/types/payouts/payoutSearchFilter.type.ts:14

Строго одна пара «ключ–значение» в теле фильтра (ограничение API).
