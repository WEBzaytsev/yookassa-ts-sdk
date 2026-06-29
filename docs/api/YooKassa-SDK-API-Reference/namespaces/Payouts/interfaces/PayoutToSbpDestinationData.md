[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payouts](../README.md) / PayoutToSbpDestinationData

# Interface: PayoutToSbpDestinationData

Defined in: [src/types/payouts/payout.type.ts:71](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payout.type.ts#L71)

Выплата через СБП (запрос)

## Properties

### bank\_id

> **bank\_id**: `string`

Defined in: [src/types/payouts/payout.type.ts:76](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payout.type.ts#L76)

ID участника СБП, до 12 символов

***

### phone

> **phone**: `string`

Defined in: [src/types/payouts/payout.type.ts:74](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payout.type.ts#L74)

Телефон получателя, ITU-T E.164. Пример: `79000000000`

***

### type

> **type**: `"sbp"`

Defined in: [src/types/payouts/payout.type.ts:72](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payout.type.ts#L72)
