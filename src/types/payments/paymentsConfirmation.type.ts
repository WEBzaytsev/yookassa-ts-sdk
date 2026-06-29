import type { LocaleEnum } from '../general.types'

export type IConfirmation =
    | IConfirmationRedirect
    | IConfirmationEmbedded
    | IConfirmationQR
    | IConfirmationExternal
    | IConfirmationMobileApp

export enum ConfirmationTypesEnum {
    embedded = 'embedded',
    external = 'external',
    mobile_application = 'mobile_application',
    qr = 'qr',
    redirect = 'redirect',
}
export type ConfirmationTypes = 'embedded' | 'external' | 'mobile_application' | 'qr' | 'redirect'

interface IGeneralConfirmation {
    /** Код сценария подтверждения */
    type: ConfirmationTypes
    /** Язык интерфейса, писем и SMS (ISO/IEC 15897): `ru_RU`, `en_US`. Регистр важен */
    locale?: LocaleEnum
}
/**
 * **Сценарий Embedded**
 *
 * Подтверждение зависит от выбранного способа оплаты в виджете ЮKassa.
 * ЮKassa получает подтверждение от пользователя — встройте виджет на страницу.
 */
export interface IConfirmationEmbedded extends IGeneralConfirmation {
    type: 'embedded'
    /** Токен для [виджета ЮKassa](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/widget/basics) */
    confirmation_token: string
}

/**
 * **Сценарий Redirect**
 *
 * Пользователь действует на странице ЮKassa или партнёра (карта, 3-D Secure).
 * Перенаправьте на `confirmation_url` из платежа. После оплаты ЮKassa вернёт на `return_url`.
 */
export interface IConfirmationRedirect extends IGeneralConfirmation {
    /** Код сценария подтверждения */
    type: 'redirect'
    /** URL для подтверждения оплаты */
    confirmation_url?: string
    /** Запрос 3-D Secure при приёме карт без подтверждения по умолчанию. Иначе 3-D Secure управляет ЮKassa */
    enforce?: boolean
    /**
     * URL возврата после подтверждения или отмены. До 2048 символов.
     *
     * Можно не указывать при настроенном `default_return_url` в ConnectorOpts.
     * @see https://yookassa.ru/developers/api#create_payment
     */
    return_url?: string
}

/**
 * **Сценарий QR-код**
 *
 * Пользователь сканирует QR. Сгенерируйте QR из `confirmation_data` и покажите на странице оплаты.
 */
export interface IConfirmationQR extends IGeneralConfirmation {
    type: 'qr'
    /** Данные для генерации QR-кода */
    confirmation_data: string
}

/**
 * **Сценарий Mobile application**
 *
 * Пользователь подтверждает в мобильном приложении (интернет-банк).
 * Перенаправьте на `confirmation_url` из платежа.
 */
export interface IConfirmationMobileApp extends IGeneralConfirmation {
    type: 'mobile_application'
    /** Диплинк приложения для подтверждения */
    confirmation_url: string
    /**
     * URL или диплинк возврата после подтверждения или отмены.
     * До 255 символов для SberPay, 2048 — для остальных.
     */
    return_url?: string
}

/**
 * **Сценарий External**
 *
 * Пользователь действует во внешней системе (например, ответ на SMS).
 * Сообщите пользователю о следующих шагах.
 */
export interface IConfirmationExternal extends IGeneralConfirmation {
    type: 'external'
}
