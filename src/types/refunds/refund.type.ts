import type { refundCancelReasonMap } from '../../dictionaries'
import type { IAmount, Metadata } from '../general.types'
import type { Payments } from '../payments/payment.type'
import type { Receipts } from '../receipt/'
import type { ElectronicCertificateRefundMethod, RefundMethod } from './refundMethod.type'

export namespace Refunds {
    type RefundDealType = {
        /** ID сделки из возвращаемого платежа */
        id: string
        /** Распределение денег */
        refund_settlements: Payments.DealType['settlements']
    }

    type RefundCancelReason = keyof typeof refundCancelReasonMap
    export interface IRefundCancellationDetails {
        /** Инициатор отмены возврата
         * @see https://yookassa.ru/developers/payment-acceptance/after-the-payment/refunds#declined-refunds-cancellation-details-party
         */
        party: 'yoo_money' | 'payment_network'
        /** Причина отмены возврата
         * @see https://yookassa.ru/developers/payment-acceptance/after-the-payment/refunds#declined-refunds-cancellation-details-reason
         */
        reason: RefundCancelReason
    }

    export interface IRefundSource {
        /**
         * ID магазина для возврата. Выдаёт ЮKassa, см. раздел «Продавцы» в ЛК (столбец shopId).
         */
        account_id: string
        /** Сумма возврата */
        amount: IAmount
        /** Комиссия, удержанная при оплате и подлежащая возврату */
        platform_fee_amount?: IAmount
    }

    export type RefundStatus = 'pending' | 'succeeded' | 'canceled'

    /**
     * **Объект возврата**
     *
     * Актуальная информация о возврате успешного платежа.
     * Приходит в ответ на любой запрос по возвратам.
     * Неописанные в справочнике поля игнорируйте.
     */
    export interface IRefund {
        /** ID возврата в ЮKassa */
        readonly id: string
        /** ID платежа в ЮKassa */
        payment_id: string
        /**
         * Статус возврата:
         * - `pending` — создан, обрабатывается;
         * - `succeeded` — завершён, сумма переведена пользователю (финальный);
         * - `canceled` — отменён, детали в `cancellation_details` (финальный).
         *
         * Часть статусов может пропускаться, порядок не меняется.
         * Статус — опрос API или уведомление от ЮKassa.
         * @see https://yookassa.ru/developers/payment-acceptance/after-the-payment/refunds#status
         */
        readonly status: RefundStatus
        /** Комментарий к `canceled`: кто и почему отменил */
        readonly cancellation_details?: IRefundCancellationDetails
        /**
         * Статус регистрации чека:
         * - `pending` — в обработке;
         * - `succeeded` — зарегистрирован;
         * - `canceled` — не зарегистрирован; для Чеков ЮKassa — в поддержку, иначе — вручную.
         * Есть при [отправке чеков через ЮKassa](https://yookassa.ru/developers/payment-acceptance/receipts/basics).
         */
        readonly receipt_registration?: Receipts.ReceiptRegistrationStatus
        /**
         * Время создания (UTC, ISO 8601). Пример: `2017-11-03T11:52:31.827Z`
         */
        readonly created_at: string
        /** Сумма, возвращённая пользователю */
        amount: IAmount
        /** Основание возврата */
        description?: string
        /**
         * Магазин и сумма удержания для возврата.
         * Есть при [Сплитовании платежей](https://yookassa.ru/developers/solutions-for-platforms/split-payments/basics).
         */
        sources?: IRefundSource[]
        /**
         * Сделка возврата.
         * Есть при [Безопасной сделке](https://yookassa.ru/developers/solutions-for-platforms/safe-deal/basics).
         */
        deal?: RefundDealType
        /** Детали возврата — зависят от способа оплаты платежа */
        readonly refund_method?: RefundMethod
        /**
         * Авторизация возврата по банковской карте.
         * Есть для возвратов по карточным платежам.
         */
        readonly refund_authorization_details?: {
            /** RRN — ID транзакции у эмитента */
            rrn?: string
        }
        /** Произвольные данные */
        metadata?: Metadata
    }

    export type CreateRefundRequest = Pick<IRefund, 'payment_id' | 'amount' | 'description' | 'sources' | 'deal'> & {
        /**
         * **Данные для чека**
         *
         * Передайте, если:
         * - компания/ИП с [Чеками ЮKassa](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/basics);
         * - компания/ИП со [сторонней кассой](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics) по сценарию [платёж и чек](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#payment-and-receipt) или [сначала чек](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#payment-after-receipt);
         * - самозанятый с [автоотправкой чеков](https://yookassa.ru/developers/payment-acceptance/receipts/self-employed/basics).
         */
        receipt?: Receipts.CreateReceiptType
        /** Детали возврата — зависят от способа оплаты платежа */
        refund_method_data?: ElectronicCertificateRefundMethod
    }
}
