[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IShopInfo

# Interface: IShopInfo

Defined in: [src/types/shop.type.ts:46](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/shop.type.ts#L46)

Магазин или шлюз (объект Me).

## See

https://yookassa.ru/developers/api#get_me

## Properties

### account\_id

> **account\_id**: `string`

Defined in: [src/types/shop.type.ts:48](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/shop.type.ts#L48)

ID магазина или шлюза

***

### fiscalization?

> `optional` **fiscalization?**: [`FiscalizationData`](FiscalizationData.md)

Defined in: [src/types/shop.type.ts:57](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/shop.type.ts#L57)

Настройки фискализации.
Есть при запросе настроек магазина с включённой отправкой чеков.

***

### ~~fiscalization\_enabled?~~

> `optional` **fiscalization\_enabled?**: `boolean`

Defined in: [src/types/shop.type.ts:62](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/shop.type.ts#L62)

#### Deprecated

Используйте `fiscalization.enabled`.
Сохранён для обратной совместимости.

***

### itn?

> `optional` **itn?**: `string`

Defined in: [src/types/shop.type.ts:72](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/shop.type.ts#L72)

ИНН магазина (1–20 цифр).
Есть при запросе настроек магазина.

***

### name?

> `optional` **name?**: `string`

Defined in: [src/types/shop.type.ts:82](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/shop.type.ts#L82)

Название шлюза в личном кабинете ЮKassa.
Есть при запросе настроек шлюза.

***

### payment\_methods?

> `optional` **payment\_methods?**: [`PaymentMethodsEnum`](../enumerations/PaymentMethodsEnum.md)[]

Defined in: [src/types/shop.type.ts:67](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/shop.type.ts#L67)

Доступные способы оплаты.
Есть при запросе настроек магазина.

***

### payout\_balance?

> `optional` **payout\_balance?**: [`IAmount`](IAmount.md)

Defined in: [src/types/shop.type.ts:87](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/shop.type.ts#L87)

Баланс шлюза.
Есть при запросе настроек шлюза.

***

### payout\_methods?

> `optional` **payout\_methods?**: [`PayoutMethodType`](../type-aliases/PayoutMethodType.md)[]

Defined in: [src/types/shop.type.ts:77](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/shop.type.ts#L77)

Способы получения выплат шлюза.
Есть при запросе настроек шлюза.

***

### status

> **status**: [`ShopStatus`](../type-aliases/ShopStatus.md)

Defined in: [src/types/shop.type.ts:50](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/shop.type.ts#L50)

Статус магазина или шлюза

***

### test

> **test**: `boolean`

Defined in: [src/types/shop.type.ts:52](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/shop.type.ts#L52)

Тестовый магазин или шлюз
