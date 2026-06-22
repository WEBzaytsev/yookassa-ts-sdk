[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / CreateWebhookRequest

# Interface: CreateWebhookRequest

Defined in: [src/types/webhook.type.ts:34](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/webhook.type.ts#L34)

Запрос на создание вебхука

## Properties

### event

> **event**: `"payment.waiting_for_capture"` \| `"payment.succeeded"` \| `"payment.canceled"` \| `"refund.succeeded"` \| `"payout.succeeded"` \| `"payout.canceled"` \| `"deal.closed"` \| `"payment_method.active"`

Defined in: [src/types/webhook.type.ts:38](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/webhook.type.ts#L38)

Событие, о котором нужно уведомлять

#### See

https://yookassa.ru/developers/api#create_webhook

***

### url

> **url**: `string`

Defined in: [src/types/webhook.type.ts:40](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/68213df35b1bd37cf2487dbe032adb060a39ca67/src/types/webhook.type.ts#L40)

URL, на который ЮKassa будет отправлять уведомления
