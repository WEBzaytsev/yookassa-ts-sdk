[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodCash

# Interface: IPaymentMethodCash

Defined in: [src/types/payments/paymentMethod.type.ts:290](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/payments/paymentMethod.type.ts#L290)

Наличные

## Properties

### phone?

> `optional` **phone**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:293](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/payments/paymentMethod.type.ts#L293)

Телефон пользователя, на который придет смс с кодом платежа (для внесения наличных). Указывается в формате ITU-T E.164, например 79000000000. Поле можно оставить пустым: пользователь сможет заполнить его при оплате на стороне ЮKassa.

***

### type

> **type**: [`cash`](../enumerations/PaymentMethodsEnum.md#cash)

Defined in: [src/types/payments/paymentMethod.type.ts:291](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/payments/paymentMethod.type.ts#L291)
