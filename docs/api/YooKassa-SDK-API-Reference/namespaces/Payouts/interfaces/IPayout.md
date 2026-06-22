[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payouts](../README.md) / IPayout

# Interface: IPayout

Defined in: [src/types/payouts/payout.type.ts:112](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payout.type.ts#L112)

Объект выплаты.

## See

https://yookassa.ru/developers/api#payout_object

## Properties

### amount

> **amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/payouts/payout.type.ts:116](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payout.type.ts#L116)

Сумма выплаты

***

### cancellation\_details?

> `optional` **cancellation\_details?**: `object`

Defined in: [src/types/payouts/payout.type.ts:133](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payout.type.ts#L133)

Комментарий к статусу `canceled`

#### party

> **party**: [`PayoutCancellationParty`](../type-aliases/PayoutCancellationParty.md)

#### reason

> **reason**: [`PayoutCancellationReason`](../type-aliases/PayoutCancellationReason.md)

***

### created\_at

> **created\_at**: `string`

Defined in: [src/types/payouts/payout.type.ts:124](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payout.type.ts#L124)

Время создания выплаты (ISO 8601)

***

### deal?

> `optional` **deal?**: `object`

Defined in: [src/types/payouts/payout.type.ts:131](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payout.type.ts#L131)

Сделка, в рамках которой проведена выплата (Безопасная сделка)

#### id

> **id**: `string`

***

### description?

> `optional` **description?**: `string`

Defined in: [src/types/payouts/payout.type.ts:122](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payout.type.ts#L122)

Описание транзакции (до 128 символов)

***

### id

> **id**: `string`

Defined in: [src/types/payouts/payout.type.ts:114](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payout.type.ts#L114)

Идентификатор выплаты

***

### metadata?

> `optional` **metadata?**: [`Metadata`](../../../../interfaces/Metadata.md)

Defined in: [src/types/payouts/payout.type.ts:137](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payout.type.ts#L137)

***

### payout\_destination

> **payout\_destination**: [`PayoutDestination`](../type-aliases/PayoutDestination.md)

Defined in: [src/types/payouts/payout.type.ts:120](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payout.type.ts#L120)

Данные платёжного средства получателя

***

### status

> **status**: [`PayoutStatus`](../type-aliases/PayoutStatus.md)

Defined in: [src/types/payouts/payout.type.ts:118](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payout.type.ts#L118)

Статус выплаты

***

### succeeded\_at?

> `optional` **succeeded\_at?**: `string`

Defined in: [src/types/payouts/payout.type.ts:129](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payout.type.ts#L129)

Время успешного проведения выплаты (ISO 8601).
Обязателен для выплат в статусе `succeeded`.

***

### test

> **test**: `boolean`

Defined in: [src/types/payouts/payout.type.ts:139](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payouts/payout.type.ts#L139)

Тестовая выплата
