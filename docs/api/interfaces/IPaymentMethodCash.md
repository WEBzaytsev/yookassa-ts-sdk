[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodCash

# Interface: IPaymentMethodCash

Defined in: [src/types/payments/paymentMethod.type.ts:269](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/types/payments/paymentMethod.type.ts#L269)

Наличные

## Properties

### phone?

> `optional` **phone**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:272](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/types/payments/paymentMethod.type.ts#L272)

Телефон пользователя, на который придет смс с кодом платежа (для внесения наличных). Указывается в формате ITU-T E.164, например 79000000000. Поле можно оставить пустым: пользователь сможет заполнить его при оплате на стороне ЮKassa.

***

### type

> **type**: [`cash`](../enumerations/PaymentMethodsEnum.md#cash)

Defined in: [src/types/payments/paymentMethod.type.ts:270](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/types/payments/paymentMethod.type.ts#L270)
