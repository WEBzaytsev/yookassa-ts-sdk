[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Refunds](../README.md) / IRefundSource

# Interface: IRefundSource

Defined in: [src/types/refunds/refund.type.ts:27](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/refunds/refund.type.ts#L27)

## Properties

### account\_id

> **account\_id**: `string`

Defined in: [src/types/refunds/refund.type.ts:31](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/refunds/refund.type.ts#L31)

Идентификатор магазина, для которого вы хотите провести возврат. Выдается ЮKassa, отображается в разделе Продавцы личного кабинета (столбец shopId).

***

### amount

> **amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/refunds/refund.type.ts:33](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/refunds/refund.type.ts#L33)

Сумма возврата.

***

### platform\_fee\_amount?

> `optional` **platform\_fee\_amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/refunds/refund.type.ts:35](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/refunds/refund.type.ts#L35)

Комиссия, которую вы удержали при оплате, и хотите вернуть.
