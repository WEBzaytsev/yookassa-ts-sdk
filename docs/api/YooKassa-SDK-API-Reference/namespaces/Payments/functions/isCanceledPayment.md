[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / isCanceledPayment

# Function: isCanceledPayment()

> **isCanceledPayment**(`payment`): `payment is CanceledPayment`

Defined in: [src/types/payments/payment.type.ts:219](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/c8dc341ff73a5ece64b0ee18dd5940355be4e506/src/types/payments/payment.type.ts#L219)

Type guard: платёж отменён — можно безопасно читать cancellation_details.reason

## Parameters

### payment

[`IPayment`](../interfaces/IPayment.md)

## Returns

`payment is CanceledPayment`
