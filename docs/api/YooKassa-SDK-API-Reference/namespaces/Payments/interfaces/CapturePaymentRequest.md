[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / CapturePaymentRequest

# Interface: CapturePaymentRequest

Defined in: [src/types/payments/payment.type.ts:285](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/types/payments/payment.type.ts#L285)

Запрос на подтверждение платежа.
Используется при двухстадийной оплате для списания денег.

## See

https://yookassa.ru/developers/api#capture_payment

## Properties

### airline?

> `optional` **airline**: [`IAirline`](../../../../type-aliases/IAirline.md)

Defined in: [src/types/payments/payment.type.ts:298](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/types/payments/payment.type.ts#L298)

Данные для продажи авиабилетов.
Используется только при оплате банковской картой.

***

### amount?

> `optional` **amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/payments/payment.type.ts:290](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/types/payments/payment.type.ts#L290)

Сумма к списанию.
Можно списать сумму меньше, чем была авторизована (частичное подтверждение).
Если не передано, списывается полная сумма платежа.

***

### receipt?

> `optional` **receipt**: [`ReceiptinPaymentType`](../../Receipts/type-aliases/ReceiptinPaymentType.md)

Defined in: [src/types/payments/payment.type.ts:294](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/types/payments/payment.type.ts#L294)

Данные для формирования чека.
Передаются, если вы работаете по 54-ФЗ.

***

### transfers?

> `optional` **transfers**: `object`[]

Defined in: [src/types/payments/payment.type.ts:302](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/types/payments/payment.type.ts#L302)

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
