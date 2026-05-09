[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / isCanceledPayment

# Function: isCanceledPayment()

> **isCanceledPayment**(`payment`): `payment is CanceledPayment`

Defined in: [src/types/payments/payment.type.ts:220](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a630c10d01fabd8cdfaf36f2b07476b4a58137e4/src/types/payments/payment.type.ts#L220)

Type guard: платёж отменён — можно безопасно читать cancellation_details.reason

## Parameters

### payment

[`IPayment`](../interfaces/IPayment.md)

## Returns

`payment is CanceledPayment`
