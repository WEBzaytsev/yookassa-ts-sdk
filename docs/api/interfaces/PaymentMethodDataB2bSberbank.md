[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / PaymentMethodDataB2bSberbank

# Interface: PaymentMethodDataB2bSberbank

Defined in: [src/types/payments/paymentMethod.type.ts:424](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L424)

Данные для оплаты через СберБанк Бизнес Онлайн

## Properties

### payment\_purpose

> **payment\_purpose**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:427](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L427)

Назначение платежа (не больше 210 символов)

***

### type

> **type**: `"b2b_sberbank"`

Defined in: [src/types/payments/paymentMethod.type.ts:425](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L425)

***

### vat\_data

> **vat\_data**: `object`

Defined in: [src/types/payments/paymentMethod.type.ts:429](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L429)

Данные о НДС

#### amount?

> `optional` **amount?**: [`IAmount`](IAmount.md)

#### type

> **type**: `"mixed"` \| `"calculated"` \| `"untaxed"`
