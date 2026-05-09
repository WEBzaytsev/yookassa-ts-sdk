[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / InvoicePaymentData

# Interface: InvoicePaymentData

Defined in: src/types/invoice.type.ts:22

Данные платежа внутри выставленного счёта.

## Properties

### amount

> **amount**: [`IAmount`](IAmount.md)

Defined in: src/types/invoice.type.ts:23

***

### capture?

> `optional` **capture?**: `boolean`

Defined in: src/types/invoice.type.ts:27

***

### client\_ip?

> `optional` **client\_ip?**: `string`

Defined in: src/types/invoice.type.ts:28

***

### description?

> `optional` **description?**: `string`

Defined in: src/types/invoice.type.ts:29

***

### metadata?

> `optional` **metadata?**: [`Metadata`](Metadata.md)

Defined in: src/types/invoice.type.ts:30

***

### receipt?

> `optional` **receipt?**: [`ReceiptinPaymentType`](../YooKassa-SDK-API-Reference/namespaces/Receipts/type-aliases/ReceiptinPaymentType.md)

Defined in: src/types/invoice.type.ts:24

***

### recipient?

> `optional` **recipient?**: [`InvoicePaymentRecipient`](InvoicePaymentRecipient.md)

Defined in: src/types/invoice.type.ts:25

***

### save\_payment\_method?

> `optional` **save\_payment\_method?**: `boolean`

Defined in: src/types/invoice.type.ts:26
