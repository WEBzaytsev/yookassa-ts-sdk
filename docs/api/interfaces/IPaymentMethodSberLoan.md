[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodSberLoan

# Interface: IPaymentMethodSberLoan

Defined in: [src/types/payments/paymentMethod.type.ts:306](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L306)

"Покупки в кредит" от Сбербанка"

## Extends

- `IGeneralPayMethod`

## Properties

### discount\_amount?

> `optional` **discount\_amount?**: [`IAmount`](IAmount.md)

Defined in: [src/types/payments/paymentMethod.type.ts:309](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L309)

Сумма скидки для рассрочки. Присутствует для платежей в статусе `waiting_for_capture` и `succeeded`, если пользователь выбрал рассрочку.

***

### id

> **id**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:191](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L191)

Идентификатор способа оплаты.

#### Inherited from

`IGeneralPayMethod.id`

***

### loan\_option?

> `optional` **loan\_option?**: `` `installments_${number}` `` \| `"loan"`

Defined in: [src/types/payments/paymentMethod.type.ts:317](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L317)

Тариф кредита, который пользователь выбрал при оплате.

Возможные значения:
-`loan` — кредит;
`installments_XX` — рассрочка, где `XX` — количество месяцев для выплаты рассрочки. Например, `installments_3` — рассрочка на 3 месяца.
Присутствует для платежей в статусе `waiting_for_capture` и `succeeded`.

***

### saved

> **saved**: `boolean`

Defined in: [src/types/payments/paymentMethod.type.ts:193](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L193)

С помощью сохраненного способа оплаты можно проводить [безакцептные списания](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments)

#### Inherited from

`IGeneralPayMethod.saved`

***

### title?

> `optional` **title?**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:195](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L195)

Название способа оплаты.

#### Inherited from

`IGeneralPayMethod.title`

***

### type

> **type**: [`sber_loan`](../enumerations/PaymentMethodsEnum.md#sber_loan)

Defined in: [src/types/payments/paymentMethod.type.ts:307](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L307)

#### Overrides

`IGeneralPayMethod.type`
