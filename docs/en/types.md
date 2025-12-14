# TypeScript Types

SDK exports all types for type-safe development.

## Type Imports

```ts
import type {
    // Payment types
    Payments,           // Namespace with IPayment, CreatePaymentRequest, etc.
    IPaymentMethod,     // Payment method types
    IConfirmation,      // Confirmation types

    // Refund types
    Refunds,            // Namespace with IRefund, CreateRefundRequest, etc.

    // Receipt types
    Receipts,           // Namespace with ReceiptType, CreateReceiptType, etc.
    Items,              // Namespace with Item type for receipt items

    // Other types
    Customer,           // Customer data type
    Receiver,           // Receiver data for top-ups
    IAirline,           // Airline ticket data
    IWebhook,           // Webhook type
    IShopInfo,          // Shop info type
    IAmount,            // Amount type { value, currency }
    ConnectorOpts,      // SDK configuration type
    YooKassaErr,        // Error class

    // Webhook notification types
    WebhookNotification,     // Incoming notification type
    PaymentNotification,     // Payment notification type
    RefundNotification,      // Refund notification type
    WebhookValidationError,  // Validation error class

    // Filter types
    GetPaymentListFilter,
    GetRefundListFilter,
    GetReceiptListFilter,
    DateFilter,
} from 'yookassa-ts-sdk';
```

## Enums

SDK exports TypeScript enums for type-safe development:

```ts
import {
    CurrencyEnum,
    LocaleEnum,
    PaymentMethodsEnum,
    ConfirmationTypesEnum,
    WebhookEventEnum,
} from 'yookassa-ts-sdk';
```

| Enum | Description |
| --- | --- |
| `CurrencyEnum` | Currency codes (RUB, USD, EUR, etc.) |
| `LocaleEnum` | Interface language (`ru_RU`, `en_US`) |
| `PaymentMethodsEnum` | Payment methods (`bank_card`, `sbp`, `yoo_money`, etc.) |
| `ConfirmationTypesEnum` | Confirmation scenarios (`redirect`, `embedded`, `qr`, etc.) |
| `WebhookEventEnum` | Webhook events (`payment.succeeded`, `refund.succeeded`, etc.) |

> ⚠️ **Deprecated payment methods:**
> - `qiwi` — QIWI Bank license revoked by Central Bank of Russia on 21.02.2024. This payment method no longer works.
> - `alfabank` — Alfa-Click service is deprecated. Use other payment methods.

### Example

```ts
import { CurrencyEnum, PaymentMethodsEnum, ConfirmationTypesEnum } from 'yookassa-ts-sdk';

const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: CurrencyEnum.RUB },
    payment_method_data: { type: PaymentMethodsEnum.sbp },
    confirmation: { type: ConfirmationTypesEnum.redirect, return_url: 'https://example.com' },
});
```

## Dictionaries

SDK exports helper dictionaries for working with YooKassa codes and statuses:

```ts
import {
    paymentCancelReasonMap,
    refundCancelReasonMap,
    paymentSubjectMap,
    AgentTypeMap,
    measureTypeMap,
    SettlementTypeMap,
} from 'yookassa-ts-sdk';
```

| Dictionary | Description |
| --- | --- |
| `paymentCancelReasonMap` | [Payment cancellation reasons](https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments#cancellation-details-reason) |
| `refundCancelReasonMap` | [Refund cancellation reasons](https://yookassa.ru/developers/payment-acceptance/after-the-payment/refunds#declined-refunds-cancellation-details-reason) |
| `paymentSubjectMap` | [Payment subject types](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#payment-subject) (54-FZ) |
| `AgentTypeMap` | [Agent types](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#agent-type) (54-FZ) |
| `measureTypeMap` | Measure units for receipt items |
| `SettlementTypeMap` | Settlement types for receipts |

### Example

```ts
import { paymentCancelReasonMap } from 'yookassa-ts-sdk';

const payment = await sdk.payments.load('payment_id');

if (payment.status === 'canceled' && payment.cancellation_details) {
    const reason = payment.cancellation_details.reason;
    console.log(paymentCancelReasonMap[reason]); // Human-readable description
}
```

