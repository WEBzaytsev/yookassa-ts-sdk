import type { IAmount, LocaleEnum, Metadata } from './general.types'
import type { Payments } from './payments/payment.type'
import type { Receipts } from './receipt'

export type InvoiceStatus = 'pending' | 'succeeded' | 'canceled'

export interface InvoiceLineItem {
    description: string
    price: IAmount
    discount_price?: IAmount
    quantity: number
}

export type InvoiceCart = InvoiceLineItem[]

/** Получатель платежа по счёту (только `gateway`) */
export interface InvoicePaymentRecipient {
    gateway_id: string
}

/** Данные платежа в выставленном счёте */
export interface InvoicePaymentData {
    amount: IAmount
    receipt?: Receipts.ReceiptinPaymentType
    recipient?: InvoicePaymentRecipient
    save_payment_method?: boolean
    capture?: boolean
    client_ip?: string
    description?: string
    metadata?: Metadata
}

export interface DeliveryMethodDataSelf {
    type: 'self'
}

export interface DeliveryMethodDataSms {
    type: 'sms'
    phone: string
}

export interface DeliveryMethodDataEmail {
    type: 'email'
    email: string
}

export type DeliveryMethodData = DeliveryMethodDataSelf | DeliveryMethodDataSms | DeliveryMethodDataEmail

export interface CreateInvoiceRequest {
    payment_data: InvoicePaymentData
    cart: InvoiceCart
    delivery_method_data: DeliveryMethodData
    expires_at: string
    locale?: (typeof LocaleEnum)[keyof typeof LocaleEnum]
    description?: string
    metadata?: Metadata
}

export type InvoiceCancellationParty = 'yoo_money' | 'merchant'

export type InvoiceCancellationReason =
    | 'invoice_canceled'
    | 'invoice_expired'
    | 'general_decline'
    | 'payment_canceled'
    | 'payment_expired_on_capture'

export interface InvoiceCancellationDetails {
    party: InvoiceCancellationParty
    reason: InvoiceCancellationReason
}

export interface DeliveryMethodSelf {
    type: 'self'
    url?: string
}

export interface DeliveryMethodSms {
    type: 'sms'
}

export interface DeliveryMethodEmail {
    type: 'email'
}

export type InvoiceDeliveryMethod = DeliveryMethodSelf | DeliveryMethodSms | DeliveryMethodEmail

export interface InvoicePaymentDetails {
    id: string
    status: Payments.PaymentStatus
}

export interface Invoice {
    id: string
    status: InvoiceStatus
    cart: InvoiceCart
    delivery_method?: InvoiceDeliveryMethod
    payment_details?: InvoicePaymentDetails
    created_at: string
    expires_at?: string
    description?: string
    cancellation_details?: InvoiceCancellationDetails
    metadata?: Metadata
}
