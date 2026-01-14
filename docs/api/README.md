**YooKassa SDK API Reference**

***

# YooKassa SDK API Reference

## Namespaces

- [Items](YooKassa-SDK-API-Reference/namespaces/Items/README.md)
- [Payments](YooKassa-SDK-API-Reference/namespaces/Payments/README.md)
- [Receipts](YooKassa-SDK-API-Reference/namespaces/Receipts/README.md)
- [Refunds](YooKassa-SDK-API-Reference/namespaces/Refunds/README.md)

## Enumerations

- [BankCardSourceEnum](enumerations/BankCardSourceEnum.md)
- [BankCardTypeEnum](enumerations/BankCardTypeEnum.md)
- [ConfirmationTypesEnum](enumerations/ConfirmationTypesEnum.md)
- [CurrencyEnum](enumerations/CurrencyEnum.md)
- [LocaleEnum](enumerations/LocaleEnum.md)
- [PaymentMethodsEnum](enumerations/PaymentMethodsEnum.md)
- [WebhookEventEnum](enumerations/WebhookEventEnum.md)

## Classes

- [WebhookValidationError](classes/WebhookValidationError.md)
- [YooKassaErr](classes/YooKassaErr.md)
- [YooKassaSdk](classes/YooKassaSdk.md)

## Interfaces

- [CreateWebhookRequest](interfaces/CreateWebhookRequest.md)
- [IAmount](interfaces/IAmount.md)
- [IBankCardData](interfaces/IBankCardData.md)
- [IConfirmationEmbedded](interfaces/IConfirmationEmbedded.md)
- [IConfirmationExternal](interfaces/IConfirmationExternal.md)
- [IConfirmationMobileApp](interfaces/IConfirmationMobileApp.md)
- [IConfirmationQR](interfaces/IConfirmationQR.md)
- [IConfirmationRedirect](interfaces/IConfirmationRedirect.md)
- [~~IPaymentMethodAlfabank~~](interfaces/IPaymentMethodAlfabank.md)
- [IPaymentMethodApplePay](interfaces/IPaymentMethodApplePay.md)
- [IPaymentMethodB2b\_sberbank](interfaces/IPaymentMethodB2b_sberbank.md)
- [IPaymentMethodCard](interfaces/IPaymentMethodCard.md)
- [IPaymentMethodCash](interfaces/IPaymentMethodCash.md)
- [IPaymentMethodGooglePay](interfaces/IPaymentMethodGooglePay.md)
- [IPaymentMethodInstallments](interfaces/IPaymentMethodInstallments.md)
- [IPaymentMethodMobileBalance](interfaces/IPaymentMethodMobileBalance.md)
- [~~IPaymentMethodQiwi~~](interfaces/IPaymentMethodQiwi.md)
- [IPaymentMethodSberbank](interfaces/IPaymentMethodSberbank.md)
- [IPaymentMethodSberBnpl](interfaces/IPaymentMethodSberBnpl.md)
- [IPaymentMethodSberLoan](interfaces/IPaymentMethodSberLoan.md)
- [IPaymentMethodSbp](interfaces/IPaymentMethodSbp.md)
- [IPaymentMethodTinkoff\_bank](interfaces/IPaymentMethodTinkoff_bank.md)
- [~~IPaymentMethodWebmoney~~](interfaces/IPaymentMethodWebmoney.md)
- [~~IPaymentMethodWechat~~](interfaces/IPaymentMethodWechat.md)
- [IPaymentMethodYooMoney](interfaces/IPaymentMethodYooMoney.md)
- [IShopInfo](interfaces/IShopInfo.md)
- [IWebhook](interfaces/IWebhook.md)
- [~~PaymentMethodDataAlfabank~~](interfaces/PaymentMethodDataAlfabank.md)
- [PaymentMethodDataB2bSberbank](interfaces/PaymentMethodDataB2bSberbank.md)
- [PaymentMethodDataCard](interfaces/PaymentMethodDataCard.md)
- [PaymentMethodDataCash](interfaces/PaymentMethodDataCash.md)
- [PaymentMethodDataInstallments](interfaces/PaymentMethodDataInstallments.md)
- [PaymentMethodDataMobileBalance](interfaces/PaymentMethodDataMobileBalance.md)
- [~~PaymentMethodDataQiwi~~](interfaces/PaymentMethodDataQiwi.md)
- [PaymentMethodDataSberbank](interfaces/PaymentMethodDataSberbank.md)
- [PaymentMethodDataSberBnpl](interfaces/PaymentMethodDataSberBnpl.md)
- [PaymentMethodDataSberLoan](interfaces/PaymentMethodDataSberLoan.md)
- [PaymentMethodDataSbp](interfaces/PaymentMethodDataSbp.md)
- [PaymentMethodDataTinkoff](interfaces/PaymentMethodDataTinkoff.md)
- [PaymentMethodDataYooMoney](interfaces/PaymentMethodDataYooMoney.md)
- [WebhookList](interfaces/WebhookList.md)
- [WebhookNotification](interfaces/WebhookNotification.md)

## Type Aliases

- [ConfirmationTypes](type-aliases/ConfirmationTypes.md)
- [ConnectorOpts](type-aliases/ConnectorOpts.md)
- [CreatePaymentResponse](type-aliases/CreatePaymentResponse.md)
- [Customer](type-aliases/Customer.md)
- [DateFilter](type-aliases/DateFilter.md)
- [ElectronicCertificateRefundMethod](type-aliases/ElectronicCertificateRefundMethod.md)
- [GetListResponse](type-aliases/GetListResponse.md)
- [GetPaymentListFilter](type-aliases/GetPaymentListFilter.md)
- [GetReceiptListFilter](type-aliases/GetReceiptListFilter.md)
- [GetRefundListFilter](type-aliases/GetRefundListFilter.md)
- [IAirline](type-aliases/IAirline.md)
- [IConfirmation](type-aliases/IConfirmation.md)
- [IPaymentMethod](type-aliases/IPaymentMethod.md)
- [MandatorySavePaymentMethodType](type-aliases/MandatorySavePaymentMethodType.md)
- [OptionalSavePaymentMethodType](type-aliases/OptionalSavePaymentMethodType.md)
- [PaymentMethodData](type-aliases/PaymentMethodData.md)
- [PaymentNotification](type-aliases/PaymentNotification.md)
- [ProxyConfig](type-aliases/ProxyConfig.md)
- [Receiver](type-aliases/Receiver.md)
- [RecurringPaymentMethodType](type-aliases/RecurringPaymentMethodType.md)
- [RefundMethod](type-aliases/RefundMethod.md)
- [RefundNotification](type-aliases/RefundNotification.md)
- [WebhookEvent](type-aliases/WebhookEvent.md)
- [YooKassaErrResponse](type-aliases/YooKassaErrResponse.md)

## Variables

- [AgentTypeMap](variables/AgentTypeMap.md)
- [measureTypeMap](variables/measureTypeMap.md)
- [paymentCancelReasonMap](variables/paymentCancelReasonMap.md)
- [paymentSubjectMap](variables/paymentSubjectMap.md)
- [refundCancelReasonMap](variables/refundCancelReasonMap.md)
- [SettlementTypeMap](variables/SettlementTypeMap.md)
- [YOOKASSA\_IP\_RANGES](variables/YOOKASSA_IP_RANGES.md)
- [YOOKASSA\_IPV6\_RANGE](variables/YOOKASSA_IPV6_RANGE.md)

## Functions

- [clearYooKassaCache](functions/clearYooKassaCache.md)
- [isYooKassaIP](functions/isYooKassaIP.md)
- [parseNotification](functions/parseNotification.md)
- [parsePaymentNotification](functions/parsePaymentNotification.md)
- [parseRefundNotification](functions/parseRefundNotification.md)
- [YooKassa](functions/YooKassa.md)
