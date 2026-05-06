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
 * Настройки фискализации магазина.
 * Присутствует, если магазин настроил отправку чеков через ЮKassa.
 */
export interface FiscalizationData {
    /** Отправка чеков включена */
    enabled: boolean
    /** Провайдер, через который отправляются чеки */
    provider: FiscalizationProvider
}

/** Способ получения выплаты */
export type PayoutMethodType = 'bank_card' | 'yoo_money' | 'sbp'

/**
 * Информация о магазине или шлюзе (объект Me)
 * @see https://yookassa.ru/developers/api#get_me
 */
export interface IShopInfo {
    /** Идентификатор магазина или шлюза */
    account_id: string
    /** Статус магазина или шлюза */
    status: ShopStatus
    /** Тестовый магазин или шлюз */
    test: boolean
    /**
     * Настройки фискализации.
     * Присутствует, если вы запрашивали настройки магазина и магазин настроил отправку чеков.
     */
    fiscalization?: FiscalizationData
    /**
     * @deprecated Используйте `fiscalization.enabled`.
     * Сохранён для обратной совместимости.
     */
    fiscalization_enabled?: boolean
    /**
     * Список доступных способов оплаты.
     * Присутствует, если вы запрашивали настройки магазина.
     */
    payment_methods?: PaymentMethodsEnum[]
    /**
     * ИНН магазина (от 1 до 20 цифр).
     * Присутствует, если вы запрашивали настройки магазина.
     */
    itn?: string
    /**
     * Список способов получения выплат, доступных шлюзу.
     * Присутствует, если вы запрашивали настройки шлюза.
     */
    payout_methods?: PayoutMethodType[]
    /**
     * Название шлюза в личном кабинете ЮKassa.
     * Присутствует, если вы запрашивали настройки шлюза.
     */
    name?: string
    /**
     * Баланс шлюза.
     * Присутствует, если вы запрашивали настройки шлюза.
     */
    payout_balance?: IAmount
}
