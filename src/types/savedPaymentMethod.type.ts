import type { LocaleEnum } from './general.types'
import type { IBankCardData } from './payments/paymentMethod.type'

/** Статус привязки сохранённого способа оплаты */
export type SavePaymentMethodStatus = 'pending' | 'active' | 'inactive'

/** Тип сохранённого способа оплаты */
export type SavePaymentMethodType = 'bank_card' | 'sbp'

// ========== Confirmation data (запрос) ========== //

/** Подтверждение привязки через редирект (запрос) */
export interface PaymentMethodsConfirmationDataRedirect {
    type: 'redirect'
    return_url: string
    enforce?: boolean
    locale?: (typeof LocaleEnum)[keyof typeof LocaleEnum]
}

/**
 * Подтверждение привязки через QR (запрос).
 * Для привязки счёта СБП на нулевую сумму.
 * @see https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments/save-payment-method/save-without-payment/sbp
 */
export interface PaymentMethodsConfirmationDataQr {
    type: 'qr'
    /** URL возврата после привязки. RFC-3986, до 2048 символов */
    return_url?: string
}

// ========== Confirmation (ответ) ========== //

/** URL подтверждения привязки (редирект) */
export interface PaymentMethodsConfirmationRedirect {
    type: 'redirect'
    confirmation_url: string
    return_url?: string
    enforce?: boolean
}

/**
 * Данные QR для подтверждения привязки счёта СБП.
 * @see https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments/save-payment-method/save-without-payment/sbp
 */
export interface PaymentMethodsConfirmationQr {
    type: 'qr'
    /** Данные для генерации QR-кода */
    confirmation_data: string
}

// ========== Card data ========== //

/** Данные карты с CVC для сохранения способа оплаты */
export interface CardRequestDataWithCsc {
    number: string
    expiry_year: string
    expiry_month: string
    csc: string
    cardholder?: string
}

// ========== SavePaymentMethodData (запрос POST /payment_methods) ========== //

/** Запрос привязки банковской карты */
export interface SavePaymentMethodDataBankCard {
    type: 'bank_card'
    card: CardRequestDataWithCsc
    /** Получатель по OpenAPI — только `gateway_id` */
    holder: {
        gateway_id: string
    }
    client_ip?: string
    confirmation?: PaymentMethodsConfirmationDataRedirect | PaymentMethodsConfirmationDataQr
}

/**
 * Запрос привязки счёта СБП на нулевую сумму.
 * @see https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments/save-payment-method/save-without-payment/sbp
 */
export interface SavePaymentMethodDataSbp {
    type: 'sbp'
    holder?: {
        gateway_id?: string
    }
    client_ip?: string
    confirmation?: PaymentMethodsConfirmationDataRedirect | PaymentMethodsConfirmationDataQr
}

/** Тело `POST /payment_methods` (ветки oneOf по спецификации) */
export type SavePaymentMethodData = SavePaymentMethodDataBankCard | SavePaymentMethodDataSbp

// ========== SavePaymentMethod (ответ GET /payment_methods/:id) ========== //

/** Реквизиты счёта СБП при привязке */
export interface SavePaymentMethodSbpPayerBankDetails {
    /** ID банка в СБП */
    bank_id: string
}

/** Сохранённая банковская карта (ответ API) */
export interface SavePaymentMethodBankCard {
    type: 'bank_card'
    id: string
    saved: boolean
    status: SavePaymentMethodStatus
    holder: {
        account_id: string
        gateway_id?: string
    }
    title?: string
    card?: IBankCardData
    confirmation?: PaymentMethodsConfirmationRedirect | PaymentMethodsConfirmationQr
}

/**
 * Сохранённый счёт СБП (ответ API).
 * @see https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments/save-payment-method/save-without-payment/sbp
 */
export interface SavePaymentMethodSbp {
    type: 'sbp'
    id: string
    saved: boolean
    status: SavePaymentMethodStatus
    holder: {
        account_id: string
        gateway_id?: string
    }
    title?: string
    /** Реквизиты счёта. Есть для привязок в статусе `active` */
    payer_bank_details?: SavePaymentMethodSbpPayerBankDetails
    confirmation?: PaymentMethodsConfirmationRedirect | PaymentMethodsConfirmationQr
}

export type SavePaymentMethod = SavePaymentMethodBankCard | SavePaymentMethodSbp
