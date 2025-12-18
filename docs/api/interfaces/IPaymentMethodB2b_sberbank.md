[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodB2b\_sberbank

# Interface: IPaymentMethodB2b\_sberbank

Defined in: [src/types/payments/paymentMethod.type.ts:216](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentMethod.type.ts#L216)

СберБанк Бизнес Онлайн

## Properties

### payment\_purpose

> **payment\_purpose**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:219](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentMethod.type.ts#L219)

Назначение платежа (не больше 210 символов).

***

### type

> **type**: [`b2b_sberbank`](../enumerations/PaymentMethodsEnum.md#b2b_sberbank)

Defined in: [src/types/payments/paymentMethod.type.ts:217](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentMethod.type.ts#L217)

***

### vat\_data

> **vat\_data**: `object`

Defined in: [src/types/payments/paymentMethod.type.ts:221](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentMethod.type.ts#L221)

Данные о налоге на добавленную стоимость (НДС). Платеж может облагаться или не облагаться НДС. Товары могут облагаться по одной ставке НДС или по разным.

#### amount?

> `optional` **amount**: [`IAmount`](IAmount.md)

Сумма НДС.

#### type

> **type**: `"mixed"` \| `"calculated"` \| `"untaxed"`

Код способа расчета НДС.
