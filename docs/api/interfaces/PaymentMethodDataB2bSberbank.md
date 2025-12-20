[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / PaymentMethodDataB2bSberbank

# Interface: PaymentMethodDataB2bSberbank

Defined in: [src/types/payments/paymentMethod.type.ts:411](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/payments/paymentMethod.type.ts#L411)

Данные для оплаты через СберБанк Бизнес Онлайн

## Properties

### payment\_purpose

> **payment\_purpose**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:414](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/payments/paymentMethod.type.ts#L414)

Назначение платежа (не больше 210 символов)

***

### type

> **type**: `"b2b_sberbank"`

Defined in: [src/types/payments/paymentMethod.type.ts:412](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/payments/paymentMethod.type.ts#L412)

***

### vat\_data

> **vat\_data**: `object`

Defined in: [src/types/payments/paymentMethod.type.ts:416](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/payments/paymentMethod.type.ts#L416)

Данные о НДС

#### amount?

> `optional` **amount**: [`IAmount`](IAmount.md)

#### type

> **type**: `"mixed"` \| `"calculated"` \| `"untaxed"`
