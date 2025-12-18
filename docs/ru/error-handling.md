# Обработка ошибок

## YooKassaErr

```ts
import { YooKassaErr } from '@webzaytsev/yookassa-ts-sdk';

try {
    const payment = await sdk.payments.create({ ... });
} catch (error) {
    if (error instanceof YooKassaErr) {
        console.error(error.name);    // Код ошибки (например, 'invalid_request')
        console.error(error.message); // Описание ошибки
        console.error(error.id);      // ID запроса
    }
}
```

## Коды ошибок

| Код                     | Описание                      |
| ----------------------- | ----------------------------- |
| `invalid_request`       | Неверный запрос               |
| `invalid_credentials`   | Неверные учётные данные       |
| `forbidden`             | Доступ запрещён               |
| `not_found`             | Объект не найден              |
| `too_many_requests`     | Превышен лимит запросов       |
| `internal_server_error` | Ошибка сервера                |
| `NETWORK_ERROR`         | Сетевая ошибка                |
| `ECONNABORTED`          | Таймаут запроса               |
| `MISSING_OAUTH_TOKEN`   | Требуется OAuth-токен         |

## Частые ошибки

### "Receipt is missing or illegal"

Эта ошибка возникает, когда в вашем аккаунте YooKassa включена фискализация (обязательная отправка чеков по 54-ФЗ), но при создании платежа:

1. **Не переданы данные чека** — поле `receipt` отсутствует в запросе
2. **Данные чека некорректны** — не заполнены обязательные поля или значения не соответствуют требованиям

**Решение:**

#### Вариант 1: Передать данные чека при создании платежа

```ts
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    description: 'Заказ #123',
    receipt: {
        customer: {
            email: 'customer@example.com', // Обязательно для Чеков от ЮKassa
        },
        items: [
            {
                description: 'Товар',
                quantity: 1,
                amount: { value: '100.00', currency: 'RUB' },
                vat_code: 1, // Код НДС (обязательно)
            },
        ],
    },
})
```

**Обязательные поля для чека:**
- `customer.email` или `customer.phone` — контактные данные покупателя
- `items` — массив товаров (минимум 1 товар)
- `items[].description` — название товара
- `items[].quantity` — количество
- `items[].amount` — цена товара
- `items[].vat_code` — код НДС

**Проверьте:**
- Сумма всех товаров в `items` должна совпадать с суммой платежа
- Все обязательные поля заполнены
- Коды НДС соответствуют вашей системе налогообложения

#### Вариант 2: Отключить фискализацию (если не требуется)

Если вы не работаете по 54-ФЗ, можно отключить обязательную отправку чеков в настройках аккаунта YooKassa:

1. Войдите в [личный кабинет YooKassa](https://yookassa.ru/my)
2. Перейдите в настройки магазина
3. Отключите обязательную отправку чеков

**Примечание:** Отключение фискализации возможно только если вы не обязаны работать по 54-ФЗ (не являетесь компанией или ИП).

#### Вариант 3: Создать чек отдельно (сценарий "Сначала платеж, потом чек")

Если используете стороннюю онлайн-кассу, можно создать платеж без чека, а затем отправить чек отдельно:

```ts
// 1. Создать платеж без чека
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    // receipt не передаем
})

// 2. После успешной оплаты создать чек
if (payment.status === 'succeeded') {
    const receipt = await sdk.receipts.create({
        type: 'payment',
        payment_id: payment.id,
        customer: { email: 'customer@example.com' },
        items: [
            {
                description: 'Товар',
                quantity: 1,
                amount: { value: '100.00', currency: 'RUB' },
                vat_code: 1,
            },
        ],
        send: true,
        settlements: [
            {
                type: 'prepayment',
                amount: { value: '100.00', currency: 'RUB' },
            },
        ],
    })
}
```

**Подробнее:**
- [Чеки от ЮKassa](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/basics)
- [Сторонние онлайн-кассы](https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics)

## Автоматические повторы

SDK автоматически повторяет запросы при:

- Сетевых ошибках
- Ошибках сервера (5xx)
- Превышении лимита запросов (429)

Настройка поведения повторов:

```ts
const sdk = YooKassa({
    shop_id: '123456',
    secret_key: 'secret',
    retries: 3,      // Количество повторных попыток (по умолчанию: 5)
    timeout: 10000,  // Таймаут запроса в мс (по умолчанию: 5000)
});
```

