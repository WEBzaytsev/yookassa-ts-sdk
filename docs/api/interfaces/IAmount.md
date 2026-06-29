[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IAmount

# Interface: IAmount

Defined in: [src/types/general.types.ts:45](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/general.types.ts#L45)

Сумма платежа. Комиссия партнёра ЮKassa сверх этой суммы не входит.

## Properties

### currency

> **currency**: [`CurrencyEnum`](../enumerations/CurrencyEnum.md)

Defined in: [src/types/general.types.ts:49](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/general.types.ts#L49)

Код валюты ISO-4217. Пример: `RUB`. Должен совпадать с валютой субаккаунта (`recipient.gateway_id`) или аккаунта.

***

### value

> **value**: `string`

Defined in: [src/types/general.types.ts:47](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/general.types.ts#L47)

Сумма в валюте. Дробное число, точка как разделитель, без разделителя тысяч. Пример: `1000.00`.
