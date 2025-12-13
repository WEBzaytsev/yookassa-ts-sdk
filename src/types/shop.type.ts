/** Информация о магазине (аккаунте)
 * @see https://yookassa.ru/developers/api#get_me
 */
export interface IShopInfo {
    /** Идентификатор аккаунта */
    account_id: string
    /** Признак тестового магазина: `true` — тестовый, `false` — боевой */
    test: boolean
    /** Признак подключённой фискализации: `true` — подключена, `false` — нет */
    fiscalization_enabled: boolean
    /** Список доступных способов оплаты */
    payment_methods: string[]
    /** Статус магазина */
    status: string
}
