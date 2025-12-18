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

### "Card binding error: invalid_request"

Эта ошибка возникает при работе с привязкой карт (сохранением способов оплаты для автоплатежей) и означает, что один из параметров запроса имеет неверное значение или формат.

**Возможные причины:**

#### 1. Неправильное использование `save_payment_method` и `payment_method_id`

**Проблема:** Переданы одновременно `save_payment_method` и `payment_method_id`, или `payment_method_id` имеет неверный формат.

**Решение:**

```ts
// ❌ Неправильно: нельзя передавать оба параметра одновременно
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    save_payment_method: true,
    payment_method_id: 'some_id', // Конфликт!
})

// ✅ Правильно: первый платеж — сохраняем карту
const firstPayment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' },
    save_payment_method: true, // Сохраняем способ оплаты
})

// ✅ Правильно: последующие платежи — используем сохранённый метод
const recurringPayment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    payment_method_id: firstPayment.payment_method?.id, // ID из первого платежа
    capture: true,
})
```

#### 2. Неверный формат `payment_method_id`

**Проблема:** `payment_method_id` имеет неверный формат или не существует.

**Решение:**

```ts
// Проверьте, что payment_method_id получен из успешного платежа
const payment = await sdk.payments.load('payment_id')

if (!payment.payment_method?.id) {
    throw new Error('Payment method not saved')
}

// Используйте правильный ID
const recurringPayment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    payment_method_id: payment.payment_method.id, // Правильный формат
    capture: true,
})
```

#### 3. Неверная валюта

**Проблема:** Сумма платежа указана не в рублях (RUB).

**Решение:**

```ts
// ❌ Неправильно: валюта не RUB
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'USD' }, // Ошибка!
    save_payment_method: true,
})

// ✅ Правильно: валюта RUB
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' }, // Правильно
    save_payment_method: true,
})
```

#### 4. Отсутствие обязательных параметров

**Проблема:** При использовании `save_payment_method: true` не указаны обязательные параметры.

**Решение:**

```ts
// ✅ Правильно: все обязательные параметры указаны
const payment = await sdk.payments.create({
    amount: { value: '100.00', currency: 'RUB' },
    confirmation: { type: 'redirect', return_url: 'https://example.com' }, // Обязательно
    save_payment_method: true,
    description: 'Оплата подписки', // Рекомендуется
})
```

#### 5. Функция сохранения карт не активирована

**Проблема:** В вашем аккаунте YooKassa не активирована функция сохранения способов оплаты.

**Решение:**

1. Обратитесь к менеджеру YooKassa для активации функции автоплатежей
2. Убедитесь, что ваш аккаунт поддерживает сохранение способов оплаты

**Чеклист для отладки:**

- [ ] `save_payment_method` и `payment_method_id` не переданы одновременно
- [ ] `payment_method_id` имеет правильный формат (получен из успешного платежа)
- [ ] Валюта платежа — `RUB`
- [ ] Указан `confirmation` при первом платеже с `save_payment_method: true`
- [ ] Функция сохранения карт активирована в аккаунте YooKassa
- [ ] `payment_method_id` существует и принадлежит вашему магазину

**Подробнее:**
- [Автоплатежи (рекуррентные платежи)](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments)
- [Сохранение способов оплаты](https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments/basics)

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

