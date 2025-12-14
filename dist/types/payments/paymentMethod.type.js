"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodsEnum = void 0;
var PaymentMethodsEnum;
(function (PaymentMethodsEnum) {
    /** Банковская карта или карта МИР */
    PaymentMethodsEnum["bank_card"] = "bank_card";
    /** ЮMoney */
    PaymentMethodsEnum["yoo_money"] = "yoo_money";
    /**
     * QIWI Кошелек
     * @deprecated QIWI Банк лишён лицензии ЦБ РФ 21.02.2024. Способ оплаты не работает.
     */
    PaymentMethodsEnum["qiwi"] = "qiwi";
    /** SberPay */
    PaymentMethodsEnum["sberbank"] = "sberbank";
    /**
     * Альфа-Клик
     * @deprecated Сервис устарел. Рекомендуется использовать другие способы оплаты.
     */
    PaymentMethodsEnum["alfabank"] = "alfabank";
    /** Тинькофф */
    PaymentMethodsEnum["tinkoff_bank"] = "tinkoff_bank";
    /** СберБанк Бизнес Онлайн */
    PaymentMethodsEnum["b2b_sberbank"] = "b2b_sberbank";
    /** СБП (Система быстрых платежей) */
    PaymentMethodsEnum["sbp"] = "sbp";
    /** Баланс телефона */
    PaymentMethodsEnum["mobile_balance"] = "mobile_balance";
    /** Наличные */
    PaymentMethodsEnum["cash"] = "cash";
    /** Заплатить по частям */
    PaymentMethodsEnum["installments"] = "installments";
    /** "Покупки в кредит" от Сбербанка" */
    PaymentMethodsEnum["sber_loan"] = "sber_loan";
    /** Плати частями (BNPL от СберБанка) */
    PaymentMethodsEnum["sber_bnpl"] = "sber_bnpl";
    /** Apple Pay (обычно используется через payment_token) */
    PaymentMethodsEnum["apple_pay"] = "apple_pay";
    /** Google Pay (обычно используется через payment_token) */
    PaymentMethodsEnum["google_pay"] = "google_pay";
    /**
     * WebMoney
     * @deprecated WebMoney прекратил работу в РФ в 2022 году.
     */
    PaymentMethodsEnum["webmoney"] = "webmoney";
    /**
     * WeChat Pay
     * @deprecated Специфичный способ оплаты для китайских пользователей.
     */
    PaymentMethodsEnum["wechat"] = "wechat";
})(PaymentMethodsEnum || (exports.PaymentMethodsEnum = PaymentMethodsEnum = {}));
//# sourceMappingURL=paymentMethod.type.js.map