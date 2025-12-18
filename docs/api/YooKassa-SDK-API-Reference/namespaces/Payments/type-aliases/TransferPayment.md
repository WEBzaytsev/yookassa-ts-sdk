[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / TransferPayment

# Type Alias: TransferPayment

> **TransferPayment** = `Pick`\<[`IPayment`](../interfaces/IPayment.md), `"amount"` \| `"description"` \| `"metadata"`\> & `object`

Defined in: [src/types/payments/payment.type.ts:76](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/421052f4b89e2476891b70faab4f1b4ec3acb883/src/types/payments/payment.type.ts#L76)

Данные о распределении денег — сколько и в какой магазин нужно перевести.

## Type Declaration

### account\_id

> **account\_id**: `string`

Идентификатор магазина, в пользу которого вы принимаете оплату. Выдается ЮKassa, отображается в разделе [Продавцы](https://yookassa.ru/my/marketplace/sellers) личного кабинета (столбец shopId).

### platform\_fee\_amount

> **platform\_fee\_amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Комиссия за проданные товары и услуги, которая удерживается с магазина в вашу пользу.

### status

> **status**: [`PaymentStatus`](PaymentStatus.md)

Статус распределения денег между магазинами. Возможные значения: `pending`, `waiting_for_capture`, `succeeded`, `canceled`.
