[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payouts](../README.md) / PayoutToCardDestination

# Interface: PayoutToCardDestination

Defined in: [src/types/payouts/payout.type.ts:10](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payout.type.ts#L10)

Выплата на банковскую карту (ответ)

## Properties

### card

> **card**: `object`

Defined in: [src/types/payouts/payout.type.ts:12](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payout.type.ts#L12)

#### card\_type

> **card\_type**: `string`

Тип карты (MasterCard, Visa, Mir и т. д.)

#### first6

> **first6**: `string`

Первые 6 цифр (BIN)

#### issuer\_country?

> `optional` **issuer\_country?**: `string`

Код страны эмитента (ISO 3166-1 alpha-2)

#### issuer\_name?

> `optional` **issuer\_name?**: `string`

Банк-эмитент

#### last4

> **last4**: `string`

Последние 4 цифры

***

### type

> **type**: `"bank_card"`

Defined in: [src/types/payouts/payout.type.ts:11](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payouts/payout.type.ts#L11)
