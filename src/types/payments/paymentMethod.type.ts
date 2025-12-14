import type { IAmount } from '../general.types'

/** Способы оплаты */
export type IPaymentMethod =
    | IPaymentMethodAlfabank
    | IPaymentMethodMobileBalance
    | IPaymentMethodCard
    | IPaymentMethodInstallments
    | IPaymentMethodCash
    | IPaymentMethodSbp
    | IPaymentMethodB2b_sberbank
    | IPaymentMethodTinkoff_bank
    | IPaymentMethodYooMoney
    | IPaymentMethodQiwi
    | IPaymentMethodSberbank
    | IPaymentMethodSberLoan
    | IPaymentMethodSberBnpl
    | IPaymentMethodApplePay
    | IPaymentMethodGooglePay
    | IPaymentMethodWebmoney
    | IPaymentMethodWechat

export enum PaymentMethodsEnum {
    /** Банковская карта или карта МИР */
    bank_card = 'bank_card',

    /** ЮMoney */
    yoo_money = 'yoo_money',

    /**
     * QIWI Кошелек
     * @deprecated QIWI Банк лишён лицензии ЦБ РФ 21.02.2024. Способ оплаты не работает.
     */
    qiwi = 'qiwi',

    /** SberPay */
    sberbank = 'sberbank',

    /**
     * Альфа-Клик
     * @deprecated Сервис устарел. Рекомендуется использовать другие способы оплаты.
     */
    alfabank = 'alfabank',

    /** Тинькофф */
    tinkoff_bank = 'tinkoff_bank',

    /** СберБанк Бизнес Онлайн */
    b2b_sberbank = 'b2b_sberbank',

    /** СБП (Система быстрых платежей) */
    sbp = 'sbp',

    /** Баланс телефона */
    mobile_balance = 'mobile_balance',

    /** Наличные */
    cash = 'cash',

    /** Заплатить по частям */
    installments = 'installments',

    /** "Покупки в кредит" от Сбербанка" */
    sber_loan = 'sber_loan',

    /** Плати частями (BNPL от СберБанка) */
    sber_bnpl = 'sber_bnpl',

    /** Apple Pay (обычно используется через payment_token) */
    apple_pay = 'apple_pay',

    /** Google Pay (обычно используется через payment_token) */
    google_pay = 'google_pay',

    /**
     * WebMoney
     * @deprecated WebMoney прекратил работу в РФ в 2022 году.
     */
    webmoney = 'webmoney',

    /**
     * WeChat Pay
     * @deprecated Специфичный способ оплаты для китайских пользователей.
     */
    wechat = 'wechat',
}

interface IGeneralPayMethod {
    type: PaymentMethodsEnum
    /** Идентификатор способа оплаты. */
    id: string
    /** С помощью сохраненного способа оплаты можно проводить [безакцептные списания](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments)  */
    saved: boolean
    /** Название способа оплаты. */
    title?: string
}

/** Банковская карта */
export interface IPaymentMethodCard extends IGeneralPayMethod {
    /** Код способа оплаты. */
    type: PaymentMethodsEnum.bank_card
    /** Данные банковской карты (необходимы, если вы собираете данные карты пользователей на своей стороне). */
    card?: {
        /** Номер банковской карты. */
        number: string
        /** Срок действия, год, YYYY. */
        expiry_year?: string
        /** Срок действия, месяц, MM. */
        expiry_month: string
        /** Код CVC2 или CVV2, 3 или 4 символа, печатается на обратной стороне карты. */
        csc?: string
        /** Имя владельца карты. */
        cardholder?: string
    }
}

/** Баланс телефона */
export interface IPaymentMethodMobileBalance extends IGeneralPayMethod {
    /** Код способа оплаты. */
    type: PaymentMethodsEnum.mobile_balance
    /** Телефон, с баланса которого осуществляется платеж. Указывается в формате ITU-T E.164, например 79000000000. */
    phone: string
}

/** ЮMoney */
export interface IPaymentMethodYooMoney {
    type: PaymentMethodsEnum.yoo_money
}

/**
 * QIWI Кошелек
 * @deprecated QIWI Банк лишён лицензии ЦБ РФ 21.02.2024. Способ оплаты не работает.
 */
export interface IPaymentMethodQiwi {
    type: PaymentMethodsEnum.qiwi
    /** Телефон, на который зарегистрирован аккаунт в QIWI. Указывается в формате ITU-T E.164, например 79000000000. */
    phone?: string
}

/** SberPay */
export interface IPaymentMethodSberbank {
    type: PaymentMethodsEnum.sberbank
    /** Телефон пользователя, на который зарегистрирован аккаунт в SberPay. Необходим для подтверждения оплаты по смс (сценарий подтверждения external). Указывается в формате ITU-T E.164, например 79000000000. */
    phone?: string
}

/**
 * Альфа-Клик
 * @deprecated Сервис устарел. Рекомендуется использовать другие способы оплаты.
 */
export interface IPaymentMethodAlfabank {
    type: PaymentMethodsEnum.alfabank
    /** Логин пользователя в Альфа-Клике (привязанный телефон или дополнительный логин). Обязателен для сценария External. */
    login?: string
}

/** Тинькофф */
export interface IPaymentMethodTinkoff_bank {
    type: PaymentMethodsEnum.tinkoff_bank
}

/** СберБанк Бизнес Онлайн */
export interface IPaymentMethodB2b_sberbank {
    type: PaymentMethodsEnum.b2b_sberbank
    /** Назначение платежа (не больше 210 символов). */
    payment_purpose: string
    /** Данные о налоге на добавленную стоимость (НДС). Платеж может облагаться или не облагаться НДС. Товары могут облагаться по одной ставке НДС или по разным. */
    vat_data: {
        /** Код способа расчета НДС. */
        type: 'mixed' | 'calculated' | 'untaxed'
        /** Сумма НДС. */
        amount?: IAmount
    }
}

/** СБП (Система быстрых платежей) */
export interface IPaymentMethodSbp {
    type: PaymentMethodsEnum.sbp
}

/** Наличные */
export interface IPaymentMethodCash {
    type: PaymentMethodsEnum.cash
    /** Телефон пользователя, на который придет смс с кодом платежа (для внесения наличных). Указывается в формате ITU-T E.164, например 79000000000. Поле можно оставить пустым: пользователь сможет заполнить его при оплате на стороне ЮKassa. */
    phone?: string
}

/** Заплатить по частям */
export interface IPaymentMethodInstallments {
    type: PaymentMethodsEnum.installments
}

/** "Покупки в кредит" от Сбербанка" */
export interface IPaymentMethodSberLoan extends IGeneralPayMethod {
    type: PaymentMethodsEnum.sber_loan
    /** Сумма скидки для рассрочки. Присутствует для платежей в статусе `waiting_for_capture` и `succeeded`, если пользователь выбрал рассрочку. */
    discount_amount?: IAmount
    /** Тариф кредита, который пользователь выбрал при оплате.
     *
     * Возможные значения:
     * -`loan` — кредит;
     * `installments_XX` — рассрочка, где `XX` — количество месяцев для выплаты рассрочки. Например, `installments_3` — рассрочка на 3 месяца.
     * Присутствует для платежей в статусе `waiting_for_capture` и `succeeded`.
     */
    loan_option?: 'loan' | `installments_${number}`
}

/** Плати частями (BNPL от СберБанка) */
export interface IPaymentMethodSberBnpl {
    type: PaymentMethodsEnum.sber_bnpl
    /** Идентификатор способа оплаты */
    id: string
    /** С помощью сохраненного способа оплаты можно проводить безакцептные списания */
    saved: boolean
    /** Статус способа оплаты */
    status?: 'inactive' | 'active'
}

/** Apple Pay (обычно используется через payment_token) */
export interface IPaymentMethodApplePay extends IGeneralPayMethod {
    type: PaymentMethodsEnum.apple_pay
}

/** Google Pay (обычно используется через payment_token) */
export interface IPaymentMethodGooglePay extends IGeneralPayMethod {
    type: PaymentMethodsEnum.google_pay
}

/**
 * WebMoney
 * @deprecated WebMoney прекратил работу в РФ в 2022 году.
 */
export interface IPaymentMethodWebmoney extends IGeneralPayMethod {
    type: PaymentMethodsEnum.webmoney
}

/**
 * WeChat Pay
 * @deprecated Специфичный способ оплаты для китайских пользователей.
 */
export interface IPaymentMethodWechat extends IGeneralPayMethod {
    type: PaymentMethodsEnum.wechat
}

// ========== PaymentMethodData (для создания платежа) ========== //

/** Данные банковской карты для создания платежа */
export interface PaymentMethodDataCard {
    type: 'bank_card'
    /** Данные банковской карты */
    card?: {
        /** Номер банковской карты */
        number?: string
        /** Срок действия, год, YYYY */
        expiry_year?: string
        /** Срок действия, месяц, MM */
        expiry_month?: string
        /** Код CVC2 или CVV2 */
        csc?: string
        /** Имя владельца карты */
        cardholder?: string
    }
}

/** Данные для оплаты через ЮMoney */
export interface PaymentMethodDataYooMoney {
    type: 'yoo_money'
}

/**
 * Данные для оплаты через QIWI Кошелек
 * @deprecated QIWI Банк лишён лицензии ЦБ РФ 21.02.2024. Способ оплаты не работает.
 */
export interface PaymentMethodDataQiwi {
    type: 'qiwi'
    /** Телефон, на который зарегистрирован аккаунт в QIWI */
    phone?: string
}

/** Данные для оплаты через SberPay */
export interface PaymentMethodDataSberbank {
    type: 'sberbank'
    /** Телефон пользователя для подтверждения по смс */
    phone?: string
}

/**
 * Данные для оплаты через Альфа-Клик
 * @deprecated Сервис устарел. Используйте другие способы оплаты.
 */
export interface PaymentMethodDataAlfabank {
    type: 'alfabank'
    /** Логин пользователя в Альфа-Клике */
    login?: string
}

/** Данные для оплаты через Тинькофф (T-Pay) */
export interface PaymentMethodDataTinkoff {
    type: 'tinkoff_bank'
}

/** Данные для оплаты через СберБанк Бизнес Онлайн */
export interface PaymentMethodDataB2bSberbank {
    type: 'b2b_sberbank'
    /** Назначение платежа (не больше 210 символов) */
    payment_purpose: string
    /** Данные о НДС */
    vat_data: {
        type: 'mixed' | 'calculated' | 'untaxed'
        amount?: IAmount
    }
}

/** Данные для оплаты через СБП */
export interface PaymentMethodDataSbp {
    type: 'sbp'
}

/** Данные для оплаты с баланса телефона */
export interface PaymentMethodDataMobileBalance {
    type: 'mobile_balance'
    /** Телефон, с баланса которого осуществляется платеж */
    phone?: string
}

/** Данные для оплаты наличными */
export interface PaymentMethodDataCash {
    type: 'cash'
    /** Телефон для получения кода платежа */
    phone?: string
}

/** Данные для оплаты в рассрочку */
export interface PaymentMethodDataInstallments {
    type: 'installments'
}

/** Данные для оплаты через "Покупки в кредит" от Сбербанка */
export interface PaymentMethodDataSberLoan {
    type: 'sber_loan'
}

/**
 * Данные для оплаты через "Плати частями" (BNPL от СберБанка)
 * @see https://yookassa.ru/developers/payment-acceptance/integration-scenarios/manual-integration/other/sber-bnpl
 */
export interface PaymentMethodDataSberBnpl {
    type: 'sber_bnpl'
    /** Телефон пользователя для авторизации в сервисе (опционально, можно ввести на странице YooKassa) */
    phone?: string
}

/**
 * Данные для оплаты конкретным способом.
 * Передаётся в `payment_method_data` при создании платежа.
 * @see https://yookassa.ru/developers/api#create_payment
 */
export type PaymentMethodData =
    | PaymentMethodDataCard
    | PaymentMethodDataYooMoney
    | PaymentMethodDataQiwi
    | PaymentMethodDataSberbank
    | PaymentMethodDataAlfabank
    | PaymentMethodDataTinkoff
    | PaymentMethodDataB2bSberbank
    | PaymentMethodDataSbp
    | PaymentMethodDataMobileBalance
    | PaymentMethodDataCash
    | PaymentMethodDataInstallments
    | PaymentMethodDataSberLoan
    | PaymentMethodDataSberBnpl
