[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / CapturePaymentRequest

# Interface: CapturePaymentRequest

Defined in: [src/types/payments/payment.type.ts:306](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L306)

Запрос на подтверждение платежа.
Используется при двухстадийной оплате для списания денег.

## See

https://yookassa.ru/developers/api#capture_payment

## Properties

### airline?

> `optional` **airline?**: [`IAirline`](../../../../type-aliases/IAirline.md)

Defined in: [src/types/payments/payment.type.ts:319](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L319)

Данные для продажи авиабилетов.
Используется только при оплате банковской картой.

***

### amount?

> `optional` **amount?**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/payments/payment.type.ts:311](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L311)

Сумма к списанию.
Можно списать сумму меньше, чем была авторизована (частичное подтверждение).
Если не передано, списывается полная сумма платежа.

***

### receipt?

> `optional` **receipt?**: [`ReceiptinPaymentType`](../../Receipts/type-aliases/ReceiptinPaymentType.md)

Defined in: [src/types/payments/payment.type.ts:315](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L315)

Данные для формирования чека.
Передаются, если вы работаете по 54-ФЗ.

***

### transfers?

> `optional` **transfers?**: `object`[]

Defined in: [src/types/payments/payment.type.ts:323](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L323)

Данные о распределении денег между магазинами.
Используется при сплитовании платежей.

#### account\_id

> **account\_id**: `string`

Идентификатор магазина, в пользу которого принимается оплата

#### amount

> **amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Сумма, которую необходимо перечислить магазину

#### description?

> `optional` **description?**: `string`

Описание транзакции (до 128 символов)

#### metadata?

> `optional` **metadata?**: [`Metadata`](../../../../interfaces/Metadata.md)

Любые дополнительные данные

#### platform\_fee\_amount?

> `optional` **platform\_fee\_amount?**: [`IAmount`](../../../../interfaces/IAmount.md)

Комиссия за проданные товары и услуги, удерживаемая с магазина
