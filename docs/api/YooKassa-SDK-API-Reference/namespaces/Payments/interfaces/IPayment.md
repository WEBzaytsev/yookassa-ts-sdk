[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / IPayment

# Interface: IPayment

Defined in: [src/types/payments/payment.type.ts:104](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L104)

**Объект платежа***

Объект платежа (`Payment`) содержит всю информацию о платеже, актуальную на текущий момент времени.
Он формируется при создании платежа и приходит в ответ на любой запрос, связанный с платежами.
Объект может содержать параметры и значения, не описанные в Справочнике API. Их следует игнорировать.

## Properties

### amount

> **amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/payments/payment.type.ts:114](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L114)

Сумма платежа. Иногда партнеры ЮKassa берут с пользователя дополнительную комиссию, которая не входит в эту сумму.

***

### authorization\_details?

> `readonly` `optional` **authorization\_details?**: [`AuthorizationDetails`](../type-aliases/AuthorizationDetails.md)

Defined in: [src/types/payments/payment.type.ts:186](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L186)

Данные об авторизации платежа при оплате банковской картой.
Присутствуют только для этих способов оплаты:
- банковская карта
- Mir Pay
- SberPay
- T-Pay.

***

### cancellation\_details?

> `readonly` `optional` **cancellation\_details?**: [`PaymentCancellationDetails`](PaymentCancellationDetails.md)

Defined in: [src/types/payments/payment.type.ts:177](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L177)

Комментарий к статусу `canceled`
 кто отменил платеж и по какой причине.

[Подробнее про неуспешные платежи](https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments)

***

### captured\_at?

> `readonly` `optional` **captured\_at?**: `string`

Defined in: [src/types/payments/payment.type.ts:135](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L135)

Время подтверждения платежа.

Указывается по [UTC](https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F)
и передается в формате [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

Пример: `2017-11-03T11:52:31.827Z`

***

### confirmation?

> `optional` **confirmation?**: [`IConfirmation`](../../../../type-aliases/IConfirmation.md)

Defined in: [src/types/payments/payment.type.ts:155](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L155)

Выбранный способ подтверждения платежа. Присутствует, когда платеж ожидает подтверждения от пользователя.
[Подробнее](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#user-confirmation) о сценариях подтверждения.

***

### created\_at

> `readonly` **created\_at**: `string`

Defined in: [src/types/payments/payment.type.ts:142](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L142)

Время создания заказа.
Указывается по [UTC](https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F)
и передается в формате [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

Пример: `2017-11-03T11:52:31.827Z`

***

### deal?

> `optional` **deal?**: [`DealType`](../type-aliases/DealType.md)

Defined in: [src/types/payments/payment.type.ts:192](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L192)

Данные о сделке, в составе которой проходит платеж. Присутствует, если вы проводите [Безопасную сделку](https://yookassa.ru/developers/solutions-for-platforms/safe-deal/basics)

***

### description?

> `optional` **description?**: `string`

Defined in: [src/types/payments/payment.type.ts:122](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L122)

Описание транзакции (не более 128 символов), которое вы увидите в личном кабинете ЮKassa, а пользователь — при оплате.
Например: `«Оплата заказа № 72 для user@yoomoney.ru»`.

***

### expires\_at?

> `readonly` `optional` **expires\_at?**: `string`

Defined in: [src/types/payments/payment.type.ts:150](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L150)

Время, до которого вы можете бесплатно отменить или подтвердить платеж. В указанное время платеж в статусе `waiting_for_capture` будет автоматически отменен.

Указывается по [UTC](https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F)
и передается в формате [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).

Пример: `2017-11-03T11:52:31.827Z`

***

### id

> `readonly` **id**: `string`

Defined in: [src/types/payments/payment.type.ts:108](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L108)

Идентификатор платежа в ЮKassa.

***

### income\_amount?

> `readonly` `optional` **income\_amount?**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/payments/payment.type.ts:118](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L118)

Сумма платежа, которую получит магазин, — значение amount за вычетом комиссии ЮKassa.
Если вы партнер и для аутентификации запросов используете OAuth-токен, запросите у магазина право на получение информации о комиссиях при платежах.

***

### invoice\_details?

> `readonly` `optional` **invoice\_details?**: `object`

Defined in: [src/types/payments/payment.type.ts:203](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L203)

Данные о выставленном счете, в рамках которого проведен платеж.

#### id?

> `optional` **id?**: `string`

Идентификатор счета

***

### merchant\_customer\_id?

> `optional` **merchant\_customer\_id?**: `string`

Defined in: [src/types/payments/payment.type.ts:194](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L194)

Идентификатор покупателя в вашей системе, например электронная почта или номер телефона. Не более 200 символов. Присутствует, если вы хотите запомнить банковскую карту и отобразить ее при повторном платеже в [виджете ЮKassa](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/widget/basics)

***

### metadata?

> `optional` **metadata?**: [`Metadata`](../../../../interfaces/Metadata.md)

Defined in: [src/types/payments/payment.type.ts:171](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L171)

Любые дополнительные данные, которые нужны вам для работы (например, ваш внутренний идентификатор заказа).
Передаются в виде набора пар «ключ-значение» и возвращаются в ответе от ЮKassa.

***Ограничения***: максимум 16 ключей, имя ключа не больше 32 символов,
значение ключа не больше 512 символов, тип данных — строка в формате UTF-8.

***

### paid

> `readonly` **paid**: `boolean`

Defined in: [src/types/payments/payment.type.ts:161](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L161)

Признак оплаты заказа.

***

### payment\_method?

> `readonly` `optional` **payment\_method?**: [`IPaymentMethod`](../../../../type-aliases/IPaymentMethod.md)

Defined in: [src/types/payments/payment.type.ts:126](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L126)

[Способ оплаты](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-methods#all), который был использован для этого платежа.

***

### receipt\_registration?

> `readonly` `optional` **receipt\_registration?**: `"pending"` \| `"succeeded"` \| `"canceled"`

Defined in: [src/types/payments/payment.type.ts:201](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L201)

Статус регистрации чека. Присутствует, если вы используете решения ЮKassa для отправки чеков.
- `pending` — данные в обработке
- `succeeded` — чек успешно зарегистрирован
- `canceled` — чек зарегистрировать не удалось

***

### recipient?

> `optional` **recipient?**: [`IRecipient`](IRecipient.md)

Defined in: [src/types/payments/payment.type.ts:124](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L124)

Получатель платежа.

***

### refundable

> `readonly` **refundable**: `boolean`

Defined in: [src/types/payments/payment.type.ts:163](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L163)

Возможность провести возврат по API.

***

### refunded\_amount?

> `readonly` `optional` **refunded\_amount?**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/payments/payment.type.ts:159](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L159)

Сумма, которая вернулась пользователю. Присутствует, если у этого платежа есть успешные возвраты.

***

### status

> `readonly` **status**: [`PaymentStatus`](../type-aliases/PaymentStatus.md)

Defined in: [src/types/payments/payment.type.ts:112](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L112)

Статус платежа. Возможные значения: `pending`, `waiting_for_capture`, `succeeded` и `canceled`.

***

### test

> `readonly` **test**: `boolean`

Defined in: [src/types/payments/payment.type.ts:157](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L157)

Признак тестовой операции.

***

### transfers?

> `optional` **transfers?**: [`TransferPayment`](../type-aliases/TransferPayment.md)[]

Defined in: [src/types/payments/payment.type.ts:190](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L190)

Данные о распределении денег — сколько и в какой магазин нужно перевести. Присутствует, если вы используете [Сплитование платежей](https://yookassa.ru/developers/solutions-for-platforms/split-payments/basics)
