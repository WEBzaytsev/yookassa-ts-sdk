/**
 * Сериализует query-параметры списков ЮKassa в точечной нотации: `created_at.gte`, `payout_destination.type` (не `created_at[gte]`).
 * Для `/payouts/search` по metadata — формат `metadata[key]=value` (deepObject).
 * @see https://yookassa.ru/developers/using-api/lists
 */
export function serializeYooKassaListParams(params: object): string {
    const pairs: [string, string][] = []

    for (const [key, val] of Object.entries(params)) {
        if (val === undefined || val === null) {
            continue
        }

        if (typeof val === 'object' && !Array.isArray(val)) {
            if (key === 'metadata') {
                for (const [subKey, subVal] of Object.entries(val as Record<string, unknown>)) {
                    if (subVal === undefined || subVal === null) {
                        continue
                    }
                    pairs.push([`metadata[${subKey}]`, String(subVal)])
                }
            } else {
                for (const [subKey, subVal] of Object.entries(val as Record<string, unknown>)) {
                    if (subVal === undefined || subVal === null) {
                        continue
                    }
                    pairs.push([`${key}.${subKey}`, String(subVal)])
                }
            }
        } else {
            pairs.push([key, String(val)])
        }
    }

    return new URLSearchParams(pairs).toString()
}
