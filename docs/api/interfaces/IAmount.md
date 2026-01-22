[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / IAmount

# Interface: IAmount

Defined in: [src/types/general.types.ts:36](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/general.types.ts#L36)

Сумма платежа. Иногда партнеры ЮKassa берут с пользователя дополнительную комиссию, которая не входит в эту сумму.

## Properties

### currency

> **currency**: [`CurrencyEnum`](../enumerations/CurrencyEnum.md)

Defined in: [src/types/general.types.ts:43](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/general.types.ts#L43)

Трехбуквенный код валюты в формате ISO-4217. Пример: `RUB`. Должен соответствовать валюте субаккаунта (recipient.gateway_id), если вы разделяете потоки платежей, и валюте аккаунта (shopId в личном кабинете), если не разделяете.

***

### value

> **value**: `string`

Defined in: [src/types/general.types.ts:41](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/general.types.ts#L41)

Сумма в выбранной валюте.

Всегда дробное значение. Разделитель дробной части — точка, разделитель тысяч отсутствует. Количество знаков после точки зависит от выбранной валюты. Пример: `1000.00`.
