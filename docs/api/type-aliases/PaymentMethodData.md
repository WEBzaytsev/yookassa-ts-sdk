[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / PaymentMethodData

# Type Alias: PaymentMethodData

> **PaymentMethodData** = [`PaymentMethodDataCard`](../interfaces/PaymentMethodDataCard.md) \| [`PaymentMethodDataYooMoney`](../interfaces/PaymentMethodDataYooMoney.md) \| [`PaymentMethodDataQiwi`](../interfaces/PaymentMethodDataQiwi.md) \| [`PaymentMethodDataSberbank`](../interfaces/PaymentMethodDataSberbank.md) \| [`PaymentMethodDataAlfabank`](../interfaces/PaymentMethodDataAlfabank.md) \| [`PaymentMethodDataTinkoff`](../interfaces/PaymentMethodDataTinkoff.md) \| [`PaymentMethodDataB2bSberbank`](../interfaces/PaymentMethodDataB2bSberbank.md) \| [`PaymentMethodDataSbp`](../interfaces/PaymentMethodDataSbp.md) \| [`PaymentMethodDataMobileBalance`](../interfaces/PaymentMethodDataMobileBalance.md) \| [`PaymentMethodDataCash`](../interfaces/PaymentMethodDataCash.md) \| [`PaymentMethodDataInstallments`](../interfaces/PaymentMethodDataInstallments.md) \| [`PaymentMethodDataSberLoan`](../interfaces/PaymentMethodDataSberLoan.md) \| [`PaymentMethodDataSberBnpl`](../interfaces/PaymentMethodDataSberBnpl.md)

Defined in: [src/types/payments/paymentMethod.type.ts:445](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/types/payments/paymentMethod.type.ts#L445)

Данные для оплаты конкретным способом.
Передаётся в `payment_method_data` при создании платежа.

## See

https://yookassa.ru/developers/api#create_payment
