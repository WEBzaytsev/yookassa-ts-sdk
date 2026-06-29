[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / SavePaymentMethodSbp

# Interface: SavePaymentMethodSbp

Defined in: [src/types/savedPaymentMethod.type.ts:119](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/savedPaymentMethod.type.ts#L119)

Сохранённый счёт СБП (ответ API).

## See

https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments/save-payment-method/save-without-payment/sbp

## Properties

### confirmation?

> `optional` **confirmation?**: [`PaymentMethodsConfirmationRedirect`](PaymentMethodsConfirmationRedirect.md) \| [`PaymentMethodsConfirmationQr`](PaymentMethodsConfirmationQr.md)

Defined in: [src/types/savedPaymentMethod.type.ts:131](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/savedPaymentMethod.type.ts#L131)

***

### holder

> **holder**: `object`

Defined in: [src/types/savedPaymentMethod.type.ts:124](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/savedPaymentMethod.type.ts#L124)

#### account\_id

> **account\_id**: `string`

#### gateway\_id?

> `optional` **gateway\_id?**: `string`

***

### id

> **id**: `string`

Defined in: [src/types/savedPaymentMethod.type.ts:121](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/savedPaymentMethod.type.ts#L121)

***

### payer\_bank\_details?

> `optional` **payer\_bank\_details?**: [`SavePaymentMethodSbpPayerBankDetails`](SavePaymentMethodSbpPayerBankDetails.md)

Defined in: [src/types/savedPaymentMethod.type.ts:130](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/savedPaymentMethod.type.ts#L130)

Реквизиты счёта. Есть для привязок в статусе `active`

***

### saved

> **saved**: `boolean`

Defined in: [src/types/savedPaymentMethod.type.ts:122](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/savedPaymentMethod.type.ts#L122)

***

### status

> **status**: [`SavePaymentMethodStatus`](../type-aliases/SavePaymentMethodStatus.md)

Defined in: [src/types/savedPaymentMethod.type.ts:123](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/savedPaymentMethod.type.ts#L123)

***

### title?

> `optional` **title?**: `string`

Defined in: [src/types/savedPaymentMethod.type.ts:128](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/savedPaymentMethod.type.ts#L128)

***

### type

> **type**: `"sbp"`

Defined in: [src/types/savedPaymentMethod.type.ts:120](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/savedPaymentMethod.type.ts#L120)
