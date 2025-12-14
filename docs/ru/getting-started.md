# Начало работы

## Конфигурация

```ts
interface ConnectorOpts {
    /** ID магазина (обязательно) */
    shop_id: string;

    /** Секретный ключ (обязательно) */
    secret_key: string;

    /** OAuth-токен для партнёрского API (вебхуки, информация о магазине) */
    token?: string;

    /** Режим отладки — логирование запросов и ответов */
    debug?: boolean;

    /** Таймаут запроса в мс (по умолчанию: 5000) */
    timeout?: number;

    /** Количество повторных попыток при ошибках (по умолчанию: 5) */
    retries?: number;

    /** Максимум запросов в секунду (по умолчанию: 5) */
    maxRPS?: number;

    /** URL прокси-сервера */
    proxy?: string;

    /** Пользовательский API endpoint */
    endpoint?: string;
}
```

## Примеры

```ts
// Базовая настройка
const sdk = YooKassa({
    shop_id: '123456',
    secret_key: 'test_secret_key',
});

// С отладкой и настройками
const sdk = YooKassa({
    shop_id: '123456',
    secret_key: 'live_secret_key',
    debug: true,
    timeout: 10000,
    retries: 3,
    maxRPS: 10,
});

// С прокси
const sdk = YooKassa({
    shop_id: '123456',
    secret_key: 'live_secret_key',
    proxy: 'http://user:password@proxy.example.com:8080',
});

// С OAuth токеном (для вебхуков и информации о магазине)
const sdk = YooKassa({
    shop_id: '123456',
    secret_key: 'live_secret_key',
    token: 'your_oauth_token',
});
```

## Кэширование инстансов

SDK автоматически кэширует инстансы по `shop_id`. Это позволяет:

- Переиспользовать соединения
- Работать с несколькими магазинами одновременно

```ts
// Оба вызова вернут один и тот же инстанс
const sdk1 = YooKassa({ shop_id: '123', secret_key: 'key1' });
const sdk2 = YooKassa({ shop_id: '123', secret_key: 'key1' });
console.log(sdk1 === sdk2); // true

// Разные магазины — разные инстансы
const shop1 = YooKassa({ shop_id: '111', secret_key: 'key1' });
const shop2 = YooKassa({ shop_id: '222', secret_key: 'key2' });

// Принудительно создать новый инстанс
const newSdk = YooKassa({ shop_id: '123', secret_key: 'new_key' }, true);

// Очистить кэш
import { clearYooKassaCache } from '@webzaytsev/yookassa-ts-sdk';
clearYooKassaCache('123'); // Удалить конкретный магазин
clearYooKassaCache(); // Очистить весь кэш
```

