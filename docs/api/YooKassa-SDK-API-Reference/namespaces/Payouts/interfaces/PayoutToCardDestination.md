[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payouts](../README.md) / PayoutToCardDestination

# Interface: PayoutToCardDestination

Defined in: [src/types/payouts/payout.type.ts:10](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payouts/payout.type.ts#L10)

Выплата на банковскую карту (ответ)

## Properties

### card

> **card**: `object`

Defined in: [src/types/payouts/payout.type.ts:12](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payouts/payout.type.ts#L12)

#### card\_type

> **card\_type**: `string`

Тип карты (MasterCard, Visa, Mir и т.д.)

#### first6

> **first6**: `string`

Первые 6 цифр номера карты (BIN)

#### issuer\_country?

> `optional` **issuer\_country?**: `string`

Код страны банка-эмитента (ISO 3166-1 alpha-2)

#### issuer\_name?

> `optional` **issuer\_name?**: `string`

Название банка-эмитента

#### last4

> **last4**: `string`

Последние 4 цифры номера карты

***

### type

> **type**: `"bank_card"`

Defined in: [src/types/payouts/payout.type.ts:11](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payouts/payout.type.ts#L11)
