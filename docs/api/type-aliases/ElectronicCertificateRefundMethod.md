[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / ElectronicCertificateRefundMethod

# Type Alias: ElectronicCertificateRefundMethod

> **ElectronicCertificateRefundMethod** = `IRefundMethodGeneral` & `object`

Defined in: [src/types/refunds/refundMethod.type.ts:39](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/refunds/refundMethod.type.ts#L39)

## Type Declaration

### articles

> **articles**: `IArticle`[]

Корзина возврата — товары, оплаченные электронным сертификатом.
Есть при оплате на готовой странице ЮKassa

### electronic\_certificate?

> `optional` **electronic\_certificate?**: `IElectronicCertificate`

Данные ФЭС НСПК для возврата на сертификат

### type

> **type**: `"electronic_certificate"`
