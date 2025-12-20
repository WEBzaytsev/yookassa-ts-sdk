[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodB2b\_sberbank

# Interface: IPaymentMethodB2b\_sberbank

Defined in: [src/types/payments/paymentMethod.type.ts:258](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/payments/paymentMethod.type.ts#L258)

СберБанк Бизнес Онлайн

## Properties

### payment\_purpose

> **payment\_purpose**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:261](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/payments/paymentMethod.type.ts#L261)

Назначение платежа (не больше 210 символов).

***

### type

> **type**: [`b2b_sberbank`](../enumerations/PaymentMethodsEnum.md#b2b_sberbank)

Defined in: [src/types/payments/paymentMethod.type.ts:259](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/payments/paymentMethod.type.ts#L259)

***

### vat\_data

> **vat\_data**: `object`

Defined in: [src/types/payments/paymentMethod.type.ts:263](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/payments/paymentMethod.type.ts#L263)

Данные о налоге на добавленную стоимость (НДС). Платеж может облагаться или не облагаться НДС. Товары могут облагаться по одной ставке НДС или по разным.

#### amount?

> `optional` **amount**: [`IAmount`](IAmount.md)

Сумма НДС.

#### type

> **type**: `"mixed"` \| `"calculated"` \| `"untaxed"`

Код способа расчета НДС.
