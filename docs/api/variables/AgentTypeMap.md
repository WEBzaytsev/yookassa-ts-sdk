[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / AgentTypeMap

# Variable: AgentTypeMap

> `const` **AgentTypeMap**: `object`

Defined in: [src/dictionaries.ts:129](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/dictionaries.ts#L129)

****Тип посредника****

Тип посредника передается в запросе на создание чека  в массиве `items`, в параметре `agent_type`,
если вы отправляете данные для формирования чека по "сценарию Сначала платеж, потом чек".
Параметр `agent_type` нужно передавать, начиная с ФФД 1.1.
Убедитесь, что ваша онлайн-касса обновлена до этой версии.

## Type Declaration

### agent

> **agent**: `string` = `'Агент'`

### attorney

> **attorney**: `string` = `'Поверенный'`

### banking\_payment\_agent

> **banking\_payment\_agent**: `string` = `'Банковский платежный агент'`

### banking\_payment\_subagent

> **banking\_payment\_subagent**: `string` = `'Банковский платежный субагент'`

### commissioner

> **commissioner**: `string` = `'Комиссионер'`

### payment\_agent

> **payment\_agent**: `string` = `'Платежный агент'`

### payment\_subagent

> **payment\_subagent**: `string` = `'Платежный субагент'`

## See

https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#agent-type
