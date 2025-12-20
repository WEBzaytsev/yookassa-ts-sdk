[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodB2b\_sberbank

# Interface: IPaymentMethodB2b\_sberbank

Defined in: [src/types/payments/paymentMethod.type.ts:250](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/types/payments/paymentMethod.type.ts#L250)

СберБанк Бизнес Онлайн

## Properties

### payment\_purpose

> **payment\_purpose**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:253](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/types/payments/paymentMethod.type.ts#L253)

Назначение платежа (не больше 210 символов).

***

### type

> **type**: [`b2b_sberbank`](../enumerations/PaymentMethodsEnum.md#b2b_sberbank)

Defined in: [src/types/payments/paymentMethod.type.ts:251](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/types/payments/paymentMethod.type.ts#L251)

***

### vat\_data

> **vat\_data**: `object`

Defined in: [src/types/payments/paymentMethod.type.ts:255](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/types/payments/paymentMethod.type.ts#L255)

Данные о налоге на добавленную стоимость (НДС). Платеж может облагаться или не облагаться НДС. Товары могут облагаться по одной ставке НДС или по разным.

#### amount?

> `optional` **amount**: [`IAmount`](IAmount.md)

Сумма НДС.

#### type

> **type**: `"mixed"` \| `"calculated"` \| `"untaxed"`

Код способа расчета НДС.
