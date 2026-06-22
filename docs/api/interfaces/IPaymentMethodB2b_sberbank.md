[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodB2b\_sberbank

# Interface: IPaymentMethodB2b\_sberbank

Defined in: [src/types/payments/paymentMethod.type.ts:288](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L288)

СберБанк Бизнес Онлайн

## Properties

### payment\_purpose

> **payment\_purpose**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:291](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L291)

Назначение платежа (не больше 210 символов).

***

### type

> **type**: [`b2b_sberbank`](../enumerations/PaymentMethodsEnum.md#b2b_sberbank)

Defined in: [src/types/payments/paymentMethod.type.ts:289](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L289)

***

### vat\_data

> **vat\_data**: `object`

Defined in: [src/types/payments/paymentMethod.type.ts:293](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L293)

Данные о налоге на добавленную стоимость (НДС). Платеж может облагаться или не облагаться НДС. Товары могут облагаться по одной ставке НДС или по разным.

#### amount?

> `optional` **amount?**: [`IAmount`](IAmount.md)

Сумма НДС.

#### type

> **type**: `"mixed"` \| `"calculated"` \| `"untaxed"`

Код способа расчета НДС.
