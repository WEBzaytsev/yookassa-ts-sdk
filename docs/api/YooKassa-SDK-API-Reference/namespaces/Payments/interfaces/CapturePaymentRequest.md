[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / CapturePaymentRequest

# Interface: CapturePaymentRequest

Defined in: [src/types/payments/payment.type.ts:293](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L293)

Подтверждение двухстадийного платежа (списание).

## See

https://yookassa.ru/developers/api#capture_payment

## Properties

### airline?

> `optional` **airline?**: [`IAirline`](../../../../type-aliases/IAirline.md)

Defined in: [src/types/payments/payment.type.ts:302](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L302)

Данные авиабилетов. Только для карты

***

### amount?

> `optional` **amount?**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/payments/payment.type.ts:298](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L298)

Сумма списания. Меньше авторизованной — частичное подтверждение.
Без поля — полная сумма.

***

### receipt?

> `optional` **receipt?**: [`ReceiptinPaymentType`](../../Receipts/type-aliases/ReceiptinPaymentType.md)

Defined in: [src/types/payments/payment.type.ts:300](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L300)

Данные чека по 54-ФЗ

***

### transfers?

> `optional` **transfers?**: `object`[]

Defined in: [src/types/payments/payment.type.ts:304](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L304)

Распределение при сплитовании

#### account\_id

> **account\_id**: `string`

ID магазина-получателя

#### amount

> **amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Сумма перевода

#### description?

> `optional` **description?**: `string`

Описание (до 128 символов)

#### metadata?

> `optional` **metadata?**: [`Metadata`](../../../../interfaces/Metadata.md)

Произвольные данные

#### platform\_fee\_amount?

> `optional` **platform\_fee\_amount?**: [`IAmount`](../../../../interfaces/IAmount.md)

Комиссия платформы
