[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / Customer

# Type Alias: Customer

> **Customer** = `CustomerWithPhone` \| `CustomerWithoutPhone`

Defined in: [src/types/customer.type.ts:41](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/customer.type.ts#L41)

Данные пользователя. Минимум контактов: для Чеков ЮKassa — `customer.email`;
иначе — `customer.email` или `customer.phone`.
