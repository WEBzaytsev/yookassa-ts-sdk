[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / Metadata

# Interface: Metadata

Defined in: [src/types/general.types.ts:40](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/general.types.ts#L40)

Произвольные данные в парах «ключ–значение». ЮKassa возвращает их в ответе.

**Ограничения:** до 16 ключей; имя — до 32 символов; значение — до 512; строка UTF-8.

## See

https://yookassa.ru/developers/api#payment_object_metadata

## Indexable

> \[`key`: `string`\]: `string` \| `null`
