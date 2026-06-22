[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IPaymentMethodSberLoan

# Interface: IPaymentMethodSberLoan

Defined in: [src/types/payments/paymentMethod.type.ts:336](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L336)

"Покупки в кредит" от Сбербанка

## Remarks

Возврат платежа возможен только в течение **180 дней** с момента создания (с 22 мая 2026 г., включая ранее созданные платежи).

## Extends

- `IGeneralPayMethod`

## Properties

### discount\_amount?

> `optional` **discount\_amount?**: [`IAmount`](IAmount.md)

Defined in: [src/types/payments/paymentMethod.type.ts:339](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L339)

Сумма скидки для рассрочки. Присутствует для платежей в статусе `waiting_for_capture` и `succeeded`, если пользователь выбрал рассрочку.

***

### id

> **id**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:217](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L217)

Идентификатор способа оплаты.

#### Inherited from

`IGeneralPayMethod.id`

***

### loan\_option?

> `optional` **loan\_option?**: `` `installments_${number}` `` \| `"loan"`

Defined in: [src/types/payments/paymentMethod.type.ts:347](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L347)

Тариф кредита, который пользователь выбрал при оплате.

Возможные значения:
-`loan` — кредит;
`installments_XX` — рассрочка, где `XX` — количество месяцев для выплаты рассрочки. Например, `installments_3` — рассрочка на 3 месяца.
Присутствует для платежей в статусе `waiting_for_capture` и `succeeded`.

***

### saved

> **saved**: `boolean`

Defined in: [src/types/payments/paymentMethod.type.ts:219](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L219)

С помощью сохраненного способа оплаты можно проводить [безакцептные списания](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments)

#### Inherited from

`IGeneralPayMethod.saved`

***

### title?

> `optional` **title?**: `string`

Defined in: [src/types/payments/paymentMethod.type.ts:221](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L221)

Название способа оплаты.

#### Inherited from

`IGeneralPayMethod.title`

***

### type

> **type**: [`sber_loan`](../enumerations/PaymentMethodsEnum.md#sber_loan)

Defined in: [src/types/payments/paymentMethod.type.ts:337](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L337)

#### Overrides

`IGeneralPayMethod.type`
