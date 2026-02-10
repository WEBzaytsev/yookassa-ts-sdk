[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / Metadata

# Interface: Metadata

Defined in: [src/types/general.types.ts:46](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e5153b54297e1c5c82db159e94d75578d740e3cf/src/types/general.types.ts#L46)

Любые дополнительные данные, которые нужны вам для работы.

Передаются в виде набора пар «ключ-значение» и возвращаются в ответе от ЮKassa.

**Ограничения:**
- максимум 16 ключей
- имя ключа не больше 32 символов
- значение ключа не больше 512 символов
- тип данных — строка в формате UTF-8

## See

https://yookassa.ru/developers/api#payment_object_metadata

## Indexable

\[`key`: `string`\]: `string` \| `null`
