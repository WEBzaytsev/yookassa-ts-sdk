# Типы TypeScript

SDK экспортирует все типы для типобезопасной разработки.

## Импорт типов

```ts
import type {
    // Типы платежей
    Payments,           // Namespace с IPayment, CreatePaymentRequest и др.
    IPaymentMethod,     // Типы способов оплаты
    IConfirmation,      // Типы подтверждения

    // Типы возвратов
    Refunds,            // Namespace с IRefund, CreateRefundRequest и др.

    // Типы чеков
    Receipts,           // Namespace с ReceiptType, CreateReceiptType и др.
    Items,              // Namespace с типом Item для товаров в чеке

    // Другие типы
    Customer,           // Тип данных покупателя
    Receiver,           // Тип получателя для пополнений
    IAirline,           // Данные авиабилета
    IWebhook,           // Тип вебхука
    IShopInfo,          // Тип информации о магазине
    IAmount,            // Тип суммы { value, currency }
    ConnectorOpts,      // Тип конфигурации SDK
    YooKassaErr,        // Класс ошибки

    // Типы для входящих уведомлений
    WebhookNotification,     // Тип входящего уведомления
    PaymentNotification,     // Тип уведомления о платеже
    RefundNotification,      // Тип уведомления о возврате
    WebhookValidationError,  // Класс ошибки валидации

    // Типы фильтров
    GetPaymentListFilter,
    GetRefundListFilter,
    GetReceiptListFilter,
    DateFilter,
} from 'yookassa-ts-sdk';
```

## Перечисления (Enums)

SDK экспортирует TypeScript перечисления для типобезопасной разработки:

```ts
import {
    CurrencyEnum,
    LocaleEnum,
    PaymentMethodsEnum,
    ConfirmationTypesEnum,
    WebhookEventEnum,
} from 'yookassa-ts-sdk';
```

| Enum | Описание |
| --- | --- |
| `CurrencyEnum` | Коды валют (RUB, USD, EUR и др.) |
| `LocaleEnum` | Язык интерфейса (`ru_RU`, `en_US`) |
| `PaymentMethodsEnum` | Способы оплаты (`bank_card`, `sbp`, `yoo_money` и др.) |
| `ConfirmationTypesEnum` | Сценарии подтверждения (`redirect`, `embedded`, `qr` и др.) |
| `WebhookEventEnum` | События вебхуков (`payment.succeeded`, `refund.succeeded` и др.) |

> ⚠️ **Устаревшие способы оплаты:**
> - `qiwi` — ЦБ РФ отозвал лицензию у QIWI Банка 21.02.2024. Способ оплаты не работает.
> - `alfabank` — Сервис Альфа-Клик устарел. Используйте другие способы оплаты.

### Пример

```ts
import { CurrencyEnum, PaymentMethodsEnum, ConfirmationTypesEnum } from 'yookassa-ts-sdk';

const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: CurrencyEnum.RUB },
    payment_method_data: { type: PaymentMethodsEnum.sbp },
    confirmation: { type: ConfirmationTypesEnum.redirect, return_url: 'https://example.com' },
});
```

## Справочники

SDK экспортирует справочники для работы с кодами и статусами YooKassa:

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

| Справочник | Описание |
| --- | --- |
| `paymentCancelReasonMap` | [Причины отмены платежа](https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments#cancellation-details-reason) |
| `refundCancelReasonMap` | [Причины отмены возврата](https://yookassa.ru/developers/payment-acceptance/after-the-payment/refunds#declined-refunds-cancellation-details-reason) |
| `paymentSubjectMap` | [Признаки предмета расчёта](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#payment-subject) (54-ФЗ) |
| `AgentTypeMap` | [Типы агента](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#agent-type) (54-ФЗ) |
| `measureTypeMap` | Единицы измерения для товаров в чеке |
| `SettlementTypeMap` | Типы расчёта для чеков |

### Пример

```ts
import { paymentCancelReasonMap } from 'yookassa-ts-sdk';

const payment = await sdk.payments.load('payment_id');

if (payment.status === 'canceled' && payment.cancellation_details) {
    const reason = payment.cancellation_details.reason;
    console.log(paymentCancelReasonMap[reason]); // Человекочитаемое описание
}
```

