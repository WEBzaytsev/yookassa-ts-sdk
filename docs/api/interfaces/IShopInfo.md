[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IShopInfo

# Interface: IShopInfo

Defined in: [src/types/shop.type.ts:46](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/shop.type.ts#L46)

Информация о магазине или шлюзе (объект Me)

## See

https://yookassa.ru/developers/api#get_me

## Properties

### account\_id

> **account\_id**: `string`

Defined in: [src/types/shop.type.ts:48](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/shop.type.ts#L48)

Идентификатор магазина или шлюза

***

### fiscalization?

> `optional` **fiscalization?**: [`FiscalizationData`](FiscalizationData.md)

Defined in: [src/types/shop.type.ts:57](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/shop.type.ts#L57)

Настройки фискализации.
Присутствует, если вы запрашивали настройки магазина и магазин настроил отправку чеков.

***

### ~~fiscalization\_enabled?~~

> `optional` **fiscalization\_enabled?**: `boolean`

Defined in: [src/types/shop.type.ts:62](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/shop.type.ts#L62)

#### Deprecated

Используйте `fiscalization.enabled`.
Сохранён для обратной совместимости.

***

### itn?

> `optional` **itn?**: `string`

Defined in: [src/types/shop.type.ts:72](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/shop.type.ts#L72)

ИНН магазина (от 1 до 20 цифр).
Присутствует, если вы запрашивали настройки магазина.

***

### name?

> `optional` **name?**: `string`

Defined in: [src/types/shop.type.ts:82](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/shop.type.ts#L82)

Название шлюза в личном кабинете ЮKassa.
Присутствует, если вы запрашивали настройки шлюза.

***

### payment\_methods?

> `optional` **payment\_methods?**: [`PaymentMethodsEnum`](../enumerations/PaymentMethodsEnum.md)[]

Defined in: [src/types/shop.type.ts:67](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/shop.type.ts#L67)

Список доступных способов оплаты.
Присутствует, если вы запрашивали настройки магазина.

***

### payout\_balance?

> `optional` **payout\_balance?**: [`IAmount`](IAmount.md)

Defined in: [src/types/shop.type.ts:87](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/shop.type.ts#L87)

Баланс шлюза.
Присутствует, если вы запрашивали настройки шлюза.

***

### payout\_methods?

> `optional` **payout\_methods?**: [`PayoutMethodType`](../type-aliases/PayoutMethodType.md)[]

Defined in: [src/types/shop.type.ts:77](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/shop.type.ts#L77)

Список способов получения выплат, доступных шлюзу.
Присутствует, если вы запрашивали настройки шлюза.

***

### status

> **status**: [`ShopStatus`](../type-aliases/ShopStatus.md)

Defined in: [src/types/shop.type.ts:50](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/shop.type.ts#L50)

Статус магазина или шлюза

***

### test

> **test**: `boolean`

Defined in: [src/types/shop.type.ts:52](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/shop.type.ts#L52)

Тестовый магазин или шлюз
