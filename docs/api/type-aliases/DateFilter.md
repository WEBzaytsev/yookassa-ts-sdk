[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / DateFilter

# Type Alias: DateFilter

> **DateFilter** = `object`

Defined in: [src/types/api.types.ts:6](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/api.types.ts#L6)

Фильтр по времени. Формат ISO 8601. Пример: `created_at.gte=2018-07-18T10:51:18.139Z`

## Properties

### gt?

> `optional` **gt?**: `string`

Defined in: [src/types/api.types.ts:10](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/api.types.ts#L10)

Позже указанного момента

***

### gte?

> `optional` **gte?**: `string`

Defined in: [src/types/api.types.ts:8](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/api.types.ts#L8)

Не раньше указанного момента (включительно)

***

### lt?

> `optional` **lt?**: `string`

Defined in: [src/types/api.types.ts:14](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/api.types.ts#L14)

Раньше указанного момента

***

### lte?

> `optional` **lte?**: `string`

Defined in: [src/types/api.types.ts:12](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/api.types.ts#L12)

Не позже указанного момента (включительно)
