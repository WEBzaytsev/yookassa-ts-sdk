[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / CapturePaymentRequest

# Interface: CapturePaymentRequest

Defined in: [src/types/payments/payment.type.ts:294](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L294)

Запрос на подтверждение платежа.
Используется при двухстадийной оплате для списания денег.

## See

https://yookassa.ru/developers/api#capture_payment

## Properties

### airline?

> `optional` **airline**: [`IAirline`](../../../../type-aliases/IAirline.md)

Defined in: [src/types/payments/payment.type.ts:307](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L307)

Данные для продажи авиабилетов.
Используется только при оплате банковской картой.

***

### amount?

> `optional` **amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/payments/payment.type.ts:299](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L299)

Сумма к списанию.
Можно списать сумму меньше, чем была авторизована (частичное подтверждение).
Если не передано, списывается полная сумма платежа.

***

### receipt?

> `optional` **receipt**: [`ReceiptinPaymentType`](../../Receipts/type-aliases/ReceiptinPaymentType.md)

Defined in: [src/types/payments/payment.type.ts:303](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L303)

Данные для формирования чека.
Передаются, если вы работаете по 54-ФЗ.

***

### transfers?

> `optional` **transfers**: `object`[]

Defined in: [src/types/payments/payment.type.ts:311](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/payment.type.ts#L311)

Данные о распределении денег между магазинами.
Используется при сплитовании платежей.

#### account\_id

> **account\_id**: `string`

Идентификатор магазина, в пользу которого принимается оплата

#### amount

> **amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Сумма, которую необходимо перечислить магазину

#### description?

> `optional` **description**: `string`

Описание транзакции (до 128 символов)

#### metadata?

> `optional` **metadata**: `Record`\<`string`, `string`\>

Любые дополнительные данные

#### platform\_fee\_amount?

> `optional` **platform\_fee\_amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Комиссия за проданные товары и услуги, удерживаемая с магазина
