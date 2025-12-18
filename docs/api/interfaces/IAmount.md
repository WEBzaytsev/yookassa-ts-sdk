[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IAmount

# Interface: IAmount

Defined in: [src/types/general.types.ts:142](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/general.types.ts#L142)

Сумма платежа. Иногда партнеры ЮKassa берут с пользователя дополнительную комиссию, которая не входит в эту сумму.

## Properties

### currency

> **currency**: [`CurrencyEnum`](../enumerations/CurrencyEnum.md)

Defined in: [src/types/general.types.ts:149](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/general.types.ts#L149)

Трехбуквенный код валюты в формате ISO-4217. Пример: `RUB`. Должен соответствовать валюте субаккаунта (recipient.gateway_id), если вы разделяете потоки платежей, и валюте аккаунта (shopId в личном кабинете), если не разделяете.

***

### value

> **value**: `string`

Defined in: [src/types/general.types.ts:147](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/general.types.ts#L147)

Сумма в выбранной валюте.

Всегда дробное значение. Разделитель дробной части — точка, разделитель тысяч отсутствует. Количество знаков после точки зависит от выбранной валюты. Пример: `1000.00`.
