/**
 * Supported locales for YooKassa interface
 * @see https://yookassa.ru/developers/api#create_payment_confirmation_locale
 */
export enum LocaleEnum {
    /** Russian */
    ru_RU = 'ru_RU',
    /** English */
    en_US = 'en_US',
}

/**
 * Supported currencies in ISO-4217 format.
 * @see https://yookassa.ru/developers/api#payment_object_amount_currency
 */
export enum CurrencyEnum {
    /** Российский рубль */
    RUB = 'RUB',
    /** Евро */
    EUR = 'EUR',
    /** Доллар США */
    USD = 'USD',
    /** Казахстанский тенге */
    KZT = 'KZT',
    /** Белорусский рубль */
    BYN = 'BYN',
    /** Украинская гривна */
    UAH = 'UAH',
    /** Узбекский сум */
    UZS = 'UZS',
}

/**
 * Произвольные данные в парах «ключ–значение». ЮKassa возвращает их в ответе.
 *
 * **Ограничения:** до 16 ключей; имя — до 32 символов; значение — до 512; строка UTF-8.
 *
 * @see https://yookassa.ru/developers/api#payment_object_metadata
 */
export interface Metadata {
    [key: string]: string | null
}

/** Сумма платежа. Комиссия партнёра ЮKassa сверх этой суммы не входит. */
export interface IAmount {
    /** Сумма в валюте. Дробное число, точка как разделитель, без разделителя тысяч. Пример: `1000.00`. */
    value: string
    /** Код валюты ISO-4217. Пример: `RUB`. Должен совпадать с валютой субаккаунта (`recipient.gateway_id`) или аккаунта. */
    currency: CurrencyEnum
}
