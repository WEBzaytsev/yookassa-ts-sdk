import type { Metadata } from './general.types'

export type PersonalDataType = 'payout_statement_recipient' | 'sbp_payout_recipient'

export type PersonalDataStatus = 'waiting_for_operation' | 'active' | 'canceled'

export interface PersonalDataCancellationDetails {
    party: 'yoo_money'
    reason: 'expired_by_timeout'
}

export interface PersonalData {
    id: string
    type: PersonalDataType
    status: PersonalDataStatus
    cancellation_details?: PersonalDataCancellationDetails
    created_at: string
    expires_at?: string
    metadata?: Metadata
}

export interface SbpPayoutRecipientPersonalDataRequest {
    type: 'sbp_payout_recipient'
    metadata?: Metadata
    last_name: string
    first_name: string
    middle_name?: string
}

export interface PayoutStatementRecipientPersonalDataRequest {
    type: 'payout_statement_recipient'
    metadata?: Metadata
    last_name: string
    first_name: string
    middle_name?: string
    birthdate: string
}

export type CreatePersonalDataRequest =
    | SbpPayoutRecipientPersonalDataRequest
    | PayoutStatementRecipientPersonalDataRequest
