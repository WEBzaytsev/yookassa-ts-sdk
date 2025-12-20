[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / PaymentMethodDataB2bSberbank

# Interface: PaymentMethodDataB2bSberbank

Defined in: [src/types/payments/paymentMethod.type.ts:390](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L390)

Данные для оплаты через СберБанк Бизнес Онлайн

## Properties

### payment\_purpose

> **payment\_purpose**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:393](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L393)

Назначение платежа (не больше 210 символов)

***

### type

> **type**: `"b2b_sberbank"`

Defined in: [src/types/payments/paymentMethod.type.ts:391](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L391)

***

### vat\_data

> **vat\_data**: `object`

Defined in: [src/types/payments/paymentMethod.type.ts:395](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L395)

Данные о НДС

#### amount?

> `optional` **amount**: [`IAmount`](IAmount.md)

#### type

> **type**: `"mixed"` \| `"calculated"` \| `"untaxed"`
