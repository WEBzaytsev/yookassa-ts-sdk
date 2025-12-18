# Contributing

## Development Setup

```bash
git clone https://github.com/WEBzaytsev/yookassa-ts-sdk.git
cd yookassa-ts-sdk
npm install
```

## Scripts

```bash
npm run build      # Compile TypeScript
npm run check      # Run knip + biome + tsc
npm run lint       # Check code style
npm run lint:fix   # Fix code style
npm run docs:api   # Generate API documentation
```

## Working with YooKassa OpenAPI Specification

Official [OpenAPI 3.0.2 specification](https://yookassa.ru/developers/using-api/openapi-specification).

### Download specification

```bash
curl -o openapi.yaml "https://yookassa.ru/developers/api/yookassa-openapi-specification.yaml"
```

### Generate TypeScript types for comparison

```bash
# Multiple files
npx openapi-typescript-codegen --input openapi.yaml --output ./generated --exportSchemas true

# Single file
npx openapi-typescript openapi.yaml -o generated-types.d.ts
```

### Compare types

1. Open `generated/models/Payment.ts`
2. Compare with `src/types/payments/payment.type.ts`
3. Look for:
   - New fields
   - Changed field types
   - New enum values
   - Deprecated fields

## Tools

| Tool | Purpose |
|------|---------|
| [openapi-typescript](https://github.com/drwpow/openapi-typescript) | Generate TS types |
| [Swagger Editor](https://editor.swagger.io/) | View/edit OpenAPI |
| [Postman](https://www.postman.com/) | API testing |

## Pull Requests

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Run `npm run check`
5. Submit PR
