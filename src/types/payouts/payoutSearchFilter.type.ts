import type { DateFilter } from '../api.types'
import type { Metadata } from '../general.types'

/**
 * Фильтр поиска выплат (`GET /payouts/search`).
 * Доступен только за последние 3 месяца; в query `metadata` — точное совпадение одной пары ключ-значение.
 * @see https://yookassa.ru/developers/api#search_payouts
 */
export interface GetPayoutSearchFilter {
    created_at?: DateFilter
    /**
     * Строго одна пара «ключ–значение» в теле фильтра (ограничение API).
     */
    metadata?: Metadata
    limit?: number
    cursor?: string
}
