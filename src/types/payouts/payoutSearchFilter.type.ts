import type { DateFilter } from '../api.types'
import type { Metadata } from '../general.types'

/**
 * Фильтр поиска выплат (`GET /payouts/search`).
 * Только за последние 3 месяца; в query `metadata` — точное совпадение одной пары ключ–значение.
 * @see https://yookassa.ru/developers/api#search_payouts
 */
export interface GetPayoutSearchFilter {
    created_at?: DateFilter
    /**
     * Ровно одна пара «ключ–значение» (ограничение API).
     */
    metadata?: Metadata
    limit?: number
    cursor?: string
}
