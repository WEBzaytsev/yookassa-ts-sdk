[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / MANDATORY\_SAVE\_PAYMENT\_METHOD\_TYPES

# Variable: MANDATORY\_SAVE\_PAYMENT\_METHOD\_TYPES

> `const` **MANDATORY\_SAVE\_PAYMENT\_METHOD\_TYPES**: readonly \[[`bank_card`](../enumerations/PaymentMethodsEnum.md#bank_card), [`yoo_money`](../enumerations/PaymentMethodsEnum.md#yoo_money), [`sberbank`](../enumerations/PaymentMethodsEnum.md#sberbank), [`tinkoff_bank`](../enumerations/PaymentMethodsEnum.md#tinkoff_bank), [`sbp`](../enumerations/PaymentMethodsEnum.md#sbp)\]

Defined in: [src/types/payments/paymentMethod.type.ts:124](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L124)

Рантайм-список всех значений [MandatorySavePaymentMethodType](../type-aliases/MandatorySavePaymentMethodType.md) (рекуррент с обязательным сохранением метода).
Должен совпадать с union: при добавлении варианта в тип — дополнить массив, иначе упадёт [MandatorySavePaymentMethodsCoverageCheck](../type-aliases/MandatorySavePaymentMethodsCoverageCheck.md).

## See

https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments/save-payment-method/save-during-payment#save-mandatory
