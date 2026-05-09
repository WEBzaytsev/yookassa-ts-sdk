import type { DateFilter } from '../api.types'
import type { Payouts } from './payout.type'

/** Тип назначения выплаты для фильтрации */
export type PayoutDestinationFilterType = 'bank_card' | 'yoo_money' | 'sbp'

/**
 * Фильтр для получения списка выплат.
 * @see https://yookassa.ru/developers/api#get_payouts_list
 */
export interface GetPayoutListFilter {
    /** Фильтр по времени создания */
    created_at?: DateFilter
    /**
     * Фильтр по времени успешного проведения выплаты (`succeeded_at` в объекте выплаты).
     * @see https://yookassa.ru/developers/api#get_payouts_list
     */
    succeeded_at?: DateFilter
    /**
     * Фильтр по типу назначения выплаты в query: `payout_destination.type`.
     */
    payout_destination?: { type?: PayoutDestinationFilterType }
    /** Фильтр по статусу выплаты */
    status?: Payouts.PayoutStatus
    /**
     * Количество объектов в ответе (от 1 до 100).
     * @default 10
     */
    limit?: number
    /** Указатель на следующий фрагмент списка */
    cursor?: string
}
