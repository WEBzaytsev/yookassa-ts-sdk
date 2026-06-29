import type { SettlementTypeMap } from '../../dictionaries'
import type { Customer } from '../customer.type'
import type { IAmount } from '../general.types'
import type { Items } from './item.type'

export namespace Receipts {
    /**
     * Статус регистрации чека:
     * - `pending` — в обработке;
     * - `succeeded` — зарегистрирован;
     * - `canceled` — не зарегистрирован; для Чеков ЮKassa — в поддержку, иначе — чек вручную.
     * Есть при [отправке чеков через ЮKassa](https://yookassa.ru/developers/payment-acceptance/receipts/basics) в налоговую.
     */
    export type ReceiptRegistrationStatus = 'pending' | 'succeeded' | 'canceled'

    /** Тип чека: приход (`payment`) или возврат прихода (`refund`). */
    export type ReceiptKind = 'payment' | 'refund'

    /**
     * Статус доставки данных в онлайн-кассу:
     * - `pending` — в обработке;
     * - `succeeded` — зарегистрирован;
     * - `canceled` — не зарегистрирован; для Чеков ЮKassa — в поддержку, иначе — чек вручную.
     */
    export type ReceiptStatus = 'pending' | 'succeeded' | 'canceled'

    /** Типы расчётов */
    export type SettlementType = keyof typeof SettlementTypeMap

    /** Расчёт */
    export type Settlement = {
        /** Тип расчёта */
        type: SettlementType
        /** Сумма */
        amount: IAmount
    }

    /** Объект чека — актуальные данные из API */
    export interface IReceipt {
        /** ID чека в ЮKassa */
        readonly id: string
        /** Тип чека: приход (`payment`) или возврат прихода (`refund`) */
        type: ReceiptKind
        /** ID платежа, по которому сформирован чек */
        payment_id?: string
        /** ID возврата, по которому сформирован чек. Нет в чеке платежа */
        refund_id?: string
        /**
         * Статус доставки данных в онлайн-кассу:
         * - `pending` — в обработке;
         * - `succeeded` — зарегистрирован;
         * - `canceled` — не зарегистрирован; для Чеков ЮKassa — в поддержку, иначе — чек вручную.
         */
        readonly status: ReceiptStatus
        /** Номер фискального документа */
        readonly fiscal_document_number?: string
        /** Номер фискального накопителя в кассовом аппарате */
        readonly fiscal_storage_number?: string
        /** Фискальный признак. Формирует фискальный накопитель из данных регистрации */
        readonly fiscal_attribute?: string
        /** Время формирования чека в фискальном накопителе (ISO 8601) */
        readonly registered_at?: string
        /** ID чека в онлайн-кассе. Есть после успешной регистрации */
        readonly fiscal_provider_id?: string
        /** Товары в чеке (до 100) */
        items: Items.Item[]
        /** Совершённые расчёты */
        settlements?: Settlement[]
        /** ID магазина-отправителя чека. Выдаёт ЮKassa. Для Сплитования платежей */
        on_behalf_of?: string
        /** Система налогообложения магазина (тег 54 ФЗ — 1055).
         *
         * Сторонние кассы: обязателен для Атол Онлайн на ФФД 1.2 или при нескольких СНО; иначе не передавайте.
         * [Перечень значений](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#tax-systems)
         *
         * Чеки ЮKassa: не передавайте — ЮKassa проигнорирует. */
        tax_system_code?: number
        /** Отраслевой реквизит чека (тег 54 ФЗ — 1261). Для Чеков ЮKassa или касс на ФФД 1.2 */
        receipt_industry_details?: Items.PaymentSubjectIndustryDetails[]
        /** Операционный реквизит чека (тег 54 ФЗ — 1270). Для Чеков ЮKassa или касс на ФФД 1.2 */
        receipt_operational_details?: {
            /** ID операции (тег 54 ФЗ — 1271). Число 0–255 */
            operation_id: number
            /** Данные операции (тег 54 ФЗ — 1272) */
            value: string
            /** Время операции (тег 54 ФЗ — 1273).
             *
             * [UTC](https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F), формат [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
             *
             * Пример: `2017-11-03T11:52:31.827Z`
             */
            created_at: string
        }
    }

    export type CreateReceiptType = Pick<
        IReceipt,
        | 'type'
        | 'payment_id'
        | 'refund_id'
        | 'items'
        | 'tax_system_code'
        | 'receipt_industry_details'
        | 'receipt_operational_details'
        | 'on_behalf_of'
    > & {
        /** Данные пользователя. Минимум контактов: для Чеков ЮKassa — `customer.email`; иначе — `customer.email` или `customer.phone`. */
        customer: Customer
        /** Регистрация чека в кассе сразу после создания. Передавайте только `true` */
        send: true
        /** Дополнительный реквизит пользователя (тег 54 ФЗ — 1084). Для сценария «Сначала платёж, потом чек» */
        additional_user_props?: {
            /** Наименование дополнительного реквизита (тег 54 ФЗ — 1085). До 64 символов */
            name: string
            /** Значение дополнительного реквизита (тег 54 ФЗ — 1086). До 234 символов */
            value: string
        }
        /** Совершённые расчёты */
        settlements: Settlement[]
    }
    /**
     * Данные для чека при создании платежа. Передавайте, если:
     * - компания или ИП и оплата по 54-ФЗ через [Чеки ЮKassa](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/basics);
     * - компания или ИП, [сторонняя касса](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics) — сценарии [Платёж и чек одновременно](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#payment-and-receipt) или [Сначала чек, потом платёж](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#payment-after-receipt);
     * - самозанятый — [автоотправка чеков](https://yookassa.ru/developers/payment-acceptance/receipts/self-employed/basics).
     */
    export type ReceiptinPaymentType = Partial<
        Pick<
            CreateReceiptType,
            'customer' | 'tax_system_code' | 'receipt_industry_details' | 'receipt_operational_details'
        >
    > &
        Required<Pick<CreateReceiptType, 'items'>>
}
