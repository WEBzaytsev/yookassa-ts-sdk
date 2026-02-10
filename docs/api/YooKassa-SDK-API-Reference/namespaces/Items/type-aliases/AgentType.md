[**YooKassa SDK API Reference**](../../../../README.md)

***

[YooKassa SDK API Reference](../../../../README.md) / [Items](../README.md) / AgentType

# Type Alias: AgentType

> **AgentType** = keyof *typeof* [`AgentTypeMap`](../../../../variables/AgentTypeMap.md)

Defined in: [src/types/receipt/item.type.ts:77](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/c8dc341ff73a5ece64b0ee18dd5940355be4e506/src/types/receipt/item.type.ts#L77)

****Тип посредника****

Тип посредника передается в запросе на создание чека  в массиве `items`, в параметре `agent_type`,
если вы отправляете данные для формирования чека по "сценарию Сначала платеж, потом чек".
Параметр `agent_type` нужно передавать, начиная с ФФД 1.1.
Убедитесь, что ваша онлайн-касса обновлена до этой версии.

## See

https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#agent-type
