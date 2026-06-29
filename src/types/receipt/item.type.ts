import type { AgentTypeMap, measureTypeMap, paymentSubjectMap } from '../../dictionaries'
import type { IAmount } from '../general.types'

export namespace Items {
    /**
     * Отраслевой реквизит предмета расчёта (тег 54 ФЗ — 1260). Для Чеков ЮKassa или касс на ФФД 1.2
     */
    export interface PaymentSubjectIndustryDetails {
        /** ID федерального органа исполнительной власти (тег 54 ФЗ — 1262) */
        federal_id: string
        /** Дата документа основания (тег 54 ФЗ — 1263). Формат [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
         *
         * Пример: `2020-11-18`
         */
        document_date: string
        /** Номер нормативного акта ФОИВ, регламентирующего «значение отраслевого реквизита» (тег 54 ФЗ — 1264).
         *
         * Длина: до 32
         */
        document_number: string
        /** Значение отраслевого реквизита (тег 54 ФЗ — 1265).
         *
         * Длина: до 256. Пример: `123/43`
         */
        value: string
    }

    /** Код товара (тег 54 ФЗ — 1163).
     *
     * Обязателен, если одновременно:
     * - Чеки ЮKassa или касса на ФФД 1.2;
     * - товар подлежит маркировке.
     *
     * Заполните хотя бы одно поле.
     */
    interface MarkCodeInfo {
        /** Код товара, как прочитал сканер (тег 54 ФЗ — 2000).
         * Для кассы Orange Data.
         *
         * Пример: `010460406000590021N4N57RTCBUZTQ\u001d2403054002410161218\u001d1424010191ffd0\u001g92tIAF/YVpU4roQS3M/m4z78yFq0nc/WsSmLeX6QkF/YVWwy5IMYAeiQ91Xa2m/fFSJcOkb2N+uUUtfr4n0mOX0Q==`
         */
        mark_code_raw?: string
        /** Нераспознанный код товара (тег 54 ФЗ — 1300) */
        unknown?: string
        /** Код товара в формате EAN-8 (тег 54 ФЗ — 1301) */
        ean_8?: string
        /** Код товара в формате EAN-13 (тег 54 ФЗ — 1302) */
        ean_13?: string
        /** Код товара в формате ITF-14 (тег 54 ФЗ — 1303) */
        itf_14?: string
        /** Код товара в формате GS1.0 (тег 54 ФЗ — 1304).
         *
         * Для касс Orange Data, aQsi, Кит Инвест.
         */
        gs_10?: string
        /** Код товара в формате GS1.M (тег 54 ФЗ — 1305) */
        gs_1m?: string
        /** Код товара — короткий код маркировки (тег 54 ФЗ — 1306) */
        short?: string
        /** КИЗ мехового изделия (тег 54 ФЗ — 1307) */
        fur?: string
        /** Код товара в формате ЕГАИС-2.0 (тег 54 ФЗ — 1308) */
        egais_20?: string
        /** Код товара в формате ЕГАИС-3.0 (тег 54 ФЗ — 1309) */
        egais_30?: string
    }

    /**
     * Тип посредника. Передавайте в `items.agent_type` по сценарию «Сначала платёж, потом чек».
     * Обязателен с ФФД 1.1 — проверьте версию кассы.
     * @see https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#agent-type
     */
    export type AgentType = keyof typeof AgentTypeMap

    /**
     * Поставщик товара или услуги (тег 54 ФЗ — 1224).
     * Для сценария [Сначала платёж, потом чек](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#receipt-after-payment).
     */
    export type Supplier = {
        /** Наименование поставщика (тег 54 ФЗ — 1225). Обязателен с ФФД 1.1 */
        name: string
        /** Телефон поставщика (тег 54 ФЗ — 1171).
         * Формат ITU-T E.164. Обязателен с ФФД 1.1.
         * @example `79000000000`.
         */
        phone?: string
        /** ИНН поставщика, маскированный (тег 54 ФЗ — 1226). Пример: `***`. Обязателен с ФФД 1.05 */
        inn?: string
    }

    /**
     * Признак способа расчёта. Передавайте в `payment_mode`
     *
     * @remarks Для Чеков ЮKassa — только `full_prepayment` и `full_payment`.
     * Для сторонних касс — все значения.
     *
     * @see https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#payment-mode
     */
    export type PaymentMode =
        | 'full_prepayment'
        | 'partial_prepayment'
        | 'advance'
        | 'full_payment'
        | 'partial_payment'
        | 'credit'
        | 'credit_payment'

    /**
     * Признак предмета расчёта. Передавайте в `payment_subject`
     */
    export type PaymentSubject = keyof typeof paymentSubjectMap

    /**
     * Мера количества предмета расчёта. Передавайте в `items.measure`
     */
    export type MeasureType = keyof typeof measureTypeMap

    /**
     * Дробное количество маркированного товара (тег 54 ФЗ — 1291).
     *
     * Обязателен, если одновременно:
     * - Чеки ЮKassa или касса на ФФД 1.2;
     * - товар подлежит маркировке;
     * - `measure` = `piece`.
     *
     * Пример: карандаши продаёте поштучно, в упаковке 100 шт. с одним кодом маркировки — `numerator`: 1, `denominator`: 100.
     */
    interface MarkQuantity {
        /** Числитель — сколько единиц из упаковки продаёте (тег 54 ФЗ — 1293). Не больше `denominator` */
        numerator: number
        /** Знаменатель — всего единиц в упаковке (тег 54 ФЗ — 1294) */
        denominator: number
    }

    /**
     * Товары в заказе. До 100 позиций для чеков по 54-ФЗ, до 6 — для самозанятых.
     */
    export interface Item {
        /** Название товара (1–128 символов). Тег 54 ФЗ — 1030 */
        description: string
        /** Цена товара (тег 54 ФЗ — 1079) */
        amount: IAmount
        /** Ставка НДС (тег 54 ФЗ — 1199).
         *
         * Чеки по 54-ФЗ — значения:
         * - [Чеки ЮKassa](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#vat-codes)
         * - [сторонние кассы](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#vat-codes)
         * - самозанятые — всегда `1`
         */
        vat_code: number
        /** Количество товара (тег 54 ФЗ — 1023).
         *
         * Чеки по 54-ФЗ: целое или дробное число, разделитель — точка. Максимум и точность зависят от модели кассы.
         *
         * Чеки ЮKassa: до 99999.999, не более 3 знаков после точки.
         *
         * Самозанятые: только целые положительные числа. Пример: `1`. */
        quantity: number
        /** Мера количества (тег 54 ФЗ — 2108) — единица измерения: штуки, граммы и т. д.
         *
         * Обязателен для Чеков ЮKassa или касс на ФФД 1.2.
         *
         * Значения:
         * - [Чеки ЮKassa](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#measure)
         * - [сторонние кассы](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#measure)
         */
        measure?: MeasureType
        /**
         * Дробное количество маркированного товара (тег 54 ФЗ — 1291).
         *
         * Обязателен, если одновременно:
         * - Чеки ЮKassa или касса на ФФД 1.2;
         * - товар подлежит маркировке;
         * - `measure` = `piece`.
         *
         * Пример: карандаши продаёте поштучно, в упаковке 100 шт. с одним кодом маркировки — `numerator`: 1, `denominator`: 100.
         */
        mark_quantity?: MarkQuantity
        /** Признак предмета расчёта (тег 54 ФЗ — 1212) — за что принимаете оплату: товар, услуга и т. д.
         *
         * Значения:
         * - [Чеки ЮKassa](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#payment-subject)
         * - [сторонние кассы](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#payment-subject)
         */
        payment_subject?: PaymentSubject
        /** Признак способа расчёта (тег 54 ФЗ — 1214) — тип оплаты и факт передачи товара.
         *
         * Пример: покупатель полностью оплатил и сразу получил товар — передайте `full_payment`.
         *
         * Значения:
         * - [Чеки ЮKassa](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#payment-mode)
         * - [сторонние кассы](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#payment-mode)
         */
        payment_mode?: PaymentMode
        /** Код страны происхождения по [ОК (МК (ИСО 3166) 004-97) 025-2001](http://docs.cntd.ru/document/842501280).
         *
         * Тег 54 ФЗ — 1230.
         *
         * Пример: `RU`.
         *
         * Для касс Orange Data, Кит Инвест.
         */
        country_of_origin_code?: string
        /** Номер таможенной декларации (1–32 символа).
         *
         * Тег 54 ФЗ — 1231.
         *
         * Для касс Orange Data, Кит Инвест.
         */
        customs_declaration_number?: string
        /** Сумма акциза с копейками (тег 54 ФЗ — 1229). До 2 знаков после точки.
         *
         * Для касс Orange Data, Кит Инвест.
         */
        excise?: string
        /** Поставщик товара или услуги (тег 54 ФЗ — 1224). Для сценария «Сначала платёж, потом чек» */
        supplier?: Supplier
        /**
         * Тип посредника, реализующего товар или услугу. Обязателен с ФФД 1.1.
         * [Перечень значений](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#agent-type).
         * Для касс на ФФД 1.1+ по сценарию [Сначала платёж, потом чек](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#receipt-after-payment)
         */
        agent_type?: AgentType
        /** Код товара (тег 54 ФЗ — 1162) — уникальный номер экземпляра при маркировке.
         *
         * Формат: hex с пробелами, до 32 байт.
         *
         * Обязателен, если одновременно:
         * - касса на ФФД 1.05+;
         * - товар подлежит маркировке.
         *
         * Пример: `00 00 00 01 00 21 FA 41 00 23 05 41 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 12 00 AB 00`.
         */
        product_code?: string
        /** Код товара (тег 54 ФЗ — 1163).
         *
         * Обязателен, если одновременно:
         * - Чеки ЮKassa или касса на ФФД 1.2;
         * - товар подлежит маркировке.
         *
         * Заполните хотя бы одно поле.
         */
        mark_code_info?: MarkCodeInfo
        /** Режим обработки кода маркировки (тег 54 ФЗ — 2102).
         *
         * Обязателен, если одновременно:
         * - Чеки ЮKassa или касса Атол Онлайн / BusinessRu на ФФД 1.2;
         * - товар подлежит маркировке.
         *
         * Передавайте `0`.
         */
        mark_mode?: '0'
        /**
         * Отраслевой реквизит предмета расчёта (тег 54 ФЗ — 1260). Для Чеков ЮKassa или касс на ФФД 1.2
         */
        payment_subject_industry_details?: PaymentSubjectIndustryDetails[]
    }
}
