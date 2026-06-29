[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Items](../README.md) / PaymentMode

# Type Alias: PaymentMode

> **PaymentMode** = `"full_prepayment"` \| `"partial_prepayment"` \| `"advance"` \| `"full_payment"` \| `"partial_payment"` \| `"credit"` \| `"credit_payment"`

Defined in: [src/types/receipt/item.type.ts:99](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L99)

Признак способа расчёта. Передавайте в `payment_mode`

## Remarks

Для Чеков ЮKassa — только `full_prepayment` и `full_payment`.
Для сторонних касс — все значения.

## See

https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#payment-mode
