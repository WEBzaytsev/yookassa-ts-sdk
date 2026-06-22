[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payouts](../README.md) / CreatePayoutRequest

# Interface: CreatePayoutRequest

Defined in: [src/types/payouts/payout.type.ts:148](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payout.type.ts#L148)

Данные для создания выплаты.

## See

https://yookassa.ru/developers/api#create_payout

## Properties

### amount

> **amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/payouts/payout.type.ts:150](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payout.type.ts#L150)

Сумма выплаты

***

### deal?

> `optional` **deal?**: `object`

Defined in: [src/types/payouts/payout.type.ts:169](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payout.type.ts#L169)

Сделка (для Безопасной сделки)

#### id

> **id**: `string`

***

### description?

> `optional` **description?**: `string`

Defined in: [src/types/payouts/payout.type.ts:167](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payout.type.ts#L167)

Описание транзакции (до 128 символов)

***

### metadata?

> `optional` **metadata?**: [`Metadata`](../../../../interfaces/Metadata.md)

Defined in: [src/types/payouts/payout.type.ts:175](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payout.type.ts#L175)

***

### payment\_method\_id?

> `optional` **payment\_method\_id?**: `string`

Defined in: [src/types/payouts/payout.type.ts:165](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payout.type.ts#L165)

Идентификатор сохранённого способа оплаты.
Обязателен, если не передан `payout_destination_data` или `payout_token`.

***

### payout\_destination\_data?

> `optional` **payout\_destination\_data?**: [`PayoutDestinationData`](../type-aliases/PayoutDestinationData.md)

Defined in: [src/types/payouts/payout.type.ts:155](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payout.type.ts#L155)

Данные платёжного средства получателя.
Обязателен, если не передан `payout_token` или `payment_method_id`.

***

### payout\_token?

> `optional` **payout\_token?**: `string`

Defined in: [src/types/payouts/payout.type.ts:160](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payout.type.ts#L160)

Токенизированные данные для выплаты (например, синоним банковской карты).
Обязателен, если не передан `payout_destination_data` или `payment_method_id`.

***

### personal\_data?

> `optional` **personal\_data?**: `object`[]

Defined in: [src/types/payouts/payout.type.ts:174](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payout.type.ts#L174)

Персональные данные получателя выплаты.
Только для обычных выплат. От 1 до 2 записей.

#### id

> **id**: `string`
