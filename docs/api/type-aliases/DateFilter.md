[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / DateFilter

# Type Alias: DateFilter

> **DateFilter** = `object`

Defined in: [src/types/api.types.ts:9](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/api.types.ts#L9)

Фильтр по времени

Время указывается в формате ISO 8601. Пример: `created_at.gte=2018-07-18T10:51:18.139Z`

## Properties

### gt?

> `optional` **gt**: `string`

Defined in: [src/types/api.types.ts:13](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/api.types.ts#L13)

время должно быть больше указанного значения

***

### gte?

> `optional` **gte**: `string`

Defined in: [src/types/api.types.ts:11](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/api.types.ts#L11)

время должно быть больше указанного значения или равно ему («с такого-то момента включительно»).

***

### lt?

> `optional` **lt**: `string`

Defined in: [src/types/api.types.ts:17](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/api.types.ts#L17)

Время должно быть меньше указанного значения

***

### lte?

> `optional` **lte**: `string`

Defined in: [src/types/api.types.ts:15](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a5803ddf5ac53e5307d21c08eb9d6867f4ea7add/src/types/api.types.ts#L15)

время должно быть меньше указанного значения или равно ему
