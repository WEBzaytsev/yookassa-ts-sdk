[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / isCanceledPayment

# Function: isCanceledPayment()

> **isCanceledPayment**(`payment`): `payment is CanceledPayment`

Defined in: [src/types/payments/payment.type.ts:220](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/payment.type.ts#L220)

Type guard: платёж отменён — можно безопасно читать cancellation_details.reason

## Parameters

### payment

[`IPayment`](../interfaces/IPayment.md)

## Returns

`payment is CanceledPayment`
