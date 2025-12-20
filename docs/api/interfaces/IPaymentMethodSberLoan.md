[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodSberLoan

# Interface: IPaymentMethodSberLoan

Defined in: [src/types/payments/paymentMethod.type.ts:281](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L281)

"Покупки в кредит" от Сбербанка"

## Extends

- `IGeneralPayMethod`

## Properties

### discount\_amount?

> `optional` **discount\_amount**: [`IAmount`](IAmount.md)

Defined in: [src/types/payments/paymentMethod.type.ts:284](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L284)

Сумма скидки для рассрочки. Присутствует для платежей в статусе `waiting_for_capture` и `succeeded`, если пользователь выбрал рассрочку.

***

### id

> **id**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:187](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L187)

Идентификатор способа оплаты.

#### Inherited from

`IGeneralPayMethod.id`

***

### loan\_option?

> `optional` **loan\_option**: `` `installments_${number}` `` \| `"loan"`

Defined in: [src/types/payments/paymentMethod.type.ts:292](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L292)

Тариф кредита, который пользователь выбрал при оплате.

Возможные значения:
-`loan` — кредит;
`installments_XX` — рассрочка, где `XX` — количество месяцев для выплаты рассрочки. Например, `installments_3` — рассрочка на 3 месяца.
Присутствует для платежей в статусе `waiting_for_capture` и `succeeded`.

***

### saved

> **saved**: `boolean`

Defined in: [src/types/payments/paymentMethod.type.ts:189](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L189)

С помощью сохраненного способа оплаты можно проводить [безакцептные списания](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments)

#### Inherited from

`IGeneralPayMethod.saved`

***

### title?

> `optional` **title**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:191](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L191)

Название способа оплаты.

#### Inherited from

`IGeneralPayMethod.title`

***

### type

> **type**: [`sber_loan`](../enumerations/PaymentMethodsEnum.md#sber_loan)

Defined in: [src/types/payments/paymentMethod.type.ts:282](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/paymentMethod.type.ts#L282)

#### Overrides

`IGeneralPayMethod.type`
