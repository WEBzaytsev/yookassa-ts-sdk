[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / PaymentCancellationDetails

# Interface: PaymentCancellationDetails

Defined in: [src/types/payments/payment.type.ts:58](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L58)

Комментарий к `canceled`: кто и почему отменил.

## See

[Неуспешные платежи](https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments)

## Properties

### party

> **party**: `"yoo_money"` \| `"merchant"` \| `"payment_network"`

Defined in: [src/types/payments/payment.type.ts:64](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L64)

Инициатор отмены: `yoo_money`, `payment_network`, `merchant`.

#### See

[Инициаторы отмены](https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments#cancellation-details-party)

***

### reason

> **reason**: `"3d_secure_failed"` \| `"call_issuer"` \| `"canceled_by_merchant"` \| `"card_expired"` \| `"country_forbidden"` \| `"deal_expired"` \| `"expired_on_capture"` \| `"expired_on_confirmation"` \| `"fraud_suspected"` \| `"general_decline"` \| `"identification_required"` \| `"insufficient_funds"` \| `"internal_timeout"` \| `"invalid_card_number"` \| `"invalid_csc"` \| `"issuer_unavailable"` \| `"loan_declined"` \| `"payment_method_limit_exceeded"` \| `"payment_method_restricted"` \| `"permission_revoked"` \| `"unsupported_mobile_operator"`

Defined in: [src/types/payments/payment.type.ts:70](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L70)

Причина отмены.

#### See

[Причины](https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments#cancellation-details-reason)
