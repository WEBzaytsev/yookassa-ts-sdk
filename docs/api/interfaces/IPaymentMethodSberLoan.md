[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodSberLoan

# Interface: IPaymentMethodSberLoan

Defined in: [src/types/payments/paymentMethod.type.ts:247](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/payments/paymentMethod.type.ts#L247)

"Покупки в кредит" от Сбербанка"

## Extends

- `IGeneralPayMethod`

## Properties

### discount\_amount?

> `optional` **discount\_amount**: [`IAmount`](IAmount.md)

Defined in: [src/types/payments/paymentMethod.type.ts:250](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/payments/paymentMethod.type.ts#L250)

Сумма скидки для рассрочки. Присутствует для платежей в статусе `waiting_for_capture` и `succeeded`, если пользователь выбрал рассрочку.

***

### id

> **id**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:153](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/payments/paymentMethod.type.ts#L153)

Идентификатор способа оплаты.

#### Inherited from

`IGeneralPayMethod.id`

***

### loan\_option?

> `optional` **loan\_option**: `` `installments_${number}` `` \| `"loan"`

Defined in: [src/types/payments/paymentMethod.type.ts:258](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/payments/paymentMethod.type.ts#L258)

Тариф кредита, который пользователь выбрал при оплате.

Возможные значения:
-`loan` — кредит;
`installments_XX` — рассрочка, где `XX` — количество месяцев для выплаты рассрочки. Например, `installments_3` — рассрочка на 3 месяца.
Присутствует для платежей в статусе `waiting_for_capture` и `succeeded`.

***

### saved

> **saved**: `boolean`

Defined in: [src/types/payments/paymentMethod.type.ts:155](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/payments/paymentMethod.type.ts#L155)

С помощью сохраненного способа оплаты можно проводить [безакцептные списания](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments)

#### Inherited from

`IGeneralPayMethod.saved`

***

### title?

> `optional` **title**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:157](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/payments/paymentMethod.type.ts#L157)

Название способа оплаты.

#### Inherited from

`IGeneralPayMethod.title`

***

### type

> **type**: [`sber_loan`](../enumerations/PaymentMethodsEnum.md#sber_loan)

Defined in: [src/types/payments/paymentMethod.type.ts:248](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/d3913939be3eb851fb805b33968589283550c68e/src/types/payments/paymentMethod.type.ts#L248)

#### Overrides

`IGeneralPayMethod.type`
