[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payouts](../README.md) / CreatePayoutRequest

# Interface: CreatePayoutRequest

Defined in: [src/types/payouts/payout.type.ts:148](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payout.type.ts#L148)

Запрос создания выплаты.

## See

https://yookassa.ru/developers/api#create_payout

## Properties

### amount

> **amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/payouts/payout.type.ts:150](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payout.type.ts#L150)

Сумма выплаты

***

### deal?

> `optional` **deal?**: `object`

Defined in: [src/types/payouts/payout.type.ts:169](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payout.type.ts#L169)

Сделка (Безопасная сделка)

#### id

> **id**: `string`

***

### description?

> `optional` **description?**: `string`

Defined in: [src/types/payouts/payout.type.ts:167](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payout.type.ts#L167)

Описание транзакции (до 128 символов)

***

### metadata?

> `optional` **metadata?**: [`Metadata`](../../../../interfaces/Metadata.md)

Defined in: [src/types/payouts/payout.type.ts:175](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payout.type.ts#L175)

***

### payment\_method\_id?

> `optional` **payment\_method\_id?**: `string`

Defined in: [src/types/payouts/payout.type.ts:165](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payout.type.ts#L165)

ID сохранённого способа оплаты.
Обязательно без `payout_destination_data` и `payout_token`.

***

### payout\_destination\_data?

> `optional` **payout\_destination\_data?**: [`PayoutDestinationData`](../type-aliases/PayoutDestinationData.md)

Defined in: [src/types/payouts/payout.type.ts:155](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payout.type.ts#L155)

Платёжное средство получателя.
Обязательно без `payout_token` и `payment_method_id`.

***

### payout\_token?

> `optional` **payout\_token?**: `string`

Defined in: [src/types/payouts/payout.type.ts:160](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payout.type.ts#L160)

Токенизированные данные (например, синоним карты).
Обязательно без `payout_destination_data` и `payment_method_id`.

***

### personal\_data?

> `optional` **personal\_data?**: `object`[]

Defined in: [src/types/payouts/payout.type.ts:174](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payout.type.ts#L174)

Персональные данные получателя.
Только для обычных выплат. От 1 до 2 записей.

#### id

> **id**: `string`
