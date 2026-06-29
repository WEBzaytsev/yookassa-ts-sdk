[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Refunds](../README.md) / IRefundSource

# Interface: IRefundSource

Defined in: [src/types/refunds/refund.type.ts:27](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/refunds/refund.type.ts#L27)

## Properties

### account\_id

> **account\_id**: `string`

Defined in: [src/types/refunds/refund.type.ts:31](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/refunds/refund.type.ts#L31)

ID магазина для возврата. Выдаёт ЮKassa, см. раздел «Продавцы» в ЛК (столбец shopId).

***

### amount

> **amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/refunds/refund.type.ts:33](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/refunds/refund.type.ts#L33)

Сумма возврата

***

### platform\_fee\_amount?

> `optional` **platform\_fee\_amount?**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/refunds/refund.type.ts:35](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/refunds/refund.type.ts#L35)

Комиссия, удержанная при оплате и подлежащая возврату
