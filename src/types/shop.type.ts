import type { IAmount } from './general.types'
import type { PaymentMethodsEnum } from './payments/paymentMethod.type'

/** Статус магазина или шлюза */
export type ShopStatus = 'enabled' | 'disabled'

/**
 * Провайдер фискализации ЮKassa.
 * @see https://yookassa.ru/developers/payment-acceptance/receipts/basics
 */
export type FiscalizationProvider =
    | 'atol'
    | 'avanpost'
    | 'a_qsi'
    | 'business_ru'
    | 'digital_kassa'
    | 'evotor'
    | 'first_ofd'
    | 'kit_invest'
    | 'komtet'
    | 'life_pay'
    | 'mertrade'
    | 'modul_kassa'
    | 'rocket'
    | 'shtrih_m'
    | 'yoo_receipt'

/**
 * Настройки фискализации.
 * Есть, если магазин отправляет чеки через ЮKassa.
 */
export interface FiscalizationData {
    /** Отправка чеков включена */
    enabled: boolean
    /** Провайдер отправки чеков */
    provider: FiscalizationProvider
}

/** Способ получения выплаты */
export type PayoutMethodType = 'bank_card' | 'yoo_money' | 'sbp'

/**
 * Магазин или шлюз (объект Me).
 * @see https://yookassa.ru/developers/api#get_me
 */
export interface IShopInfo {
    /** ID магазина или шлюза */
    account_id: string
    /** Статус магазина или шлюза */
    status: ShopStatus
    /** Тестовый магазин или шлюз */
    test: boolean
    /**
     * Настройки фискализации.
     * Есть при запросе настроек магазина с включённой отправкой чеков.
     */
    fiscalization?: FiscalizationData
    /**
     * @deprecated Используйте `fiscalization.enabled`.
     * Сохранён для обратной совместимости.
     */
    fiscalization_enabled?: boolean
    /**
     * Доступные способы оплаты.
     * Есть при запросе настроек магазина.
     */
    payment_methods?: PaymentMethodsEnum[]
    /**
     * ИНН магазина (1–20 цифр).
     * Есть при запросе настроек магазина.
     */
    itn?: string
    /**
     * Способы получения выплат шлюза.
     * Есть при запросе настроек шлюза.
     */
    payout_methods?: PayoutMethodType[]
    /**
     * Название шлюза в личном кабинете ЮKassa.
     * Есть при запросе настроек шлюза.
     */
    name?: string
    /**
     * Баланс шлюза.
     * Есть при запросе настроек шлюза.
     */
    payout_balance?: IAmount
}
