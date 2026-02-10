[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / Customer

# Type Alias: Customer

> **Customer** = `CustomerWithPhone` \| `CustomerWithoutPhone`

Defined in: [src/types/customer.type.ts:37](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/c8dc341ff73a5ece64b0ee18dd5940355be4e506/src/types/customer.type.ts#L37)

Информация о пользователе. Необходимо указать как минимум контактные данные: для Чеков от ЮKassa — электронную почту (`customer.email`), в остальных случаях — электронную почту (`customer.email`) или номер телефона (`customer.phone`).
