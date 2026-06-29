[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / SavePaymentMethodDataBankCard

# Interface: SavePaymentMethodDataBankCard

Defined in: [src/types/savedPaymentMethod.type.ts:65](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/savedPaymentMethod.type.ts#L65)

Запрос привязки банковской карты

## Properties

### card

> **card**: [`CardRequestDataWithCsc`](CardRequestDataWithCsc.md)

Defined in: [src/types/savedPaymentMethod.type.ts:67](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/savedPaymentMethod.type.ts#L67)

***

### client\_ip?

> `optional` **client\_ip?**: `string`

Defined in: [src/types/savedPaymentMethod.type.ts:72](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/savedPaymentMethod.type.ts#L72)

***

### confirmation?

> `optional` **confirmation?**: [`PaymentMethodsConfirmationDataRedirect`](PaymentMethodsConfirmationDataRedirect.md) \| [`PaymentMethodsConfirmationDataQr`](PaymentMethodsConfirmationDataQr.md)

Defined in: [src/types/savedPaymentMethod.type.ts:73](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/savedPaymentMethod.type.ts#L73)

***

### holder

> **holder**: `object`

Defined in: [src/types/savedPaymentMethod.type.ts:69](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/savedPaymentMethod.type.ts#L69)

Получатель по OpenAPI — только `gateway_id`

#### gateway\_id

> **gateway\_id**: `string`

***

### type

> **type**: `"bank_card"`

Defined in: [src/types/savedPaymentMethod.type.ts:66](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/savedPaymentMethod.type.ts#L66)
