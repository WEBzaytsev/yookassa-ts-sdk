[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / CanceledPayment

# Type Alias: CanceledPayment

> **CanceledPayment** = [`IPayment`](../interfaces/IPayment.md) & `object`

Defined in: [src/types/payments/payment.type.ts:213](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e5153b54297e1c5c82db159e94d75578d740e3cf/src/types/payments/payment.type.ts#L213)

Платёж в статусе отмены. У отменённого платежа всегда есть cancellation_details с причиной
(например insufficient_funds, expired_on_confirmation). Используйте с type guard isCanceledPayment.

## Type Declaration

### cancellation\_details

> `readonly` **cancellation\_details**: [`PaymentCancellationDetails`](../interfaces/PaymentCancellationDetails.md)

### status

> `readonly` **status**: `"canceled"`

## See

https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments
