import type { paymentCancelReasonMap } from '../../dictionaries'
import type { IAmount, Metadata } from '../general.types'
import type { Receipts } from '../receipt'
import type { Receiver } from '../receiver.type'
import type { IAirline } from './airline.type'
import type { IPaymentMethod, PaymentMethodData } from './paymentMethod.type'
import type { PaymentOrderData } from './paymentOrder.type'
import type { IConfirmation } from './paymentsConfirmation.type'

/** Платежи ЮKassa */
export namespace Payments {
    /**
     * **Статусы платежа**
     *
     * - `pending` — создан, ждёт действий пользователя. При 54-ФЗ и сценарии «сначала чек» может ждать регистрации чека. Переходы: `succeeded`, `waiting_for_capture`, `canceled`.
     * - `waiting_for_capture` — оплачен, деньги авторизованы. Переходы: `succeeded`, `canceled`.
     * - `succeeded` — завершён, деньги поступят на расчётный счёт (финальный).
     * - `canceled` — отменён магазином, по таймауту или отклонён ЮKassa/провайдером (финальный).
     *
     * Часть статусов может пропускаться, порядок не меняется.
     * Статус — опрос API или уведомление от ЮKassa.
     * @see https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#lifecycle
     */
    export type PaymentStatus = 'waiting_for_capture' | 'succeeded' | 'canceled' | 'pending'

    /**
     * Авторизация при оплате картой, Mir Pay, SberPay, T-Pay.
     */
    export type AuthorizationDetails = {
        /**
         * RRN — ID транзакции у эмитента. Пример: `603668680243`
         */
        rrn?: string
        /** Код авторизации эмитента. Пример: `062467` */
        auth_code?: string
        /** Результат 3-D Secure */
        three_d_secure: {
            /** Показ формы 3-D Secure: `true` — показана, `false` — без аутентификации */
            applied: boolean
        }
    }

    /** Получатель платежа */
    export interface IRecipient {
        /** ID магазина в ЮKassa */
        account_id: string
        /** ID субаккаунта для разделения потоков платежей */
        gateway_id: string
    }

    /** Причина отмены платежа */
    export type CancelReason = keyof typeof paymentCancelReasonMap
    /**
     * Комментарий к `canceled`: кто и почему отменил.
     *
     * @see [Неуспешные платежи](https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments)
     */
    export interface PaymentCancellationDetails {
        /**
         * Инициатор отмены: `yoo_money`, `payment_network`, `merchant`.
         *
         * @see [Инициаторы отмены](https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments#cancellation-details-party)
         */
        party: 'merchant' | 'yoo_money' | 'payment_network'
        /**
         * Причина отмены.
         *
         * @see [Причины](https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments#cancellation-details-reason)
         */
        reason: CancelReason
    }
    /** Распределение денег между магазинами */
    export type TransferPayment = Pick<IPayment, 'amount' | 'description' | 'metadata'> & {
        /** ID магазина-получателя. См. [Продавцы](https://yookassa.ru/my/marketplace/sellers) в ЛК (shopId) */
        account_id: string
        /** Статус распределения: `pending`, `waiting_for_capture`, `succeeded`, `canceled` */
        status: PaymentStatus
        /** Комиссия платформы, удерживаемая с магазина */
        platform_fee_amount: IAmount
    }

    export type DealType = {
        /** ID сделки */
        id: string
        /** Распределение денег */
        settlements: {
            /** Тип операции: `payout` — выплата продавцу */
            type: 'payout'
            /** Вознаграждение продавца */
            amount: IAmount
        }[]
    }

    /**
     * **Объект платежа**
     *
     * Актуальная информация о платеже. Формируется при создании,
     * приходит в любом ответе по платежам. Неописанные поля игнорируйте.
     */
    export interface IPayment {
        /** ID платежа в ЮKassa */
        readonly id: string
        /** Статус: `pending`, `waiting_for_capture`, `succeeded`, `canceled` */
        readonly status: PaymentStatus
        /** Сумма платежа. Комиссия партнёра сверх суммы не входит */
        amount: IAmount
        /**
         * Сумма к зачислению магазину (`amount` минус комиссия ЮKassa).
         * При OAuth запросите у магазина право на данные о комиссиях.
         */
        readonly income_amount?: IAmount
        /**
         * Описание транзакции (до 128 символов) в ЛК и при оплате.
         * Пример: «Оплата заказа № 72 для user@yoomoney.ru».
         */
        description?: string
        /** Получатель платежа */
        recipient?: IRecipient
        /** [Способ оплаты](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-methods#all) */
        readonly payment_method?: IPaymentMethod
        /**
         * Время подтверждения ([UTC](https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F), [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)).
         * Пример: `2017-11-03T11:52:31.827Z`
         */
        readonly captured_at?: string
        /**
         * Время создания ([UTC](https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F), [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)).
         * Пример: `2017-11-03T11:52:31.827Z`
         */
        readonly created_at: string
        /**
         * Срок бесплатной отмены или подтверждения. После — автоотмена `waiting_for_capture`.
         * ([UTC](https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F), [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)).
         * Пример: `2017-11-03T11:52:31.827Z`
         */
        readonly expires_at?: string
        /**
         * Сценарий подтверждения при ожидании действий пользователя.
         * @see [Подтверждение](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#user-confirmation)
         */
        confirmation?: IConfirmation
        /** Тестовая операция */
        readonly test: boolean
        /** Сумма успешных возвратов */
        readonly refunded_amount?: IAmount
        /** Признак оплаты заказа */
        readonly paid: boolean
        /** Возможность возврата по API */
        readonly refundable: boolean
        /**
         * Произвольные данные в парах «ключ–значение». ЮKassa возвращает их в ответе.
         * До 16 ключей; имя — до 32 символов; значение — до 512; UTF-8.
         */
        metadata?: Metadata
        /**
         * Комментарий к `canceled`.
         * @see [Неуспешные платежи](https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments)
         */
        readonly cancellation_details?: PaymentCancellationDetails
        /** Авторизация при оплате картой, Mir Pay, SberPay, T-Pay */
        readonly authorization_details?: AuthorizationDetails
        /**
         * Распределение денег. Есть при [Сплитовании](https://yookassa.ru/developers/solutions-for-platforms/split-payments/basics).
         */
        transfers?: TransferPayment[]
        /**
         * Сделка платежа. Есть при [Безопасной сделке](https://yookassa.ru/developers/solutions-for-platforms/safe-deal/basics).
         */
        deal?: DealType
        /**
         * ID покупателя в вашей системе (email, телефон). До 200 символов.
         * Для сохранения карты в [виджете](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/widget/basics).
         */
        merchant_customer_id?: string
        /**
         * Статус регистрации чека:
         * - `pending` — в обработке;
         * - `succeeded` — зарегистрирован;
         * - `canceled` — не зарегистрирован.
         */
        readonly receipt_registration?: 'pending' | 'succeeded' | 'canceled'
        /** Счёт, в рамках которого проведён платёж */
        readonly invoice_details?: {
            /** ID счёта */
            id?: string
        }
    }

    /**
     * Платёж в статусе `canceled` с `cancellation_details` (например `insufficient_funds`, `expired_on_confirmation`).
     * Используйте type guard `isCanceledPayment`.
     * @see https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments
     */
    export type CanceledPayment = IPayment & {
        readonly status: 'canceled'
        readonly cancellation_details: PaymentCancellationDetails
    }

    /** Type guard: отменённый платёж — безопасный доступ к `cancellation_details.reason` */
    export function isCanceledPayment(payment: IPayment): payment is CanceledPayment {
        return payment.status === 'canceled' && payment.cancellation_details != null
    }

    /** Тип справки для пользователя */
    export type StatementType = 'payment_overview'

    /** Способ доставки справки */
    export interface StatementDeliveryMethod {
        /** Тип доставки (сейчас только `email`) */
        type: 'email'
        /** Email для квитанции */
        email: string
    }

    /**
     * Справка (квитанция) после оплаты.
     * @see https://yookassa.ru/developers/payment-acceptance/getting-started/selecting-integration-scenario
     */
    export interface Statement {
        /** Тип справки. Сейчас только `payment_overview` — квитанция по платежу */
        type: StatementType
        /** Способ доставки */
        delivery_method: StatementDeliveryMethod
    }

    /**
     * Запрос создания платежа. Платёж последовательно переходит из статуса в статус.
     */
    export type CreatePaymentRequest = Pick<
        IPayment,
        | 'amount'
        | 'description'
        | 'recipient'
        | 'confirmation'
        | 'metadata'
        | 'transfers'
        | 'deal'
        | 'merchant_customer_id'
    > & {
        /**
         * **Данные для чека**
         *
         * Передайте, если:
         * - компания/ИП с [Чеками ЮKassa](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/basics);
         * - компания/ИП со [сторонней кассой](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics) по сценарию [платёж и чек](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#payment-and-receipt) или [сначала чек](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#payment-after-receipt);
         * - самозанятый с [автоотправкой чеков](https://yookassa.ru/developers/payment-acceptance/receipts/self-employed/basics).
         */
        receipt?: Receipts.ReceiptinPaymentType
        /**
         * Токен оплаты из [Checkout.js](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/checkout-js/basics)
         * или [мобильного SDK](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/mobile-sdks/basics).
         * Пример: `+u7PDjMTkf08NtD66P6+eYWa2yjU3gsSIhOOO+OWsOg=`
         */
        payment_token?: string
        /** ID [сохранённого способа оплаты](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments) */
        payment_method_id?: string
        /**
         * Данные [конкретного способа](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/manual-integration/basics#integration-options).
         * Без поля пользователь выберет способ на стороне ЮKassa.
         */
        payment_method_data?: PaymentMethodData
        /**
         * Сохранение платёжных данных для [безакцептных списаний](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments).
         * `true` создаёт многоразовый `payment_method`.
         */
        save_payment_method?: boolean
        /** [Автоприём](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#capture-true) платежа */
        capture?: boolean
        /** IPv4 или IPv6 пользователя. По умолчанию — IP TCP-соединения */
        client_ip?: string
        /** Данные авиабилетов. Только для оплаты картой */
        airline?: IAirline
        /**
         * Реквизиты получателя при [пополнении кошелька, счёта или баланса телефона](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/receiver-data)
         */
        receiver?: Receiver
        /**
         * Квитанция на email. Для карты, SberPay, СБП.
         * @see https://yookassa.ru/developers/payment-acceptance/getting-started/selecting-integration-scenario
         */
        statements?: Statement[]
        /**
         * Платёжное поручение ЖКХ.
         * @see https://yookassa.ru/developers/payment-acceptance/scenario-extensions/utility-payments
         */
        payment_order_data?: PaymentOrderData
    }

    /**
     * Подтверждение двухстадийного платежа (списание).
     * @see https://yookassa.ru/developers/api#capture_payment
     */
    export interface CapturePaymentRequest {
        /**
         * Сумма списания. Меньше авторизованной — частичное подтверждение.
         * Без поля — полная сумма.
         */
        amount?: IAmount
        /** Данные чека по 54-ФЗ */
        receipt?: Receipts.ReceiptinPaymentType
        /** Данные авиабилетов. Только для карты */
        airline?: IAirline
        /** Распределение при сплитовании */
        transfers?: Array<{
            /** ID магазина-получателя */
            account_id: string
            /** Сумма перевода */
            amount: IAmount
            /** Комиссия платформы */
            platform_fee_amount?: IAmount
            /** Описание (до 128 символов) */
            description?: string
            /** Произвольные данные */
            metadata?: Metadata
        }>
    }
}
