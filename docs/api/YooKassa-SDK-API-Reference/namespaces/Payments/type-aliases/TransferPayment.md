[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / TransferPayment

# Type Alias: TransferPayment

> **TransferPayment** = `Pick`\<[`IPayment`](../interfaces/IPayment.md), `"amount"` \| `"description"` \| `"metadata"`\> & `object`

Defined in: [src/types/payments/payment.type.ts:73](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L73)

Распределение денег между магазинами

## Type Declaration

### account\_id

> **account\_id**: `string`

ID магазина-получателя. См. [Продавцы](https://yookassa.ru/my/marketplace/sellers) в ЛК (shopId)

### platform\_fee\_amount

> **platform\_fee\_amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Комиссия платформы, удерживаемая с магазина

### status

> **status**: [`PaymentStatus`](PaymentStatus.md)

Статус распределения: `pending`, `waiting_for_capture`, `succeeded`, `canceled`
