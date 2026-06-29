[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / AgentTypeMap

# Variable: AgentTypeMap

> `const` **AgentTypeMap**: `object`

Defined in: [src/dictionaries.ts:132](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/dictionaries.ts#L132)

**Тип посредника**

Передаётся в `items.agent_type` при сценарии «Сначала платёж, потом чек».
Обязателен с ФФД 1.1 — убедитесь, что онлайн-касса обновлена.

## Type Declaration

### agent

> **agent**: `string` = `'Агент'`

### attorney

> **attorney**: `string` = `'Поверенный'`

### banking\_payment\_agent

> **banking\_payment\_agent**: `string` = `'Банковский платёжный агент'`

### banking\_payment\_subagent

> **banking\_payment\_subagent**: `string` = `'Банковский платёжный субагент'`

### commissioner

> **commissioner**: `string` = `'Комиссионер'`

### payment\_agent

> **payment\_agent**: `string` = `'Платёжный агент'`

### payment\_subagent

> **payment\_subagent**: `string` = `'Платёжный субагент'`

## See

https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#agent-type
