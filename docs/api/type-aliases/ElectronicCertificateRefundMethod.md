[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / ElectronicCertificateRefundMethod

# Type Alias: ElectronicCertificateRefundMethod

> **ElectronicCertificateRefundMethod** = `IRefundMethodGeneral` & `object`

Defined in: [src/types/refunds/refundMethod.type.ts:43](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/refunds/refundMethod.type.ts#L43)

## Type Declaration

### articles

> **articles**: `IArticle`[]

Корзина возврата — список возвращаемых товаров, для оплаты которых использовался электронный сертификат.
Присутствует, если оплата была на готовой странице ЮKassa.

### electronic\_certificate?

> `optional` **electronic\_certificate**: `IElectronicCertificate`

Данные от ФЭС НСПК для возврата на электронный сертификат.

### type

> **type**: `"electronic_certificate"`
