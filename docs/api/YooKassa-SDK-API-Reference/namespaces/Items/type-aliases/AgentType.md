[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Items](../README.md) / AgentType

# Type Alias: AgentType

> **AgentType** = keyof *typeof* [`AgentTypeMap`](../../../../variables/AgentTypeMap.md)

Defined in: [src/types/receipt/item.type.ts:73](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/types/receipt/item.type.ts#L73)

Тип посредника. Передавайте в `items.agent_type` по сценарию «Сначала платёж, потом чек».
Обязателен с ФФД 1.1 — проверьте версию кассы.

## See

https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#agent-type
