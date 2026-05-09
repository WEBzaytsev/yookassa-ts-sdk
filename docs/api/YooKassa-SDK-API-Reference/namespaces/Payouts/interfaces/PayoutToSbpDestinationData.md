[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payouts](../README.md) / PayoutToSbpDestinationData

# Interface: PayoutToSbpDestinationData

Defined in: [src/types/payouts/payout.type.ts:71](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payouts/payout.type.ts#L71)

Данные для выплаты через СБП

## Properties

### bank\_id

> **bank\_id**: `string`

Defined in: [src/types/payouts/payout.type.ts:76](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payouts/payout.type.ts#L76)

Идентификатор участника СБП, до 12 символов

***

### phone

> **phone**: `string`

Defined in: [src/types/payouts/payout.type.ts:74](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payouts/payout.type.ts#L74)

Телефон получателя в формате ITU-T E.164, например 79000000000

***

### type

> **type**: `"sbp"`

Defined in: [src/types/payouts/payout.type.ts:72](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payouts/payout.type.ts#L72)
