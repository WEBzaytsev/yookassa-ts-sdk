[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodCash

# Interface: IPaymentMethodCash

Defined in: [src/types/payments/paymentMethod.type.ts:235](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/421052f4b89e2476891b70faab4f1b4ec3acb883/src/types/payments/paymentMethod.type.ts#L235)

Наличные

## Properties

### phone?

> `optional` **phone**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:238](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/421052f4b89e2476891b70faab4f1b4ec3acb883/src/types/payments/paymentMethod.type.ts#L238)

Телефон пользователя, на который придет смс с кодом платежа (для внесения наличных). Указывается в формате ITU-T E.164, например 79000000000. Поле можно оставить пустым: пользователь сможет заполнить его при оплате на стороне ЮKassa.

***

### type

> **type**: [`cash`](../enumerations/PaymentMethodsEnum.md#cash)

Defined in: [src/types/payments/paymentMethod.type.ts:236](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/421052f4b89e2476891b70faab4f1b4ec3acb883/src/types/payments/paymentMethod.type.ts#L236)
