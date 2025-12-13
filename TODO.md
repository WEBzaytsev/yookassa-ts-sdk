# YooKassa SDK — Planned Features

## Refactor `ApiResponse` (Breaking Change)

**Status:** Planned for v1.0.0  
**Priority:** Medium  
**Breaking:** Yes

### Current implementation

```typescript
type ApiResponse<Res> = 
    | { success: 'OK', data: Res, requestId: string }
    | { success: 'NO_OK', errorData: YooKassaErrResponse, requestId: string }
```

### Problem

- `'OK'` / `'NO_OK'` — нестандартный паттерн, не из API YooKassa
- API YooKassa не возвращает поле `success` вообще
- Стандартные варианты: `boolean`, `'success'/'error'`, или Result type

### Proposed solution

**Option A:** Boolean
```typescript
type ApiResponse<Res> = 
    | { success: true, data: Res, requestId: string }
    | { success: false, error: YooKassaErrResponse, requestId: string }
```

**Option B:** Result type (более типобезопасно)
```typescript
type ApiResult<T> = 
    | { ok: true, value: T, requestId: string }
    | { ok: false, error: YooKassaErrResponse, requestId: string }
```

### Migration notes

- Breaking change для пользователей, которые используют `response.success === 'OK'`
- Публичные методы SDK (payments.create, etc.) уже бросают `YooKassaErr`, поэтому большинство пользователей не затронуты
- Изменение затрагивает только тех, кто использует protected метод `request()` напрямую

---

## Electronic Certificate (`electronic_certificate`)

**Status:** Not implemented  
**Priority:** Low  
**Complexity:** High

### Description

Электронный сертификат — способ оплаты для товаров из [Перечня ТРУ](https://esnsi.gosuslugi.ru/classifiers/10616/data?pg=1&p=1) (технические средства реабилитации).

### Why not implemented

Требует значительной доработки типов:

1. **Объект `articles`** — массив товаров с кодами ТРУ:
```typescript
interface Article {
    article_number: number;
    tru_code: string;  // код из Перечня ТРУ, формат: NNNNNNNNN.NNNNNNNNNYYYYMMMMZZZ
    article_code: string;  // код товара в системе магазина
    certificates?: Certificate[];
}
```

2. **Объект `certificates`** — информация о сертификатах:
```typescript
interface Certificate {
    certificate_id: string;
    tru_amount: number;
    max_compensation: IAmount;
    compensation: IAmount;
}
```

3. **Особый `refund_method_data`** для возвратов:
```typescript
interface ElectronicCertificateRefundMethodData {
    type: 'electronic_certificate';
    articles: RefundArticle[];
}
```

4. **Расширенный `payment_method` в ответе**:
```typescript
interface IPaymentMethodElectronicCertificate {
    type: 'electronic_certificate';
    id: string;
    saved: boolean;
    card?: CardInfo;
    electronic_certificate?: {
        amount: IAmount;
        basket_id: string;
    };
    articles?: Article[];
}
```

### Prerequisites

Для использования этого способа оплаты необходимо:
- Регистрация в ГИС ЭС (Госуслуги)
- Регистрация в ЛК ФЭС НСПК
- Получение ID кассы, MAC KEY, API KEY

### Documentation

- [YooKassa: Электронный сертификат](https://yookassa.ru/developers/payment-acceptance/integration-scenarios/manual-integration/other/electronic-certificate/basics)
- [НСПК: Электронные сертификаты](https://www.nspk.ru/cards-mir/certificates)

### Implementation notes

Если будет реализовываться:
1. Добавить `electronic_certificate` в `PaymentMethodsEnum`
2. Создать типы `Article`, `Certificate`, `RefundArticle`
3. Расширить `CreatePaymentRequest` полем `articles`
4. Расширить `CreateRefundRequest` полем `refund_method_data`
5. Добавить `IPaymentMethodElectronicCertificate`

