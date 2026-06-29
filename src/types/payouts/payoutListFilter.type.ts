import type { DateFilter } from '../api.types'
import type { Payouts } from './payout.type'

/** Тип назначения выплаты для фильтра */
export type PayoutDestinationFilterType = 'bank_card' | 'yoo_money' | 'sbp'

/**
 * Фильтр списка выплат.
 * @see https://yookassa.ru/developers/api#get_payouts_list
 */
export interface GetPayoutListFilter {
    /** Фильтр по времени создания */
    created_at?: DateFilter
    /**
     * Фильтр по `succeeded_at` в объекте выплаты.
     * @see https://yookassa.ru/developers/api#get_payouts_list
     */
    succeeded_at?: DateFilter
    /** Фильтр по `payout_destination.type` в query */
    payout_destination?: { type?: PayoutDestinationFilterType }
    /** Фильтр по статусу выплаты */
    status?: Payouts.PayoutStatus
    /**
     * Число объектов в ответе: от 1 до 100.
     * @default 10
     */
    limit?: number
    /** Указатель на следующий фрагмент списка */
    cursor?: string
}
