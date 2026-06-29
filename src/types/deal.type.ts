import type { DateFilter } from './api.types'
import type { IAmount, Metadata } from './general.types'

export type SafeDealType = 'safe_deal'

export type FeeMoment = 'payment_succeeded' | 'deal_closed'

export type DealStatus = 'opened' | 'closed'

/** Запрос на создание Безопасной сделки */
export interface SafeDealRequest {
    type: SafeDealType
    fee_moment: FeeMoment
    metadata?: Metadata
    description?: string
}

/** Объект Безопасной сделки */
export interface SafeDeal {
    type: SafeDealType
    id: string
    fee_moment: FeeMoment
    description?: string
    balance: IAmount
    payout_balance: IAmount
    status: DealStatus
    created_at: string
    expires_at: string
    metadata?: Metadata
    test: boolean
}

/** Фильтр списка сделок (`GET /deals`) */
export interface GetDealListFilter {
    created_at?: DateFilter
    expires_at?: DateFilter
    status?: DealStatus
    full_text_search?: string
    limit?: number
    cursor?: string
}
