[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / MandatorySavePaymentMethodsCoverageCheck

# Type Alias: MandatorySavePaymentMethodsCoverageCheck

> **MandatorySavePaymentMethodsCoverageCheck** = `Exclude`\<[`MandatorySavePaymentMethodType`](MandatorySavePaymentMethodType.md), *typeof* [`MANDATORY_SAVE_PAYMENT_METHOD_TYPES`](../variables/MANDATORY_SAVE_PAYMENT_METHOD_TYPES.md)\[`number`\]\> *extends* `never` ? `true` : `Exclude`\<[`MandatorySavePaymentMethodType`](MandatorySavePaymentMethodType.md), *typeof* [`MANDATORY_SAVE_PAYMENT_METHOD_TYPES`](../variables/MANDATORY_SAVE_PAYMENT_METHOD_TYPES.md)\[`number`\]\>

Defined in: [src/types/payments/paymentMethod.type.ts:135](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/payments/paymentMethod.type.ts#L135)

Проверка полноты: при расширении [MandatorySavePaymentMethodType](MandatorySavePaymentMethodType.md) без обновления массива тип станет не `true` — сборка сломается.
