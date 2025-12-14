# Работа с OpenAPI спецификацией YooKassa

Файл `openapi.yaml` — официальная [OpenAPI 3.0.2 спецификация](https://yookassa.ru/developers/using-api/openapi-specification) YooKassa API.

## Скачать спецификацию

```bash
curl -o openapi.yaml "https://yookassa.ru/developers/api/yookassa-openapi-specification.yaml"
```

## 1. Сравнение типов (ручной режим)

### Генерация TypeScript типов (разбиение по файлам)

```bash
# Генерация типов — каждый тип в своём файле
npx openapi-typescript-codegen --input openapi.yaml --output ./generated --exportSchemas true
```

Результат:
```
generated/
├── core/           # Инфраструктура (ApiError, request, etc.)
├── models/         # 309 файлов с типами!
│   ├── Payment.ts
│   ├── Refund.ts
│   ├── PaymentMethod.ts
│   ├── PaymentMethodBankCard.ts
│   └── ...
├── schemas/        # JSON schemas
├── services/       # API клиенты
└── index.ts
```

### Альтернатива (один файл)

```bash
npx openapi-typescript openapi.yaml -o generated-types.d.ts
```

### Сравнение

1. Открыть `generated/models/Payment.ts`
2. Сравнить с `src/types/payments/payment.type.ts`
3. Найти расхождения

**Что искать:**
- Новые поля в объектах
- Изменённые типы полей
- Новые enum значения (способы оплаты и т.д.)
- Deprecated поля

### Пример сравнения Payment

```bash
# В openapi.yaml найти Payment object
grep -A 100 "Payment:" openapi.yaml | head -120

# Сравнить с нашим типом
cat src/types/payments/payment.type.ts
```

## 2. Автотесты (опционально)

### Валидация request/response через ajv

```ts
// scripts/validate-types.ts
import Ajv from 'ajv'
import yaml from 'js-yaml'
import fs from 'fs'

const openapi = yaml.load(fs.readFileSync('openapi.yaml', 'utf8'))
const ajv = new Ajv({ strict: false })

// Добавить схемы из OpenAPI
const schemas = openapi.components.schemas
for (const [name, schema] of Object.entries(schemas)) {
    ajv.addSchema(schema, `#/components/schemas/${name}`)
}

// Валидировать объект
function validatePayment(payment: unknown) {
    const validate = ajv.getSchema('#/components/schemas/Payment')
    if (!validate) throw new Error('Schema not found')
    
    const valid = validate(payment)
    if (!valid) {
        console.error('Validation errors:', validate.errors)
        return false
    }
    return true
}

// Пример использования
const testPayment = {
    id: '123',
    status: 'succeeded',
    amount: { value: '100.00', currency: 'RUB' },
    // ...
}

validatePayment(testPayment)
```

### Зависимости для тестов

```bash
npm i -D ajv js-yaml @types/js-yaml
```

## 3. Проверка актуальности типов

### Скрипт для CI (опционально)

```bash
#!/bin/bash
# scripts/check-openapi.sh

# Скачать свежую спецификацию
curl -sL -o /tmp/openapi-new.yaml \
  "https://yookassa.ru/developers/api/yookassa-openapi-specification.yaml"

# Сравнить с текущей
if ! diff -q openapi.yaml /tmp/openapi-new.yaml > /dev/null; then
    echo "⚠️  OpenAPI spec has been updated!"
    echo "Run: curl -o openapi.yaml https://yookassa.ru/developers/api/yookassa-openapi-specification.yaml"
    exit 1
fi

echo "✅ OpenAPI spec is up to date"
```

## Полезные команды

```bash
# Просмотр всех endpoints
grep -E "^\s+/(payments|refunds|receipts|webhooks)" openapi.yaml

# Найти все схемы
grep -E "^\s{4}[A-Z][a-zA-Z]+:" openapi.yaml | head -50

# Найти способы оплаты
grep -E "PaymentMethodData" openapi.yaml

# Открыть в Swagger UI (онлайн)
# https://editor.swagger.io/ → File → Import URL → вставить URL
```

## Инструменты

| Инструмент | Назначение |
|------------|------------|
| [openapi-typescript](https://github.com/drwpow/openapi-typescript) | Генерация TS типов |
| [Swagger Editor](https://editor.swagger.io/) | Просмотр/редактирование |
| [Postman](https://www.postman.com/) | Импорт и тестирование |
| [Insomnia](https://insomnia.rest/) | Альтернатива Postman |
| [orval](https://orval.dev/) | React Query клиент |

