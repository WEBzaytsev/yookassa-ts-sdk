[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / CanceledPayment

# Type Alias: CanceledPayment

> **CanceledPayment** = [`IPayment`](../interfaces/IPayment.md) & `object`

Defined in: [src/types/payments/payment.type.ts:214](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/payment.type.ts#L214)

Платёж в статусе отмены. У отменённого платежа всегда есть cancellation_details с причиной
(например insufficient_funds, expired_on_confirmation). Используйте с type guard isCanceledPayment.

## Type Declaration

### cancellation\_details

> `readonly` **cancellation\_details**: [`PaymentCancellationDetails`](../interfaces/PaymentCancellationDetails.md)

### status

> `readonly` **status**: `"canceled"`

## See

https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments
