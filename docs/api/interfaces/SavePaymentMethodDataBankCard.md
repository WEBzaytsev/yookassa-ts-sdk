[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / SavePaymentMethodDataBankCard

# Interface: SavePaymentMethodDataBankCard

Defined in: src/types/savedPaymentMethod.type.ts:25

Запрос на создание привязки банковской карты.

## Properties

### card

> **card**: [`CardRequestDataWithCsc`](CardRequestDataWithCsc.md)

Defined in: src/types/savedPaymentMethod.type.ts:27

***

### client\_ip?

> `optional` **client\_ip?**: `string`

Defined in: src/types/savedPaymentMethod.type.ts:32

***

### confirmation?

> `optional` **confirmation?**: [`PaymentMethodsConfirmationDataRedirect`](PaymentMethodsConfirmationDataRedirect.md)

Defined in: src/types/savedPaymentMethod.type.ts:33

***

### holder

> **holder**: `object`

Defined in: src/types/savedPaymentMethod.type.ts:29

Получатель по OpenAPI — только `gateway_id`.

#### gateway\_id

> **gateway\_id**: `string`

***

### type

> **type**: `"bank_card"`

Defined in: src/types/savedPaymentMethod.type.ts:26
