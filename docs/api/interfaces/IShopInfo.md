[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IShopInfo

# Interface: IShopInfo

Defined in: [src/types/shop.type.ts:4](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/shop.type.ts#L4)

Информация о магазине (аккаунте)

## See

https://yookassa.ru/developers/api#get_me

## Properties

### account\_id

> **account\_id**: `string`

Defined in: [src/types/shop.type.ts:6](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/shop.type.ts#L6)

Идентификатор аккаунта

***

### fiscalization\_enabled

> **fiscalization\_enabled**: `boolean`

Defined in: [src/types/shop.type.ts:10](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/shop.type.ts#L10)

Признак подключённой фискализации: `true` — подключена, `false` — нет

***

### payment\_methods

> **payment\_methods**: `string`[]

Defined in: [src/types/shop.type.ts:12](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/shop.type.ts#L12)

Список доступных способов оплаты

***

### status

> **status**: `string`

Defined in: [src/types/shop.type.ts:14](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/shop.type.ts#L14)

Статус магазина

***

### test

> **test**: `boolean`

Defined in: [src/types/shop.type.ts:8](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/shop.type.ts#L8)

Признак тестового магазина: `true` — тестовый, `false` — боевой
