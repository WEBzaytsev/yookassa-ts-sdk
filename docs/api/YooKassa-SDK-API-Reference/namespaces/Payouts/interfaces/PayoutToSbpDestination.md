[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payouts](../README.md) / PayoutToSbpDestination

# Interface: PayoutToSbpDestination

Defined in: [src/types/payouts/payout.type.ts:34](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payout.type.ts#L34)

Выплата через СБП (ответ)

## Properties

### bank\_id

> **bank\_id**: `string`

Defined in: [src/types/payouts/payout.type.ts:39](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payout.type.ts#L39)

ID участника СБП (банк или сервис), до 12 символов

***

### phone

> **phone**: `string`

Defined in: [src/types/payouts/payout.type.ts:37](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payout.type.ts#L37)

Телефон получателя, ITU-T E.164. Пример: `79000000000`

***

### recipient\_checked

> **recipient\_checked**: `boolean`

Defined in: [src/types/payouts/payout.type.ts:46](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payout.type.ts#L46)

Выплата с проверкой получателя

***

### sbp\_operation\_id?

> `optional` **sbp\_operation\_id?**: `string`

Defined in: [src/types/payouts/payout.type.ts:44](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payout.type.ts#L44)

ID операции в СБП (НСПК).
Обязателен для выплат в `succeeded`.

***

### type

> **type**: `"sbp"`

Defined in: [src/types/payouts/payout.type.ts:35](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payout.type.ts#L35)
