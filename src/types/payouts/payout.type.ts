import type { IAmount, Metadata } from '../general.types'

export namespace Payouts {
    /** Статус выплаты */
    export type PayoutStatus = 'pending' | 'succeeded' | 'canceled'

    // ========== Destination (ответ) ========== //

    /** Выплата на банковскую карту (ответ) */
    export interface PayoutToCardDestination {
        type: 'bank_card'
        card: {
            /** Первые 6 цифр номера карты (BIN) */
            first6: string
            /** Последние 4 цифры номера карты */
            last4: string
            /** Тип карты (MasterCard, Visa, Mir и т.д.) */
            card_type: string
            /** Код страны банка-эмитента (ISO 3166-1 alpha-2) */
            issuer_country?: string
            /** Название банка-эмитента */
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
        /** Телефон получателя в формате ITU-T E.164, например 79000000000 */
        phone: string
        /** Идентификатор участника СБП (банка или платёжного сервиса), до 12 символов */
        bank_id: string
        /**
         * Идентификатор операции в СБП (НСПК).
         * Обязателен для выплат в статусе `succeeded`.
         */
        sbp_operation_id?: string
        /** Выплата проходила с проверкой получателя */
        recipient_checked: boolean
    }

    /** Назначение выплаты — куда переводятся деньги */
    export type PayoutDestination = PayoutToCardDestination | PayoutToYooMoneyDestination | PayoutToSbpDestination

    // ========== DestinationData (запрос) ========== //

    /** Данные для выплаты на кошелёк ЮMoney */
    export interface PayoutToYooMoneyDestinationData {
        type: 'yoo_money'
        /** Номер кошелька ЮMoney */
        account_number: string
    }

    /** Данные для выплаты на банковскую карту */
    export interface PayoutToBankCardDestinationData {
        type: 'bank_card'
        card: {
            /** Номер карты */
            number: string
        }
    }

    /** Данные для выплаты через СБП */
    export interface PayoutToSbpDestinationData {
        type: 'sbp'
        /** Телефон получателя в формате ITU-T E.164, например 79000000000 */
        phone: string
        /** Идентификатор участника СБП, до 12 символов */
        bank_id: string
    }

    /** Данные для выплаты (для запроса создания) */
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
        /** Идентификатор выплаты */
        id: string
        /** Сумма выплаты */
        amount: IAmount
        /** Статус выплаты */
        status: PayoutStatus
        /** Данные платёжного средства получателя */
        payout_destination: PayoutDestination
        /** Описание транзакции (до 128 символов) */
        description?: string
        /** Время создания выплаты (ISO 8601) */
        created_at: string
        /**
         * Время успешного проведения выплаты (ISO 8601).
         * Обязателен для выплат в статусе `succeeded`.
         */
        succeeded_at?: string
        /** Сделка, в рамках которой проведена выплата (Безопасная сделка) */
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
     * Данные для создания выплаты.
     * @see https://yookassa.ru/developers/api#create_payout
     */
    export interface CreatePayoutRequest {
        /** Сумма выплаты */
        amount: IAmount
        /**
         * Данные платёжного средства получателя.
         * Обязателен, если не передан `payout_token` или `payment_method_id`.
         */
        payout_destination_data?: PayoutDestinationData
        /**
         * Токенизированные данные для выплаты (например, синоним банковской карты).
         * Обязателен, если не передан `payout_destination_data` или `payment_method_id`.
         */
        payout_token?: string
        /**
         * Идентификатор сохранённого способа оплаты.
         * Обязателен, если не передан `payout_destination_data` или `payout_token`.
         */
        payment_method_id?: string
        /** Описание транзакции (до 128 символов) */
        description?: string
        /** Сделка (для Безопасной сделки) */
        deal?: { id: string }
        /**
         * Персональные данные получателя выплаты.
         * Только для обычных выплат. От 1 до 2 записей.
         */
        personal_data?: Array<{ id: string }>
        metadata?: Metadata
    }
}
