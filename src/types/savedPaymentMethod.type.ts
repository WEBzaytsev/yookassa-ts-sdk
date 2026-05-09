import type { LocaleEnum } from './general.types'
import type { IBankCardData } from './payments/paymentMethod.type'

/** Статус сохранённого способа оплаты при привязке. */
export type SavePaymentMethodStatus = 'pending' | 'active' | 'inactive'

/** Данные подтверждения привязки (запрос). */
export interface PaymentMethodsConfirmationDataRedirect {
    type: 'redirect'
    return_url: string
    enforce?: boolean
    locale?: (typeof LocaleEnum)[keyof typeof LocaleEnum]
}

/** Данные карты с CVC для сохранения способа оплаты. */
export interface CardRequestDataWithCsc {
    number: string
    expiry_year: string
    expiry_month: string
    csc: string
    cardholder?: string
}

/** Запрос на создание привязки банковской карты. */
export interface SavePaymentMethodDataBankCard {
    type: 'bank_card'
    card: CardRequestDataWithCsc
    /** Получатель по OpenAPI — только `gateway_id`. */
    holder: {
        gateway_id: string
    }
    client_ip?: string
    confirmation?: PaymentMethodsConfirmationDataRedirect
}

/** Тело POST /payment_methods (по спецификации — ветки oneOf). */
export type SavePaymentMethodData = SavePaymentMethodDataBankCard

/** Ответ с URL подтверждения привязки. */
export interface PaymentMethodsConfirmationRedirect {
    type: 'redirect'
    confirmation_url: string
    return_url?: string
    enforce?: boolean
}

/** Сохранённая банковская карта (ответ API). */
export interface SavePaymentMethodBankCard {
    type: 'bank_card'
    id: string
    saved: boolean
    status: SavePaymentMethodStatus
    holder: {
        account_id: string
        gateway_id: string
    }
    title?: string
    card?: IBankCardData
    confirmation?: PaymentMethodsConfirmationRedirect
}

export type SavePaymentMethod = SavePaymentMethodBankCard
