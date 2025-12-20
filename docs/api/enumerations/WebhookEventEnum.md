[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / WebhookEventEnum

# Enumeration: WebhookEventEnum

Defined in: [src/types/webhook.type.ts:2](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/webhook.type.ts#L2)

События для вебхуков

## Enumeration Members

### deal.closed

> **deal.closed**: `"deal.closed"`

Defined in: [src/types/webhook.type.ts:16](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/webhook.type.ts#L16)

Сделка закрыта

***

### payment.canceled

> **payment.canceled**: `"payment.canceled"`

Defined in: [src/types/webhook.type.ts:8](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/webhook.type.ts#L8)

Платёж отменён

***

### payment.succeeded

> **payment.succeeded**: `"payment.succeeded"`

Defined in: [src/types/webhook.type.ts:6](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/webhook.type.ts#L6)

Платёж успешно завершён

***

### payment.waiting\_for\_capture

> **payment.waiting\_for\_capture**: `"payment.waiting_for_capture"`

Defined in: [src/types/webhook.type.ts:4](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/webhook.type.ts#L4)

Платёж ожидает подтверждения

***

### payout.canceled

> **payout.canceled**: `"payout.canceled"`

Defined in: [src/types/webhook.type.ts:14](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/webhook.type.ts#L14)

Выплата отменена

***

### payout.succeeded

> **payout.succeeded**: `"payout.succeeded"`

Defined in: [src/types/webhook.type.ts:12](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/webhook.type.ts#L12)

Выплата успешно завершена

***

### refund.succeeded

> **refund.succeeded**: `"refund.succeeded"`

Defined in: [src/types/webhook.type.ts:10](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/6823d155d49cc71fd6ee8c823d18d0dfb5b404e5/src/types/webhook.type.ts#L10)

Возврат успешно завершён
