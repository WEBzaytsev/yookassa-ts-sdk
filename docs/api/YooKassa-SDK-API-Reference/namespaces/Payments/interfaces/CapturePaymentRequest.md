[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / CapturePaymentRequest

# Interface: CapturePaymentRequest

Defined in: [src/types/payments/payment.type.ts:300](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/c8dc341ff73a5ece64b0ee18dd5940355be4e506/src/types/payments/payment.type.ts#L300)

Запрос на подтверждение платежа.
Используется при двухстадийной оплате для списания денег.

## See

https://yookassa.ru/developers/api#capture_payment

## Properties

### airline?

> `optional` **airline**: [`IAirline`](../../../../type-aliases/IAirline.md)

Defined in: [src/types/payments/payment.type.ts:313](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/c8dc341ff73a5ece64b0ee18dd5940355be4e506/src/types/payments/payment.type.ts#L313)

Данные для продажи авиабилетов.
Используется только при оплате банковской картой.

***

### amount?

> `optional` **amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/payments/payment.type.ts:305](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/c8dc341ff73a5ece64b0ee18dd5940355be4e506/src/types/payments/payment.type.ts#L305)

Сумма к списанию.
Можно списать сумму меньше, чем была авторизована (частичное подтверждение).
Если не передано, списывается полная сумма платежа.

***

### receipt?

> `optional` **receipt**: [`ReceiptinPaymentType`](../../Receipts/type-aliases/ReceiptinPaymentType.md)

Defined in: [src/types/payments/payment.type.ts:309](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/c8dc341ff73a5ece64b0ee18dd5940355be4e506/src/types/payments/payment.type.ts#L309)

Данные для формирования чека.
Передаются, если вы работаете по 54-ФЗ.

***

### transfers?

> `optional` **transfers**: `object`[]

Defined in: [src/types/payments/payment.type.ts:317](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/c8dc341ff73a5ece64b0ee18dd5940355be4e506/src/types/payments/payment.type.ts#L317)

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

> `optional` **metadata**: [`Metadata`](../../../../interfaces/Metadata.md)

Любые дополнительные данные

#### platform\_fee\_amount?

> `optional` **platform\_fee\_amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Комиссия за проданные товары и услуги, удерживаемая с магазина
