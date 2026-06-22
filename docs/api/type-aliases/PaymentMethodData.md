[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / PaymentMethodData

# Type Alias: PaymentMethodData

> **PaymentMethodData** = [`PaymentMethodDataCard`](../interfaces/PaymentMethodDataCard.md) \| [`PaymentMethodDataYooMoney`](../interfaces/PaymentMethodDataYooMoney.md) \| [`PaymentMethodDataQiwi`](../interfaces/PaymentMethodDataQiwi.md) \| [`PaymentMethodDataSberbank`](../interfaces/PaymentMethodDataSberbank.md) \| [`PaymentMethodDataAlfabank`](../interfaces/PaymentMethodDataAlfabank.md) \| [`PaymentMethodDataTinkoff`](../interfaces/PaymentMethodDataTinkoff.md) \| [`PaymentMethodDataB2bSberbank`](../interfaces/PaymentMethodDataB2bSberbank.md) \| [`PaymentMethodDataSbp`](../interfaces/PaymentMethodDataSbp.md) \| [`PaymentMethodDataMobileBalance`](../interfaces/PaymentMethodDataMobileBalance.md) \| [`PaymentMethodDataCash`](../interfaces/PaymentMethodDataCash.md) \| [`PaymentMethodDataInstallments`](../interfaces/PaymentMethodDataInstallments.md) \| [`PaymentMethodDataSberLoan`](../interfaces/PaymentMethodDataSberLoan.md) \| [`PaymentMethodDataSberBnpl`](../interfaces/PaymentMethodDataSberBnpl.md) \| [`PaymentMethodDataAlfaPay`](../interfaces/PaymentMethodDataAlfaPay.md)

Defined in: [src/types/payments/paymentMethod.type.ts:521](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L521)

Данные для оплаты конкретным способом.
Передаётся в `payment_method_data` при создании платежа.

## See

https://yookassa.ru/developers/api#create_payment
