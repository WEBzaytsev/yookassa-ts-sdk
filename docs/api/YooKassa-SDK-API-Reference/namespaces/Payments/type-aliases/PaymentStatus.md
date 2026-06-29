[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Payments](../README.md) / PaymentStatus

# Type Alias: PaymentStatus

> **PaymentStatus** = `"waiting_for_capture"` \| `"succeeded"` \| `"canceled"` \| `"pending"`

Defined in: [src/types/payments/payment.type.ts:24](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/payments/payment.type.ts#L24)

**Статусы платежа**

- `pending` — создан, ждёт действий пользователя. При 54-ФЗ и сценарии «сначала чек» может ждать регистрации чека. Переходы: `succeeded`, `waiting_for_capture`, `canceled`.
- `waiting_for_capture` — оплачен, деньги авторизованы. Переходы: `succeeded`, `canceled`.
- `succeeded` — завершён, деньги поступят на расчётный счёт (финальный).
- `canceled` — отменён магазином, по таймауту или отклонён ЮKassa/провайдером (финальный).

Часть статусов может пропускаться, порядок не меняется.
Статус — опрос API или уведомление от ЮKassa.

## See

https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#lifecycle
