[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / PaymentCancellationDetails

# Interface: PaymentCancellationDetails

Defined in: [src/types/payments/payment.type.ts:63](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/payment.type.ts#L63)

Комментарий к статусу `canceled`: кто отменил платеж и по какой причине.

[Подробнее про неуспешные платежи](https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments)

## Properties

### party

> **party**: `"yoo_money"` \| `"merchant"` \| `"payment_network"`

Defined in: [src/types/payments/payment.type.ts:68](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/payment.type.ts#L68)

Участник процесса платежа, который принял решение об отмене транзакции. Может принимать значения `yoo_money`, `payment_network` и `merchant`.

[Подробнее](https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments#cancellation-details-party) про инициаторов отмены платежа

***

### reason

> **reason**: `"3d_secure_failed"` \| `"call_issuer"` \| `"canceled_by_merchant"` \| `"card_expired"` \| `"country_forbidden"` \| `"deal_expired"` \| `"expired_on_capture"` \| `"expired_on_confirmation"` \| `"fraud_suspected"` \| `"general_decline"` \| `"identification_required"` \| `"insufficient_funds"` \| `"internal_timeout"` \| `"invalid_card_number"` \| `"invalid_csc"` \| `"issuer_unavailable"` \| `"payment_method_limit_exceeded"` \| `"payment_method_restricted"` \| `"permission_revoked"` \| `"unsupported_mobile_operator"`

Defined in: [src/types/payments/payment.type.ts:73](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/payments/payment.type.ts#L73)

Причина отмены платежа.

[Перечень и описание возможных значений](https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments#cancellation-details-reason)
