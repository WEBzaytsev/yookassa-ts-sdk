[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IConfirmationMobileApp

# Interface: IConfirmationMobileApp

Defined in: [src/types/payments/paymentsConfirmation.type.ts:73](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/payments/paymentsConfirmation.type.ts#L73)

***Сценарий подтверждения `Mobile application`***

для подтверждения платежа пользователю необходимо совершить действия в мобильном приложении (например, в приложении интернет-банка). Вам нужно перенаправить пользователя на confirmation_url, полученный в платеже

## Properties

### confirmation\_url

> **confirmation\_url**: `string`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:76](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/payments/paymentsConfirmation.type.ts#L76)

Диплинк на мобильное приложение, в котором пользователь подтверждает платеж.

***

### type

> **type**: `"mobile_application"`

Defined in: [src/types/payments/paymentsConfirmation.type.ts:74](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/7f1245c9c0c123811c855c0e24ace075798fe019/src/types/payments/paymentsConfirmation.type.ts#L74)
