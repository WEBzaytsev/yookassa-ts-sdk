[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / PaymentMethodDataB2bSberbank

# Interface: PaymentMethodDataB2bSberbank

Defined in: [src/types/payments/paymentMethod.type.ts:356](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentMethod.type.ts#L356)

Данные для оплаты через СберБанк Бизнес Онлайн

## Properties

### payment\_purpose

> **payment\_purpose**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:359](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentMethod.type.ts#L359)

Назначение платежа (не больше 210 символов)

***

### type

> **type**: `"b2b_sberbank"`

Defined in: [src/types/payments/paymentMethod.type.ts:357](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentMethod.type.ts#L357)

***

### vat\_data

> **vat\_data**: `object`

Defined in: [src/types/payments/paymentMethod.type.ts:361](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/payments/paymentMethod.type.ts#L361)

Данные о НДС

#### amount?

> `optional` **amount**: [`IAmount`](IAmount.md)

#### type

> **type**: `"mixed"` \| `"calculated"` \| `"untaxed"`
