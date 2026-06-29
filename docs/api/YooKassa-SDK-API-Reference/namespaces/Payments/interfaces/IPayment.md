[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / IPayment

# Interface: IPayment

Defined in: [src/types/payments/payment.type.ts:100](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L100)

**Объект платежа**

Актуальная информация о платеже. Формируется при создании,
приходит в любом ответе по платежам. Неописанные поля игнорируйте.

## Properties

### amount

> **amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/payments/payment.type.ts:106](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L106)

Сумма платежа. Комиссия партнёра сверх суммы не входит

***

### authorization\_details?

> `readonly` `optional` **authorization\_details?**: [`AuthorizationDetails`](../type-aliases/AuthorizationDetails.md)

Defined in: [src/types/payments/payment.type.ts:161](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L161)

Авторизация при оплате картой, Mir Pay, SberPay, T-Pay

***

### cancellation\_details?

> `readonly` `optional` **cancellation\_details?**: [`PaymentCancellationDetails`](PaymentCancellationDetails.md)

Defined in: [src/types/payments/payment.type.ts:159](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L159)

Комментарий к `canceled`.

#### See

[Неуспешные платежи](https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments)

***

### captured\_at?

> `readonly` `optional` **captured\_at?**: `string`

Defined in: [src/types/payments/payment.type.ts:125](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L125)

Время подтверждения ([UTC](https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F), [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)).
Пример: `2017-11-03T11:52:31.827Z`

***

### confirmation?

> `optional` **confirmation?**: [`IConfirmation`](../../../../type-aliases/IConfirmation.md)

Defined in: [src/types/payments/payment.type.ts:141](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L141)

Сценарий подтверждения при ожидании действий пользователя.

#### See

[Подтверждение](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#user-confirmation)

***

### created\_at

> `readonly` **created\_at**: `string`

Defined in: [src/types/payments/payment.type.ts:130](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L130)

Время создания ([UTC](https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F), [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)).
Пример: `2017-11-03T11:52:31.827Z`

***

### deal?

> `optional` **deal?**: [`DealType`](../type-aliases/DealType.md)

Defined in: [src/types/payments/payment.type.ts:169](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L169)

Сделка платежа. Есть при [Безопасной сделке](https://yookassa.ru/developers/solutions-for-platforms/safe-deal/basics).

***

### description?

> `optional` **description?**: `string`

Defined in: [src/types/payments/payment.type.ts:116](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L116)

Описание транзакции (до 128 символов) в ЛК и при оплате.
Пример: «Оплата заказа № 72 для user@yoomoney.ru».

***

### expires\_at?

> `readonly` `optional` **expires\_at?**: `string`

Defined in: [src/types/payments/payment.type.ts:136](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L136)

Срок бесплатной отмены или подтверждения. После — автоотмена `waiting_for_capture`.
([UTC](https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F), [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)).
Пример: `2017-11-03T11:52:31.827Z`

***

### id

> `readonly` **id**: `string`

Defined in: [src/types/payments/payment.type.ts:102](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L102)

ID платежа в ЮKassa

***

### income\_amount?

> `readonly` `optional` **income\_amount?**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/payments/payment.type.ts:111](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L111)

Сумма к зачислению магазину (`amount` минус комиссия ЮKassa).
При OAuth запросите у магазина право на данные о комиссиях.

***

### invoice\_details?

> `readonly` `optional` **invoice\_details?**: `object`

Defined in: [src/types/payments/payment.type.ts:183](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L183)

Счёт, в рамках которого проведён платёж

#### id?

> `optional` **id?**: `string`

ID счёта

***

### merchant\_customer\_id?

> `optional` **merchant\_customer\_id?**: `string`

Defined in: [src/types/payments/payment.type.ts:174](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L174)

ID покупателя в вашей системе (email, телефон). До 200 символов.
Для сохранения карты в [виджете](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/widget/basics).

***

### metadata?

> `optional` **metadata?**: [`Metadata`](../../../../interfaces/Metadata.md)

Defined in: [src/types/payments/payment.type.ts:154](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L154)

Произвольные данные в парах «ключ–значение». ЮKassa возвращает их в ответе.
До 16 ключей; имя — до 32 символов; значение — до 512; UTF-8.

***

### paid

> `readonly` **paid**: `boolean`

Defined in: [src/types/payments/payment.type.ts:147](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L147)

Признак оплаты заказа

***

### payment\_method?

> `readonly` `optional` **payment\_method?**: [`IPaymentMethod`](../../../../type-aliases/IPaymentMethod.md)

Defined in: [src/types/payments/payment.type.ts:120](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L120)

[Способ оплаты](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-methods#all)

***

### receipt\_registration?

> `readonly` `optional` **receipt\_registration?**: `"pending"` \| `"succeeded"` \| `"canceled"`

Defined in: [src/types/payments/payment.type.ts:181](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L181)

Статус регистрации чека:
- `pending` — в обработке;
- `succeeded` — зарегистрирован;
- `canceled` — не зарегистрирован.

***

### recipient?

> `optional` **recipient?**: [`IRecipient`](IRecipient.md)

Defined in: [src/types/payments/payment.type.ts:118](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L118)

Получатель платежа

***

### refundable

> `readonly` **refundable**: `boolean`

Defined in: [src/types/payments/payment.type.ts:149](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L149)

Возможность возврата по API

***

### refunded\_amount?

> `readonly` `optional` **refunded\_amount?**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/payments/payment.type.ts:145](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L145)

Сумма успешных возвратов

***

### status

> `readonly` **status**: [`PaymentStatus`](../type-aliases/PaymentStatus.md)

Defined in: [src/types/payments/payment.type.ts:104](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L104)

Статус: `pending`, `waiting_for_capture`, `succeeded`, `canceled`

***

### test

> `readonly` **test**: `boolean`

Defined in: [src/types/payments/payment.type.ts:143](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L143)

Тестовая операция

***

### transfers?

> `optional` **transfers?**: [`TransferPayment`](../type-aliases/TransferPayment.md)[]

Defined in: [src/types/payments/payment.type.ts:165](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L165)

Распределение денег. Есть при [Сплитовании](https://yookassa.ru/developers/solutions-for-platforms/split-payments/basics).
