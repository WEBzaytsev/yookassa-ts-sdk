[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Items](../README.md) / Item

# Interface: Item

Defined in: [src/types/receipt/item.type.ts:138](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L138)

Товары в заказе. До 100 позиций для чеков по 54-ФЗ, до 6 — для самозанятых.

## Properties

### agent\_type?

> `optional` **agent\_type?**: `"banking_payment_agent"` \| `"banking_payment_subagent"` \| `"payment_agent"` \| `"payment_subagent"` \| `"attorney"` \| `"commissioner"` \| `"agent"`

Defined in: [src/types/receipt/item.type.ts:223](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L223)

Тип посредника, реализующего товар или услугу. Обязателен с ФФД 1.1.
[Перечень значений](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#agent-type).
Для касс на ФФД 1.1+ по сценарию [Сначала платёж, потом чек](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#receipt-after-payment)

***

### amount

> **amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/receipt/item.type.ts:142](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L142)

Цена товара (тег 54 ФЗ — 1079)

***

### country\_of\_origin\_code?

> `optional` **country\_of\_origin\_code?**: `string`

Defined in: [src/types/receipt/item.type.ts:203](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L203)

Код страны происхождения по [ОК (МК (ИСО 3166) 004-97) 025-2001](http://docs.cntd.ru/document/842501280).

Тег 54 ФЗ — 1230.

Пример: `RU`.

Для касс Orange Data, Кит Инвест.

***

### customs\_declaration\_number?

> `optional` **customs\_declaration\_number?**: `string`

Defined in: [src/types/receipt/item.type.ts:210](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L210)

Номер таможенной декларации (1–32 символа).

Тег 54 ФЗ — 1231.

Для касс Orange Data, Кит Инвест.

***

### description

> **description**: `string`

Defined in: [src/types/receipt/item.type.ts:140](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L140)

Название товара (1–128 символов). Тег 54 ФЗ — 1030

***

### excise?

> `optional` **excise?**: `string`

Defined in: [src/types/receipt/item.type.ts:215](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L215)

Сумма акциза с копейками (тег 54 ФЗ — 1229). До 2 знаков после точки.

Для касс Orange Data, Кит Инвест.

***

### mark\_code\_info?

> `optional` **mark\_code\_info?**: `MarkCodeInfo`

Defined in: [src/types/receipt/item.type.ts:243](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L243)

Код товара (тег 54 ФЗ — 1163).

Обязателен, если одновременно:
- Чеки ЮKassa или касса на ФФД 1.2;
- товар подлежит маркировке.

Заполните хотя бы одно поле.

***

### mark\_mode?

> `optional` **mark\_mode?**: `"0"`

Defined in: [src/types/receipt/item.type.ts:252](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L252)

Режим обработки кода маркировки (тег 54 ФЗ — 2102).

Обязателен, если одновременно:
- Чеки ЮKassa или касса Атол Онлайн / BusinessRu на ФФД 1.2;
- товар подлежит маркировке.

Передавайте `0`.

***

### mark\_quantity?

> `optional` **mark\_quantity?**: `MarkQuantity`

Defined in: [src/types/receipt/item.type.ts:178](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L178)

Дробное количество маркированного товара (тег 54 ФЗ — 1291).

Обязателен, если одновременно:
- Чеки ЮKassa или касса на ФФД 1.2;
- товар подлежит маркировке;
- `measure` = `piece`.

Пример: карандаши продаёте поштучно, в упаковке 100 шт. с одним кодом маркировки — `numerator`: 1, `denominator`: 100.

***

### measure?

> `optional` **measure?**: `"piece"` \| `"gram"` \| `"kilogram"` \| `"ton"` \| `"centimeter"` \| `"decimeter"` \| `"meter"` \| `"square_centimeter"` \| `"square_decimeter"` \| `"square_meter"` \| `"milliliter"` \| `"liter"` \| `"cubic_meter"` \| `"kilowatt_hour"` \| `"gigacalorie"` \| `"day"` \| `"hour"` \| `"minute"` \| `"second"` \| `"kilobyte"` \| `"megabyte"` \| `"gigabyte"` \| `"terabyte"` \| `"another"`

Defined in: [src/types/receipt/item.type.ts:167](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L167)

Мера количества (тег 54 ФЗ — 2108) — единица измерения: штуки, граммы и т. д.

Обязателен для Чеков ЮKassa или касс на ФФД 1.2.

Значения:
- [Чеки ЮKassa](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#measure)
- [сторонние кассы](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#measure)

***

### payment\_mode?

> `optional` **payment\_mode?**: [`PaymentMode`](../type-aliases/PaymentMode.md)

Defined in: [src/types/receipt/item.type.ts:194](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L194)

Признак способа расчёта (тег 54 ФЗ — 1214) — тип оплаты и факт передачи товара.

Пример: покупатель полностью оплатил и сразу получил товар — передайте `full_payment`.

Значения:
- [Чеки ЮKassa](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#payment-mode)
- [сторонние кассы](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#payment-mode)

***

### payment\_subject?

> `optional` **payment\_subject?**: `"another"` \| `"commodity"` \| `"excise"` \| `"job"` \| `"service"` \| `"gambling_bet"` \| `"gambling_prize"` \| `"lottery"` \| `"lottery_prize"` \| `"intellectual_activity"` \| `"payment"` \| `"agent_commission"` \| `"composite"` \| `"property_right"` \| `"non_operating_gain"` \| `"insurance_premium"` \| `"sales_tax"` \| `"resort_fee"` \| `"marked"` \| `"non_marked"` \| `"marked_excise"` \| `"non_marked_excise"` \| `"fine"` \| `"tax"` \| `"lien"` \| `"cost"` \| `"casino"` \| `"agent_withdrawals"` \| `"pension_insurance_without_payouts"` \| `"pension_insurance_with_payouts"` \| `"health_insurance_without_payouts"` \| `"health_insurance_with_payouts"` \| `"health_insurance"`

Defined in: [src/types/receipt/item.type.ts:185](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L185)

Признак предмета расчёта (тег 54 ФЗ — 1212) — за что принимаете оплату: товар, услуга и т. д.

Значения:
- [Чеки ЮKassa](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#payment-subject)
- [сторонние кассы](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#payment-subject)

***

### payment\_subject\_industry\_details?

> `optional` **payment\_subject\_industry\_details?**: [`PaymentSubjectIndustryDetails`](PaymentSubjectIndustryDetails.md)[]

Defined in: [src/types/receipt/item.type.ts:256](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L256)

Отраслевой реквизит предмета расчёта (тег 54 ФЗ — 1260). Для Чеков ЮKassa или касс на ФФД 1.2

***

### product\_code?

> `optional` **product\_code?**: `string`

Defined in: [src/types/receipt/item.type.ts:234](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L234)

Код товара (тег 54 ФЗ — 1162) — уникальный номер экземпляра при маркировке.

Формат: hex с пробелами, до 32 байт.

Обязателен, если одновременно:
- касса на ФФД 1.05+;
- товар подлежит маркировке.

Пример: `00 00 00 01 00 21 FA 41 00 23 05 41 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 12 00 AB 00`.

***

### quantity

> **quantity**: `number`

Defined in: [src/types/receipt/item.type.ts:158](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L158)

Количество товара (тег 54 ФЗ — 1023).

Чеки по 54-ФЗ: целое или дробное число, разделитель — точка. Максимум и точность зависят от модели кассы.

Чеки ЮKassa: до 99999.999, не более 3 знаков после точки.

Самозанятые: только целые положительные числа. Пример: `1`.

***

### supplier?

> `optional` **supplier?**: [`Supplier`](../type-aliases/Supplier.md)

Defined in: [src/types/receipt/item.type.ts:217](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L217)

Поставщик товара или услуги (тег 54 ФЗ — 1224). Для сценария «Сначала платёж, потом чек»

***

### vat\_code

> **vat\_code**: `number`

Defined in: [src/types/receipt/item.type.ts:150](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L150)

Ставка НДС (тег 54 ФЗ — 1199).

Чеки по 54-ФЗ — значения:
- [Чеки ЮKassa](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#vat-codes)
- [сторонние кассы](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#vat-codes)
- самозанятые — всегда `1`
