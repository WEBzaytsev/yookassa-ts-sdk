import type { IAmount, Metadata } from '../general.types'

export namespace Payouts {
    /** Статус выплаты */
    export type PayoutStatus = 'pending' | 'succeeded' | 'canceled'

    // ========== Destination (ответ) ========== //

    /** Выплата на банковскую карту (ответ) */
    export interface PayoutToCardDestination {
        type: 'bank_card'
        card: {
            /** Первые 6 цифр (BIN) */
            first6: string
            /** Последние 4 цифры */
            last4: string
            /** Тип карты (MasterCard, Visa, Mir и т. д.) */
            card_type: string
            /** Код страны эмитента (ISO 3166-1 alpha-2) */
            issuer_country?: string
            /** Банк-эмитент */
            issuer_name?: string
        }
    }

    /** Выплата на кошелёк ЮMoney (ответ) */
    export interface PayoutToYooMoneyDestination {
        type: 'yoo_money'
        /** Номер кошелька ЮMoney */
        account_number: string
    }

    /** Выплата через СБП (ответ) */
    export interface PayoutToSbpDestination {
        type: 'sbp'
        /** Телефон получателя, ITU-T E.164. Пример: `79000000000` */
        phone: string
        /** ID участника СБП (банк или сервис), до 12 символов */
        bank_id: string
        /**
         * ID операции в СБП (НСПК).
         * Обязателен для выплат в `succeeded`.
         */
        sbp_operation_id?: string
        /** Выплата с проверкой получателя */
        recipient_checked: boolean
    }

    /** Назначение выплаты */
    export type PayoutDestination = PayoutToCardDestination | PayoutToYooMoneyDestination | PayoutToSbpDestination

    // ========== DestinationData (запрос) ========== //

    /** Выплата на кошелёк ЮMoney (запрос) */
    export interface PayoutToYooMoneyDestinationData {
        type: 'yoo_money'
        /** Номер кошелька ЮMoney */
        account_number: string
    }

    /** Выплата на банковскую карту (запрос) */
    export interface PayoutToBankCardDestinationData {
        type: 'bank_card'
        card: {
            /** Номер карты */
            number: string
        }
    }

    /** Выплата через СБП (запрос) */
    export interface PayoutToSbpDestinationData {
        type: 'sbp'
        /** Телефон получателя, ITU-T E.164. Пример: `79000000000` */
        phone: string
        /** ID участника СБП, до 12 символов */
        bank_id: string
    }

    /** Данные назначения выплаты (запрос создания) */
    export type PayoutDestinationData =
        | PayoutToYooMoneyDestinationData
        | PayoutToBankCardDestinationData
        | PayoutToSbpDestinationData

    // ========== Cancellation ========== //

    /** Инициатор отмены выплаты */
    export type PayoutCancellationParty = 'yoo_money' | 'payout_network'

    /** Причина отмены выплаты
     * @see https://yookassa.ru/developers/payouts/after-the-payout/declined-payouts#cancellation-details-reason
     */
    export type PayoutCancellationReason =
        | 'insufficient_funds'
        | 'fraud_suspected'
        | 'one_time_limit_exceeded'
        | 'periodic_limit_exceeded'
        | 'rejected_by_payee'
        | 'general_decline'
        | 'issuer_unavailable'
        | 'recipient_not_found'
        | 'recipient_check_failed'
        | 'identification_required'
        | 'self_employed_annual_limit_exceeded'

    // ========== Payout object ========== //

    /**
     * Объект выплаты.
     * @see https://yookassa.ru/developers/api#payout_object
     */
    export interface IPayout {
        /** ID выплаты */
        id: string
        /** Сумма выплаты */
        amount: IAmount
        /** Статус выплаты */
        status: PayoutStatus
        /** Платёжное средство получателя */
        payout_destination: PayoutDestination
        /** Описание транзакции (до 128 символов) */
        description?: string
        /** Время создания (ISO 8601) */
        created_at: string
        /**
         * Время успешного проведения (ISO 8601).
         * Обязательно для `succeeded`.
         */
        succeeded_at?: string
        /** Сделка Безопасной сделки */
        deal?: { id: string }
        /** Комментарий к статусу `canceled` */
        cancellation_details?: {
            party: PayoutCancellationParty
            reason: PayoutCancellationReason
        }
        metadata?: Metadata
        /** Тестовая выплата */
        test: boolean
    }

    // ========== Create request ========== //

    /**
     * Запрос создания выплаты.
     * @see https://yookassa.ru/developers/api#create_payout
     */
    export interface CreatePayoutRequest {
        /** Сумма выплаты */
        amount: IAmount
        /**
         * Платёжное средство получателя.
         * Обязательно без `payout_token` и `payment_method_id`.
         */
        payout_destination_data?: PayoutDestinationData
        /**
         * Токенизированные данные (например, синоним карты).
         * Обязательно без `payout_destination_data` и `payment_method_id`.
         */
        payout_token?: string
        /**
         * ID сохранённого способа оплаты.
         * Обязательно без `payout_destination_data` и `payout_token`.
         */
        payment_method_id?: string
        /** Описание транзакции (до 128 символов) */
        description?: string
        /** Сделка (Безопасная сделка) */
        deal?: { id: string }
        /**
         * Персональные данные получателя.
         * Только для обычных выплат. От 1 до 2 записей.
         */
        personal_data?: Array<{ id: string }>
        metadata?: Metadata
    }
}
