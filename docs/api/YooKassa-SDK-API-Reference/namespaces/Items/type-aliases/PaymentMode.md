[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Items](../README.md) / PaymentMode

# Type Alias: PaymentMode

> **PaymentMode** = `"full_prepayment"` \| `"partial_prepayment"` \| `"advance"` \| `"full_payment"` \| `"partial_payment"` \| `"credit"` \| `"credit_payment"`

Defined in: [src/types/receipt/item.type.ts:105](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/receipt/item.type.ts#L105)

Признак способа расчета. Передается в параметре `payment_mode`

## Remarks

Для Чеков от ЮKassa поддерживаются только `full_prepayment` и `full_payment`.
Для сторонних онлайн-касс доступны все значения.

## See

https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#payment-mode
