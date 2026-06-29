import type { IAmount } from '../general.types'

interface IElectronicCertificate {
    /** ID корзины возврата в НСПК */
    basket_id: string
    /** Сумма возврата на электронный сертификат */
    amount: IAmount
}

interface IArticle {
    /** Порядковый номер товара в корзине возврата (1–999) */
    article_number: number
    /** Номер товара в одобренной корзине покупки (`article_number` платежа, 1–999) */
    payment_article_number: number
    /**
     * Код ТРУ: 30 символов, `NNNNNNNNN.NNNNNNNNNYYYYMMMMZZZ`
     * (`NNNNNNNNN.NNNNNNNNN` — вид ТРУ, `YYYY` — производитель, `MMMM` — модель, `ZZZ` — страна).
     *
     * Пример: `329921120.06001010200080001643`
     *
     * @see [Код ТРУ](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/manual-integration/other/electronic-certificate#payments-preparation-tru-code)
     */
    tru_code: string
    /** Количество возвращаемых единиц. Целое положительное число */
    quantity: number
}

type RefundMethodTypeName = 'sbp' | 'electronic_certificate'
interface IRefundMethodGeneral {
    type: RefundMethodTypeName
}
type SbpRefundMethod = IRefundMethodGeneral & {
    type: 'sbp'
    /** ID операции в СБП (НСПК). Пример: `1027088AE4CB48CB81287833347A8777`.
     * Обязателен для возвратов в `succeeded` */
    sbp_operation_id?: string
}

export type ElectronicCertificateRefundMethod = IRefundMethodGeneral & {
    type: 'electronic_certificate'
    /** Корзина возврата — товары, оплаченные электронным сертификатом.
     * Есть при оплате на готовой странице ЮKassa */
    articles: IArticle[]
    /** Данные ФЭС НСПК для возврата на сертификат */
    electronic_certificate?: IElectronicCertificate
}

export type RefundMethod = SbpRefundMethod | ElectronicCertificateRefundMethod
