[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / MandatorySavePaymentMethodType

# Type Alias: MandatorySavePaymentMethodType

> **MandatorySavePaymentMethodType** = [`bank_card`](../enumerations/PaymentMethodsEnum.md#bank_card) \| [`yoo_money`](../enumerations/PaymentMethodsEnum.md#yoo_money) \| [`sberbank`](../enumerations/PaymentMethodsEnum.md#sberbank) \| [`tinkoff_bank`](../enumerations/PaymentMethodsEnum.md#tinkoff_bank) \| [`sbp`](../enumerations/PaymentMethodsEnum.md#sbp)

Defined in: [src/types/payments/paymentMethod.type.ts:111](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/paymentMethod.type.ts#L111)

Способы оплаты, поддерживающие безусловное сохранение (save_payment_method: true).
Пользователь не может отказаться от сохранения способа оплаты.

## See

https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments/save-payment-method/save-during-payment#save-mandatory
