[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / Customer

# Type Alias: Customer

> **Customer** = `CustomerWithPhone` \| `CustomerWithoutPhone`

Defined in: [src/types/customer.type.ts:37](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/types/customer.type.ts#L37)

Информация о пользователе. Необходимо указать как минимум контактные данные: для Чеков от ЮKassa — электронную почту (`customer.email`), в остальных случаях — электронную почту (`customer.email`) или номер телефона (`customer.phone`).
