import type { IAmount } from '../general.types'

/**
 * Период начислений в платёжном поручении (ЖКХ).
 */
export interface PaymentPeriod {
    /** Месяц (1–12). Например, 1 — январь */
    month: number
    /**
     * Год. Диапазон 1920–2050. Например, 2025.
     */
    year: number
}

/**
 * Банк получателя платежа ЖКУ.
 * Поле `name` — до 45 символов.
 */
export interface PaymentOrderBankUtilities {
    /** Название банка получателя (до 45 символов) */
    name: string
    /** БИК банка получателя (9 цифр) */
    bic: string
    /** Счёт получателя в банке */
    account: string
    /** Корреспондентский счёт банка получателя */
    correspondent_account: string
}

/** Получатель платежа ЖКУ */
export interface PaymentOrderRecipientUtilities {
    /** Название получателя */
    name: string
    /** ИНН получателя (10 цифр) */
    inn: string
    /** КПП получателя (9 цифр) */
    kpp: string
    /** Банк получателя */
    bank: PaymentOrderBankUtilities
}

/**
 * Платёжное поручение для оплаты ЖКУ.
 *
 * Обязателен при оплате ЖКУ. Кроме обязательных полей передайте хотя бы одно из:
 * `payment_document_id`, `payment_document_number`, `account_number`,
 * `unified_account_number`, `service_id`.
 *
 * @see https://yookassa.ru/developers/payment-acceptance/scenario-extensions/utility-payments
 */
export interface PaymentOrderDataUtilities {
    type: 'utilities'
    /** Сумма поручения — равна сумме платежа */
    amount: IAmount
    /**
     * Назначение платежа (до 210 символов).
     * Формулировка по Письму Банка России № ИН-04-45/12.
     */
    payment_purpose: string
    /** Получатель платежа */
    recipient: PaymentOrderRecipientUtilities
    /** КБК, до 20 символов */
    kbk?: string
    /** ОКТМО, до 8 символов */
    oktmo?: string
    /** Период оплаты */
    payment_period?: PaymentPeriod
    /**
     * ID платёжного документа (18 символов).
     * Обязателен без `payment_document_number`, `account_number`,
     * `unified_account_number`, `service_id`.
     */
    payment_document_id?: string
    /**
     * Номер документа у поставщика ЖКУ (до 30 символов).
     * Обязателен без `payment_document_id`, `account_number`,
     * `unified_account_number`, `service_id`.
     */
    payment_document_number?: string
    /**
     * Лицевой счёт (до 30 символов).
     * Обязателен без `payment_document_id`, `payment_document_number`,
     * `unified_account_number`, `service_id`.
     */
    account_number?: string
    /**
     * Единый лицевой счёт в ГИС ЖКХ (10 символов).
     * Обязателен без `payment_document_id`, `payment_document_number`,
     * `account_number`, `service_id`.
     */
    unified_account_number?: string
    /**
     * ID ЖКУ (13 символов).
     * Обязателен без `payment_document_id`, `payment_document_number`,
     * `account_number`, `unified_account_number`.
     */
    service_id?: string
}

/** Платёжное поручение (сейчас только `utilities`) */
export type PaymentOrderData = PaymentOrderDataUtilities
