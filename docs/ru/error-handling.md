# Обработка ошибок

## YooKassaErr

```ts
import { YooKassaErr } from 'yookassa-ts-sdk';

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

