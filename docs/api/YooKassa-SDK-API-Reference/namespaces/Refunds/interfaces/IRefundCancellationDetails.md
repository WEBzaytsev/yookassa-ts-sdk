[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Refunds](../README.md) / IRefundCancellationDetails

# Interface: IRefundCancellationDetails

Defined in: [src/types/refunds/refund.type.ts:16](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/refunds/refund.type.ts#L16)

## Properties

### party

> **party**: `"yoo_money"` \| `"payment_network"`

Defined in: [src/types/refunds/refund.type.ts:20](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/refunds/refund.type.ts#L20)

Инициатор отмены возврата

#### See

https://yookassa.ru/developers/payment-acceptance/after-the-payment/refunds#declined-refunds-cancellation-details-party

***

### reason

> **reason**: `"general_decline"` \| `"insufficient_funds"` \| `"rejected_by_payee"` \| `"rejected_by_timeout"` \| `"yoo_money_account_closed"` \| `"payment_article_number_not_found"` \| `"payment_basket_id_not_found"` \| `"payment_tru_code_not_found"` \| `"some_articles_already_refunded"` \| `"too_many_refunding_articles"`

Defined in: [src/types/refunds/refund.type.ts:24](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/refunds/refund.type.ts#L24)

Причина отмены возврата

#### See

https://yookassa.ru/developers/payment-acceptance/after-the-payment/refunds#declined-refunds-cancellation-details-reason
