[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / GetPayoutSearchFilter

# Interface: GetPayoutSearchFilter

Defined in: [src/types/payouts/payoutSearchFilter.type.ts:9](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payoutSearchFilter.type.ts#L9)

Фильтр поиска выплат (`GET /payouts/search`).
Доступен только за последние 3 месяца; в query `metadata` — точное совпадение одной пары ключ-значение.

## See

https://yookassa.ru/developers/api#search_payouts

## Properties

### created\_at?

> `optional` **created\_at?**: [`DateFilter`](../type-aliases/DateFilter.md)

Defined in: [src/types/payouts/payoutSearchFilter.type.ts:10](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payoutSearchFilter.type.ts#L10)

***

### cursor?

> `optional` **cursor?**: `string`

Defined in: [src/types/payouts/payoutSearchFilter.type.ts:16](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payoutSearchFilter.type.ts#L16)

***

### limit?

> `optional` **limit?**: `number`

Defined in: [src/types/payouts/payoutSearchFilter.type.ts:15](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payoutSearchFilter.type.ts#L15)

***

### metadata?

> `optional` **metadata?**: [`Metadata`](Metadata.md)

Defined in: [src/types/payouts/payoutSearchFilter.type.ts:14](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payoutSearchFilter.type.ts#L14)

Строго одна пара «ключ–значение» в теле фильтра (ограничение API).
