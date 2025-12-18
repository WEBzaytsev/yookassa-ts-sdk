[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / IPayment

# Interface: IPayment

Defined in: [src/types/payments/payment.type.ts:103](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L103)

**Объект платежа***

Объект платежа (`Payment`) содержит всю информацию о платеже, актуальную на текущий момент времени.
Он формируется при создании платежа и приходит в ответ на любой запрос, связанный с платежами.
Объект может содержать параметры и значения, не описанные в Справочнике API. Их следует игнорировать.

## Properties

### amount

> **amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/payments/payment.type.ts:113](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L113)

Сумма платежа. Иногда партнеры ЮKassa берут с пользователя дополнительную комиссию, которая не входит в эту сумму.

***

### authorization\_details?

> `readonly` `optional` **authorization\_details**: [`AuthorizationDetails`](../type-aliases/AuthorizationDetails.md)

Defined in: [src/types/payments/payment.type.ts:185](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L185)

Данные об авторизации платежа при оплате банковской картой.
Присутствуют только для этих способов оплаты:
- банковская карта
- Mir Pay
- SberPay
- T-Pay.

***

### cancellation\_details?

> `readonly` `optional` **cancellation\_details**: [`PaymentCancellationDetails`](PaymentCancellationDetails.md)

Defined in: [src/types/payments/payment.type.ts:176](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L176)

Комментарий к статусу `canceled`
 кто отменил платеж и по какой причине.

[Подробнее про неуспешные платежи](https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments)

***

### captured\_at?

> `readonly` `optional` **captured\_at**: `string`

Defined in: [src/types/payments/payment.type.ts:134](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L134)

Время подтверждения платежа.

Указывается по [UTC](https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F)
и передается в формате [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

Пример: `2017-11-03T11:52:31.827Z`

***

### confirmation?

> `optional` **confirmation**: [`IConfirmation`](../../../../type-aliases/IConfirmation.md)

Defined in: [src/types/payments/payment.type.ts:154](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L154)

Выбранный способ подтверждения платежа. Присутствует, когда платеж ожидает подтверждения от пользователя.
[Подробнее](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#user-confirmation) о сценариях подтверждения.

***

### created\_at

> `readonly` **created\_at**: `string`

Defined in: [src/types/payments/payment.type.ts:141](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L141)

Время создания заказа.
Указывается по [UTC](https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F)
и передается в формате [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

Пример: `2017-11-03T11:52:31.827Z`

***

### deal?

> `optional` **deal**: [`DealType`](../type-aliases/DealType.md)

Defined in: [src/types/payments/payment.type.ts:191](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L191)

Данные о сделке, в составе которой проходит платеж. Присутствует, если вы проводите [Безопасную сделку](https://yookassa.ru/developers/solutions-for-platforms/safe-deal/basics)

***

### description?

> `optional` **description**: `string`

Defined in: [src/types/payments/payment.type.ts:121](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L121)

Описание транзакции (не более 128 символов), которое вы увидите в личном кабинете ЮKassa, а пользователь — при оплате.
Например: `«Оплата заказа № 72 для user@yoomoney.ru»`.

***

### expires\_at?

> `readonly` `optional` **expires\_at**: `string`

Defined in: [src/types/payments/payment.type.ts:149](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L149)

Время, до которого вы можете бесплатно отменить или подтвердить платеж. В указанное время платеж в статусе `waiting_for_capture` будет автоматически отменен.

Указывается по [UTC](https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F)
и передается в формате [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

Пример: `2017-11-03T11:52:31.827Z`

***

### id

> `readonly` **id**: `string`

Defined in: [src/types/payments/payment.type.ts:107](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L107)

Идентификатор платежа в ЮKassa.

***

### income\_amount?

> `readonly` `optional` **income\_amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/payments/payment.type.ts:117](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L117)

Сумма платежа, которую получит магазин, — значение amount за вычетом комиссии ЮKassa.
Если вы партнер и для аутентификации запросов используете OAuth-токен, запросите у магазина право на получение информации о комиссиях при платежах.

***

### invoice\_details?

> `readonly` `optional` **invoice\_details**: `object`

Defined in: [src/types/payments/payment.type.ts:202](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L202)

Данные о выставленном счете, в рамках которого проведен платеж.

#### id?

> `optional` **id**: `string`

Идентификатор счета

***

### merchant\_customer\_id?

> `optional` **merchant\_customer\_id**: `string`

Defined in: [src/types/payments/payment.type.ts:193](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L193)

Идентификатор покупателя в вашей системе, например электронная почта или номер телефона. Не более 200 символов. Присутствует, если вы хотите запомнить банковскую карту и отобразить ее при повторном платеже в [виджете ЮKassa](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/widget/basics)

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `string`\>

Defined in: [src/types/payments/payment.type.ts:170](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L170)

Любые дополнительные данные, которые нужны вам для работы (например, ваш внутренний идентификатор заказа).
Передаются в виде набора пар «ключ-значение» и возвращаются в ответе от ЮKassa.

***Ограничения***: максимум 16 ключей, имя ключа не больше 32 символов,
значение ключа не больше 512 символов, тип данных — строка в формате UTF-8.

***

### paid

> `readonly` **paid**: `boolean`

Defined in: [src/types/payments/payment.type.ts:160](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L160)

Признак оплаты заказа.

***

### payment\_method?

> `readonly` `optional` **payment\_method**: [`IPaymentMethod`](../../../../type-aliases/IPaymentMethod.md)

Defined in: [src/types/payments/payment.type.ts:125](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L125)

[Способ оплаты](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-methods#all), который был использован для этого платежа.

***

### receipt\_registration?

> `readonly` `optional` **receipt\_registration**: `"pending"` \| `"succeeded"` \| `"canceled"`

Defined in: [src/types/payments/payment.type.ts:200](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L200)

Статус регистрации чека. Присутствует, если вы используете решения ЮKassa для отправки чеков.
- `pending` — данные в обработке
- `succeeded` — чек успешно зарегистрирован
- `canceled` — чек зарегистрировать не удалось

***

### recipient?

> `optional` **recipient**: [`IRecipient`](IRecipient.md)

Defined in: [src/types/payments/payment.type.ts:123](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L123)

Получатель платежа.

***

### refundable

> `readonly` **refundable**: `boolean`

Defined in: [src/types/payments/payment.type.ts:162](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L162)

Возможность провести возврат по API.

***

### refunded\_amount?

> `readonly` `optional` **refunded\_amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/payments/payment.type.ts:158](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L158)

Сумма, которая вернулась пользователю. Присутствует, если у этого платежа есть успешные возвраты.

***

### status

> `readonly` **status**: [`PaymentStatus`](../type-aliases/PaymentStatus.md)

Defined in: [src/types/payments/payment.type.ts:111](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L111)

Статус платежа. Возможные значения: `pending`, `waiting_for_capture`, `succeeded` и `canceled`.

***

### test

> `readonly` **test**: `boolean`

Defined in: [src/types/payments/payment.type.ts:156](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L156)

Признак тестовой операции.

***

### transfers?

> `optional` **transfers**: [`TransferPayment`](../type-aliases/TransferPayment.md)[]

Defined in: [src/types/payments/payment.type.ts:189](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L189)

Данные о распределении денег — сколько и в какой магазин нужно перевести. Присутствует, если вы используете [Сплитование платежей](https://yookassa.ru/developers/solutions-for-platforms/split-payments/basics)
