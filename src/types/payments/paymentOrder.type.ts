import type { IAmount } from '../general.types'

/**
 * Период оплаты, за который выставлены начисления.
 * Передаётся в платёжном поручении (ЖКХ).
 */
export interface PaymentPeriod {
    /** Месяц периода (1–12). Например, 1 — январь. */
    month: number
    /**
     * Год периода.
     * Значение должно быть в диапазоне 1920–2050. Например, 2025.
     */
    year: number
}

/**
 * Банк получателя платежа ЖКУ.
 * Поле `name` — не более 45 символов.
 */
export interface PaymentOrderBankUtilities {
    /** Название банка получателя (не более 45 символов) */
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
 * Платёжное поручение для оплаты жилищно-коммунальных услуг (ЖКУ).
 *
 * Необходимо передавать при оплате ЖКУ.
 * Кроме обязательных параметров, должен быть передан хотя бы один из:
 * `payment_document_id`, `payment_document_number`, `account_number`,
 * `unified_account_number` или `service_id`.
 *
 * @see https://yookassa.ru/developers/payment-acceptance/scenario-extensions/utility-payments
 */
export interface PaymentOrderDataUtilities {
    type: 'utilities'
    /** Сумма платёжного поручения — равна общей сумме платежа */
    amount: IAmount
    /**
     * Назначение платежа (не более 210 символов).
     * Формулировка должна соответствовать рекомендациям Письма Банка России № ИН-04-45/12.
     */
    payment_purpose: string
    /** Получатель платежа */
    recipient: PaymentOrderRecipientUtilities
    /** Код бюджетной классификации (КБК), до 20 символов */
    kbk?: string
    /** Код ОКТМО, до 8 символов */
    oktmo?: string
    /** Период оплаты */
    payment_period?: PaymentPeriod
    /**
     * Идентификатор платёжного документа (18 символов).
     * Обязателен, если не передан `payment_document_number`, `account_number`,
     * `unified_account_number` или `service_id`.
     */
    payment_document_id?: string
    /**
     * Номер платёжного документа на стороне поставщика ЖКУ (до 30 символов).
     * Обязателен, если не передан `payment_document_id`, `account_number`,
     * `unified_account_number` или `service_id`.
     */
    payment_document_number?: string
    /**
     * Номер лицевого счёта (до 30 символов).
     * Обязателен, если не передан `payment_document_id`, `payment_document_number`,
     * `unified_account_number` или `service_id`.
     */
    account_number?: string
    /**
     * Единый лицевой счёт — уникальный идентификатор в ГИС ЖКХ (10 символов).
     * Обязателен, если не передан `payment_document_id`, `payment_document_number`,
     * `account_number` или `service_id`.
     */
    unified_account_number?: string
    /**
     * Идентификатор ЖКУ (13 символов).
     * Обязателен, если не передан `payment_document_id`, `payment_document_number`,
     * `account_number` или `unified_account_number`.
     */
    service_id?: string
}

/** Платёжное поручение (сейчас поддерживается только тип `utilities`) */
export type PaymentOrderData = PaymentOrderDataUtilities
