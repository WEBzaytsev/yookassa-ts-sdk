[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Refunds](../README.md) / IRefund

# Interface: IRefund

Defined in: [src/types/refunds/refund.type.ts:47](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/refunds/refund.type.ts#L47)

**Объект возврата**

Актуальная информация о возврате успешного платежа.
Приходит в ответ на любой запрос по возвратам.
Неописанные в справочнике поля игнорируйте.

## Properties

### amount

> **amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/refunds/refund.type.ts:78](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/refunds/refund.type.ts#L78)

Сумма, возвращённая пользователю

***

### cancellation\_details?

> `readonly` `optional` **cancellation\_details?**: [`IRefundCancellationDetails`](IRefundCancellationDetails.md)

Defined in: [src/types/refunds/refund.type.ts:64](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/refunds/refund.type.ts#L64)

Комментарий к `canceled`: кто и почему отменил

***

### created\_at

> `readonly` **created\_at**: `string`

Defined in: [src/types/refunds/refund.type.ts:76](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/refunds/refund.type.ts#L76)

Время создания (UTC, ISO 8601). Пример: `2017-11-03T11:52:31.827Z`

***

### deal?

> `optional` **deal?**: `RefundDealType`

Defined in: [src/types/refunds/refund.type.ts:90](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/refunds/refund.type.ts#L90)

Сделка возврата.
Есть при [Безопасной сделке](https://yookassa.ru/developers/solutions-for-platforms/safe-deal/basics).

***

### description?

> `optional` **description?**: `string`

Defined in: [src/types/refunds/refund.type.ts:80](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/refunds/refund.type.ts#L80)

Основание возврата

***

### id

> `readonly` **id**: `string`

Defined in: [src/types/refunds/refund.type.ts:49](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/refunds/refund.type.ts#L49)

ID возврата в ЮKassa

***

### metadata?

> `optional` **metadata?**: [`Metadata`](../../../../interfaces/Metadata.md)

Defined in: [src/types/refunds/refund.type.ts:102](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/refunds/refund.type.ts#L102)

Произвольные данные

***

### payment\_id

> **payment\_id**: `string`

Defined in: [src/types/refunds/refund.type.ts:51](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/refunds/refund.type.ts#L51)

ID платежа в ЮKassa

***

### receipt\_registration?

> `readonly` `optional` **receipt\_registration?**: [`ReceiptRegistrationStatus`](../../Receipts/type-aliases/ReceiptRegistrationStatus.md)

Defined in: [src/types/refunds/refund.type.ts:72](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/refunds/refund.type.ts#L72)

Статус регистрации чека:
- `pending` — в обработке;
- `succeeded` — зарегистрирован;
- `canceled` — не зарегистрирован; для Чеков ЮKassa — в поддержку, иначе — вручную.
Есть при [отправке чеков через ЮKassa](https://yookassa.ru/developers/payment-acceptance/receipts/basics).

***

### refund\_authorization\_details?

> `readonly` `optional` **refund\_authorization\_details?**: `object`

Defined in: [src/types/refunds/refund.type.ts:97](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/refunds/refund.type.ts#L97)

Авторизация возврата по банковской карте.
Есть для возвратов по карточным платежам.

#### rrn?

> `optional` **rrn?**: `string`

RRN — ID транзакции у эмитента

***

### refund\_method?

> `readonly` `optional` **refund\_method?**: [`RefundMethod`](../../../../type-aliases/RefundMethod.md)

Defined in: [src/types/refunds/refund.type.ts:92](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/refunds/refund.type.ts#L92)

Детали возврата — зависят от способа оплаты платежа

***

### sources?

> `optional` **sources?**: [`IRefundSource`](IRefundSource.md)[]

Defined in: [src/types/refunds/refund.type.ts:85](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/refunds/refund.type.ts#L85)

Магазин и сумма удержания для возврата.
Есть при [Сплитовании платежей](https://yookassa.ru/developers/solutions-for-platforms/split-payments/basics).

***

### status

> `readonly` **status**: [`RefundStatus`](../type-aliases/RefundStatus.md)

Defined in: [src/types/refunds/refund.type.ts:62](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/refunds/refund.type.ts#L62)

Статус возврата:
- `pending` — создан, обрабатывается;
- `succeeded` — завершён, сумма переведена пользователю (финальный);
- `canceled` — отменён, детали в `cancellation_details` (финальный).

Часть статусов может пропускаться, порядок не меняется.
Статус — опрос API или уведомление от ЮKassa.

#### See

https://yookassa.ru/developers/payment-acceptance/after-the-payment/refunds#status
