[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodCash

# Interface: IPaymentMethodCash

Defined in: [src/types/payments/paymentMethod.type.ts:320](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L320)

Наличные

## Properties

### phone?

> `optional` **phone?**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:323](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L323)

Телефон для SMS с кодом платежа (внесение наличных). Формат ITU-T E.164, например 79000000000. Можно оставить пустым — пользователь заполнит на стороне ЮKassa

***

### type

> **type**: [`cash`](../enumerations/PaymentMethodsEnum.md#cash)

Defined in: [src/types/payments/paymentMethod.type.ts:321](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/paymentMethod.type.ts#L321)
