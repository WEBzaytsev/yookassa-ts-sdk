[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / GetPaymentListFilter

# Type Alias: GetPaymentListFilter

> **GetPaymentListFilter** = `object`

Defined in: [src/types/api.types.ts:20](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/api.types.ts#L20)

## Properties

### captured\_at?

> `optional` **captured\_at**: [`DateFilter`](DateFilter.md)

Defined in: [src/types/api.types.ts:24](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/api.types.ts#L24)

Фильтр по времени подтверждения

***

### created\_at?

> `optional` **created\_at**: [`DateFilter`](DateFilter.md)

Defined in: [src/types/api.types.ts:22](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/api.types.ts#L22)

Фильтр по времени создания

***

### cursor?

> `optional` **cursor**: `string`

Defined in: [src/types/api.types.ts:48](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/api.types.ts#L48)

Указатель на следующий фрагмент списка.

#### Description

В качестве указателя необходимо использовать значение параметра `next_cursor`,
полученное в ответе на предыдущий запрос. Используется, если в списке больше объектов,
чем может поместиться в выдаче (`limit`), и конец выдачи не достигнут.

#### Example

```ts
Пример: `cursor=37a5c87d-3984-51e8-a7f3-8de646d39ec15`
```

#### See

[Пример использования](https://yookassa.ru/developers/using-api/lists#pagination)

***

### limit?

> `optional` **limit**: `number`

Defined in: [src/types/api.types.ts:39](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/api.types.ts#L39)

Размер выдачи результатов запроса — количество объектов, передаваемых в ответе.
Возможные значения: от 1 до 100.

#### Example

```ts
Пример: limit=50
```

#### Default

```ts
10 Значение по умолчанию: 10
```

***

### payment\_method?

> `optional` **payment\_method**: [`PaymentMethodsEnum`](../enumerations/PaymentMethodsEnum.md)

Defined in: [src/types/api.types.ts:29](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/api.types.ts#L29)

Фильтр по коду [способа оплаты](https://yookassa.ru/developers/payment-acceptance/getting-started/payment-methods#all).

#### Example

```ts
Пример: `payment_method=bank_card`
```

***

### status?

> `optional` **status**: [`PaymentStatus`](../YooKassa-SDK-API-Reference/namespaces/Payments/type-aliases/PaymentStatus.md)

Defined in: [src/types/api.types.ts:32](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/50e1491ae6e226093b0c5fe6d1e0a677c65b97ce/src/types/api.types.ts#L32)

Фильтр по статусу платежа.

#### Example

```ts
status=succeeded
```
