[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / SavePaymentMethodBankCard

# Interface: SavePaymentMethodBankCard

Defined in: src/types/savedPaymentMethod.type.ts:48

Сохранённая банковская карта (ответ API).

## Properties

### card?

> `optional` **card?**: [`IBankCardData`](IBankCardData.md)

Defined in: src/types/savedPaymentMethod.type.ts:58

***

### confirmation?

> `optional` **confirmation?**: [`PaymentMethodsConfirmationRedirect`](PaymentMethodsConfirmationRedirect.md)

Defined in: src/types/savedPaymentMethod.type.ts:59

***

### holder

> **holder**: `object`

Defined in: src/types/savedPaymentMethod.type.ts:53

#### account\_id

> **account\_id**: `string`

#### gateway\_id

> **gateway\_id**: `string`

***

### id

> **id**: `string`

Defined in: src/types/savedPaymentMethod.type.ts:50

***

### saved

> **saved**: `boolean`

Defined in: src/types/savedPaymentMethod.type.ts:51

***

### status

> **status**: [`SavePaymentMethodStatus`](../type-aliases/SavePaymentMethodStatus.md)

Defined in: src/types/savedPaymentMethod.type.ts:52

***

### title?

> `optional` **title?**: `string`

Defined in: src/types/savedPaymentMethod.type.ts:57

***

### type

> **type**: `"bank_card"`

Defined in: src/types/savedPaymentMethod.type.ts:49
