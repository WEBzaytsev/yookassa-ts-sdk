[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / CanceledPayment

# Type Alias: CanceledPayment

> **CanceledPayment** = [`IPayment`](../interfaces/IPayment.md) & `object`

Defined in: [src/types/payments/payment.type.ts:194](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L194)

Платёж в статусе `canceled` с `cancellation_details` (например `insufficient_funds`, `expired_on_confirmation`).
Используйте type guard `isCanceledPayment`.

## Type Declaration

### cancellation\_details

> `readonly` **cancellation\_details**: [`PaymentCancellationDetails`](../interfaces/PaymentCancellationDetails.md)

### status

> `readonly` **status**: `"canceled"`

## See

https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments
