[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Items](../README.md) / Item

# Interface: Item

Defined in: [src/types/receipt/item.type.ts:134](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/receipt/item.type.ts#L134)

Список товаров в заказе. Для чеков по 54-ФЗ можно передать не более 100 товаров, для чеков самозанятых — не более шести.

## Properties

### agent\_type?

> `optional` **agent\_type**: `"banking_payment_agent"` \| `"banking_payment_subagent"` \| `"payment_agent"` \| `"payment_subagent"` \| `"attorney"` \| `"commissioner"` \| `"agent"`

Defined in: [src/types/receipt/item.type.ts:233](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/receipt/item.type.ts#L233)

Тип посредника, реализующего товар или услугу.
Параметр предусмотрен форматом фискальных документов (ФФД) и является обязательным, начиная с версии 1.1.
[Перечень возможных значений.](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#agent-type)
Можно передавать, если ваша онлайн-касса обновлена до ФФД 1.1 и вы отправляете
данные для формирования чека по сценарию [Сначала платеж, потом чек](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#receipt-after-payment)

***

### amount

> **amount**: [`IAmount`](../../../../interfaces/IAmount.md)

Defined in: [src/types/receipt/item.type.ts:138](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/receipt/item.type.ts#L138)

Цена товара (тег в 54 ФЗ — 1079).

***

### country\_of\_origin\_code?

> `optional` **country\_of\_origin\_code**: `string`

Defined in: [src/types/receipt/item.type.ts:211](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/receipt/item.type.ts#L211)

Код страны происхождения товара по общероссийскому классификатору стран мира ([OК (MК (ИСО 3166) 004-97) 025-2001](http://docs.cntd.ru/document/842501280)).

Тег в 54 ФЗ — 1230.

Пример: `RU`.

Можно передавать, если используете онлайн-кассу Orange Data, Кит Инвест.

***

### customs\_declaration\_number?

> `optional` **customs\_declaration\_number**: `string`

Defined in: [src/types/receipt/item.type.ts:218](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/receipt/item.type.ts#L218)

Номер таможенной декларации (от 1 до 32 символов).

Тег в 54 ФЗ — 1231.

Можно передавать, если используете онлайн-кассу Orange Data, Кит Инвест.

***

### description

> **description**: `string`

Defined in: [src/types/receipt/item.type.ts:136](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/receipt/item.type.ts#L136)

Название товара (от 1 до 128 символов). Тег в 54 ФЗ — 1030.

***

### excise?

> `optional` **excise**: `string`

Defined in: [src/types/receipt/item.type.ts:223](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/receipt/item.type.ts#L223)

Сумма акциза товара с учетом копеек (тег в 54 ФЗ — 1229). Десятичное число с точностью до 2 знаков после точки.

Можно передавать, если используете онлайн-кассу Orange Data, Кит Инвест.

***

### mark\_code\_info?

> `optional` **mark\_code\_info**: `MarkCodeInfo`

Defined in: [src/types/receipt/item.type.ts:253](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/receipt/item.type.ts#L253)

**Код товара (тег в 54 ФЗ — 1163).**-

Обязательный параметр, если одновременно выполняются эти условия:
- вы используете Чеки от ЮKassa или онлайн-кассу, обновленную до ФФД 1.2;
- товар нужно маркировать.

_Должно быть заполнено хотя бы одно поле._

***

### mark\_mode?

> `optional` **mark\_mode**: `"0"`

Defined in: [src/types/receipt/item.type.ts:262](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/receipt/item.type.ts#L262)

**Режим обработки кода маркировки (тег в 54 ФЗ — 2102).***

Обязательный параметр, если одновременно выполняются эти условия:
- вы используете Чеки от ЮKassa или онлайн-кассу Атол Онлайн или BusinessRu, обновленную до ФФД 1.2;
- товар нужно маркировать.

_Должен принимать значение равное «0»_.

***

### mark\_quantity?

> `optional` **mark\_quantity**: `MarkQuantity`

Defined in: [src/types/receipt/item.type.ts:180](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/receipt/item.type.ts#L180)

Дробное количество маркированного товара (тег в 54 ФЗ — 1291).

Обязательный параметр, если одновременно выполняются эти условия:
- вы используете Чеки от ЮKassa или онлайн-кассу, обновленную до ФФД 1.2;
- товар нужно маркировать;
- поле measure имеет значение piece.

Пример: вы продаете поштучно карандаши. Они поставляются пачками по 100 штук с одним кодом маркировки. При продаже одного карандаша нужно в numerator передать 1, а в denominator — 100.

***

### measure?

> `optional` **measure**: `"piece"` \| `"gram"` \| `"kilogram"` \| `"ton"` \| `"centimeter"` \| `"decimeter"` \| `"meter"` \| `"square_centimeter"` \| `"square_decimeter"` \| `"square_meter"` \| `"milliliter"` \| `"liter"` \| `"cubic_meter"` \| `"kilowatt_hour"` \| `"gigacalorie"` \| `"day"` \| `"hour"` \| `"minute"` \| `"second"` \| `"kilobyte"` \| `"megabyte"` \| `"gigabyte"` \| `"terabyte"` \| `"another"`

Defined in: [src/types/receipt/item.type.ts:169](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/receipt/item.type.ts#L169)

**Мера количества предмета расчета (тег в 54 ФЗ — 2108)*** — единица измерения товара, например штуки, граммы.

Обязательный параметр, если используете Чеки от ЮKassa или онлайн-кассу, обновленную до ФФД 1.2.

Перечень возможных значений:
- [для Чеков от ЮKassa](1)
- [для сторонних онлайн-касс](2)

[1]: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#measure
[2]: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#measure

***

### payment\_mode?

> `optional` **payment\_mode**: [`PaymentMode`](../type-aliases/PaymentMode.md)

Defined in: [src/types/receipt/item.type.ts:202](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/receipt/item.type.ts#L202)

**Признак способа расчета (тег в 54 ФЗ — 1214)*** — отражает тип оплаты и факт передачи товара.

Пример: покупатель полностью оплачивает товар и сразу получает его. В этом случае нужно передать значение `full_payment` (полный расчет).

Перечень возможных значений:
- [для Чеков от ЮKassa](1)
- [для сторонних онлайн-касс](2)

[1]: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#payment-mode
[2]: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#payment-mode

***

### payment\_subject?

> `optional` **payment\_subject**: `"another"` \| `"ling_bet"` \| `"gambling_prize"` \| `"lottery"` \| `"lottery_prize"` \| `"intellectual_activity"` \| `"agent_commission"` \| `"property_right"` \| `"non_operating_gain"` \| `"insurance_premium"` \| `"sales_tax"` \| `"resort_fee"` \| `"marked"` \| `"non_marked"` \| `"fine"` \| `"tax"` \| `"lien"` \| `"cost"` \| `"agent_withdrawals"` \| `"pension_insurance_without_payouts"` \| `"pension_insurance_with_payouts"` \| `"health_insurance_without_payouts"` \| `"health_insurance_with_payouts"` \| `"health_insurance"`

Defined in: [src/types/receipt/item.type.ts:190](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/receipt/item.type.ts#L190)

**Признак предмета расчета (тег в 54 ФЗ — 1212)*** — это то, за что принимается оплата, например товар, услуга.

Перечень возможных значений:
- [для Чеков от ЮKassa](1)
- [для сторонних онлайн-касс](2)

[1]: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#payment-subject
[2]: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#payment-subject

***

### payment\_subject\_industry\_details?

> `optional` **payment\_subject\_industry\_details**: [`PaymentSubjectIndustryDetails`](PaymentSubjectIndustryDetails.md)[]

Defined in: [src/types/receipt/item.type.ts:266](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/receipt/item.type.ts#L266)

Отраслевой реквизит предмета расчета (тег в 54 ФЗ — 1260). Можно передавать, если используете Чеки от ЮKassa или онлайн-кассу, обновленную до ФФД 1.2.

***

### product\_code?

> `optional` **product\_code**: `string`

Defined in: [src/types/receipt/item.type.ts:244](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/receipt/item.type.ts#L244)

**Код товара (тег в 54 ФЗ — 1162)*** — уникальный номер, который присваивается экземпляру товара при маркировке.

Формат: число в шестнадцатеричном представлении с пробелами. Максимальная длина — 32 байта.

Обязательный параметр, если одновременно выполняются эти условия:
- вы используете онлайн-кассу, обновленную до ФФД 1.05;
- товар нужно маркировать.

Пример: `00 00 00 01 00 21 FA 41 00 23 05 41 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 12 00 AB 00`.

***

### quantity

> **quantity**: `number`

Defined in: [src/types/receipt/item.type.ts:157](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/receipt/item.type.ts#L157)

**Количество товара (тег в 54 ФЗ — 1023).***

Для чеков по 54-ФЗ: можно передать целое или дробное число. Разделитель дробной части — точка, разделитель тысяч отсутствует. Максимально возможное значение и максимальное количество знаков после точки (для дробных значений) зависят от модели вашей онлайн-кассы.

Для чеков от ЮKassa максимально возможное значение — 99999.999, не более 3 знаков после точки.

Для чеков самозанятых: только целые положительные числа (без точки и дробной части). Пример: `1`.

***

### supplier?

> `optional` **supplier**: [`Supplier`](../type-aliases/Supplier.md)

Defined in: [src/types/receipt/item.type.ts:225](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/receipt/item.type.ts#L225)

Информация о поставщике товара или услуги (тег в 54 ФЗ — 1224). Можно передавать, если вы отправляете данные для формирования чека по сценарию "Сначала платеж, потом чек".

***

### vat\_code

> **vat\_code**: `number`

Defined in: [src/types/receipt/item.type.ts:149](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/64d1beecb76b74b8e39fad849b3fbaaf632ab576/src/types/receipt/item.type.ts#L149)

**Ставка НДС (тег в 54 ФЗ — 1199).***

Для чеков по 54-ФЗ — перечень возможных значений:
- [для Чеков от ЮKassa](1)
- [для сторонних онлайн-касс](2)
- Для чеков самозанятых — фиксированное значение: `1`

[1]: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#vat-codes
[2]: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#vat-codes
