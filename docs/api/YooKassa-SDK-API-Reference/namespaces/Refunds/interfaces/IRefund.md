[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Refunds](../README.md) / IRefund

# Interface: IRefund

Defined in: [src/types/refunds/refund.type.ts:46](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/refunds/refund.type.ts#L46)

****Объект возврата****
Объект возврата (`Refund`) содержит актуальную информацию о возврате успешного платежа.
Он приходит в ответ на любой запрос, связанный с возвратами.
Объект может содержать параметры и значения, не описанные в этом Справочнике API. Их следует игнорировать.

## Properties

### amount

> **amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/refunds/refund.type.ts:78](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/refunds/refund.type.ts#L78)

Сумма, возвращенная пользователю.

***

### cancellation\_details?

> `readonly` `optional` **cancellation\_details**: [`IRefundCancellationDetails`](IRefundCancellationDetails.md)

Defined in: [src/types/refunds/refund.type.ts:64](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/refunds/refund.type.ts#L64)

Комментарий к статусу `canceled`: кто отменил возврат и по какой причине.

***

### created\_at

> `readonly` **created\_at**: `string`

Defined in: [src/types/refunds/refund.type.ts:76](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/refunds/refund.type.ts#L76)

Время создания возврата. Указывается по UTC и передается в формате ISO 8601, например `2017-11-03T11:52:31.827Z`

***

### deal?

> `optional` **deal**: `RefundDealType`

Defined in: [src/types/refunds/refund.type.ts:89](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/refunds/refund.type.ts#L89)

Данные о сделке, в составе которой проходит возврат.
Присутствует, если вы проводите [Безопасную сделку](https://yookassa.ru/developers/solutions-for-platforms/safe-deal/basics).

***

### description?

> `optional` **description**: `string`

Defined in: [src/types/refunds/refund.type.ts:80](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/refunds/refund.type.ts#L80)

Основание для возврата денег пользователю.

***

### id

> `readonly` **id**: `string`

Defined in: [src/types/refunds/refund.type.ts:48](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/refunds/refund.type.ts#L48)

Идентификатор возврата платежа в ЮKassa.

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `string`\>

Defined in: [src/types/refunds/refund.type.ts:101](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/refunds/refund.type.ts#L101)

Любые дополнительные данные, которые нужны вам для работы.

***

### payment\_id

> **payment\_id**: `string`

Defined in: [src/types/refunds/refund.type.ts:50](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/refunds/refund.type.ts#L50)

Идентификатор платежа в ЮKassa.

***

### receipt\_registration?

> `readonly` `optional` **receipt\_registration**: [`ReceiptRegistrationStatus`](../../Receipts/type-aliases/ReceiptRegistrationStatus.md)

Defined in: [src/types/refunds/refund.type.ts:72](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/refunds/refund.type.ts#L72)

Статус регистрации чека. Возможные значения:
- `pending` — данные в обработке;
- `succeeded` — чек успешно зарегистрирован;
- `canceled` — чек зарегистрировать не удалось; если используете Чеки от ЮKassa, обратитесь в техническую поддержку, в остальных случаях сформируйте чек вручную.
Присутствует, если вы используете [решения ЮKassa для отправки чеков](https://yookassa.ru/developers/payment-acceptance/receipts/basics) в налоговую.

***

### refund\_authorization\_details?

> `readonly` `optional` **refund\_authorization\_details**: `object`

Defined in: [src/types/refunds/refund.type.ts:96](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/refunds/refund.type.ts#L96)

Данные об авторизации возврата при оплате банковской картой.
Присутствует для возвратов по платежам банковской картой.

#### rrn?

> `optional` **rrn**: `string`

Retrieval Reference Number — уникальный идентификатор транзакции в системе эмитента

***

### refund\_method?

> `readonly` `optional` **refund\_method**: [`RefundMethod`](../../../../type-aliases/RefundMethod.md)

Defined in: [src/types/refunds/refund.type.ts:91](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/refunds/refund.type.ts#L91)

Детали возврата. Зависят от способа оплаты, который использовался при проведении платежа.

***

### sources?

> `optional` **sources**: [`IRefundSource`](IRefundSource.md)[]

Defined in: [src/types/refunds/refund.type.ts:85](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/refunds/refund.type.ts#L85)

Данные о том, с какого магазина и какую сумму нужно удержать для проведения возврата.
Присутствует, если вы используете [Сплитование платежей](https://yookassa.ru/developers/solutions-for-platforms/split-payments/basics).

***

### status

> `readonly` **status**: [`RefundStatus`](../type-aliases/RefundStatus.md)

Defined in: [src/types/refunds/refund.type.ts:62](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/refunds/refund.type.ts#L62)

Статус возврата платежа. Возможные значения:
- `pending` — возврат создан, но пока еще обрабатывается;
- `succeeded` — возврат успешно завершен, указанная в запросе сумма переведена на платежное средство пользователя (финальный и неизменяемый статус);
- `canceled` — возврат отменен, инициатор и причина отмены указаны в объекте cancellation_details (финальный и неизменяемый статус).

В зависимости от вашего процесса часть статусов может быть пропущена, но их последовательность не меняется.

Чтобы узнать статус возврата, периодически отправляйте запросы, чтобы получить информацию о возврате, или подождите, когда придет уведомление от ЮKassa.

#### See

https://yookassa.ru/developers/payment-acceptance/after-the-payment/refunds#status
