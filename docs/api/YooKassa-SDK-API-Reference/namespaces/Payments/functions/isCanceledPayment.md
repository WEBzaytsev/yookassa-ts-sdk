[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / isCanceledPayment

# Function: isCanceledPayment()

> **isCanceledPayment**(`payment`): `payment is CanceledPayment`

Defined in: [src/types/payments/payment.type.ts:219](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e5153b54297e1c5c82db159e94d75578d740e3cf/src/types/payments/payment.type.ts#L219)

Type guard: платёж отменён — можно безопасно читать cancellation_details.reason

## Parameters

### payment

[`IPayment`](../interfaces/IPayment.md)

## Returns

`payment is CanceledPayment`
