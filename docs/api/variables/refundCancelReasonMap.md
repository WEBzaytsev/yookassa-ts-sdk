[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / refundCancelReasonMap

# Variable: refundCancelReasonMap

> `const` **refundCancelReasonMap**: `object`

Defined in: [src/dictionaries.ts:57](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/dictionaries.ts#L57)

**Причины отмены возврата**

Возвращается в параметре `reason` объекта `cancellation_details`.

## Type Declaration

### general\_decline

> **general\_decline**: `string` = `'Причина не детализирована. Уточните детали в технической поддержке'`

### insufficient\_funds

> **insufficient\_funds**: `string` = `'Недостаточно средств для возврата: поступления за день возврата меньше суммы возврата или есть задолженность. См. рекомендации в документации'`

### payment\_article\_number\_not\_found

> **payment\_article\_number\_not\_found**: `string` = `` 'Указаны товары без электронного сертификата: `payment_article_number` отсутствует в одобренной корзине. Исправьте данные и повторите запрос с новым ключом идемпотентности' ``

### payment\_basket\_id\_not\_found

> **payment\_basket\_id\_not\_found**: `string` = `'НСПК не нашла одобренную корзину для этого возврата. Исправьте данные и повторите запрос с новым ключом идемпотентности'`

### payment\_expired

> **payment\_expired**: `string` = `'Эквайер отклонил возврат: с создания платежа прошло более 15 месяцев. Согласуйте с пользователем прямой способ возврата денег'`

### payment\_tru\_code\_not\_found

> **payment\_tru\_code\_not\_found**: `string` = `` 'Указаны товары без электронного сертификата: `tru_code` отсутствует в одобренной корзине. Исправьте данные и повторите запрос с новым ключом идемпотентности' ``

### rejected\_by\_payee

> **rejected\_by\_payee**: `string` = `'Эмитент или другой участник отклонил возврат без детализации. Возврат через ЮKassa невозможен. Согласуйте с пользователем прямой способ возврата денег'`

### rejected\_by\_timeout

> **rejected\_by\_timeout**: `string` = `` 'Технический сбой у инициатора отмены. Повторите запрос с новым ключом идемпотентности. При повторных сбоях увеличивайте интервал (например, по Фибоначчи). Если `rejected_by_timeout` сохраняется более 30 минут — уточните детали у инициатора' ``

### some\_articles\_already\_refunded

> **some\_articles\_already\_refunded**: `string` = `'Часть товаров уже возвращена. Исправьте данные и повторите запрос с новым ключом идемпотентности'`

### too\_many\_refunding\_articles

> **too\_many\_refunding\_articles**: `string` = `` 'Для одного или нескольких товаров `quantity` превышает значение в одобренной корзине. Исправьте данные и повторите запрос с новым ключом идемпотентности' ``

### yoo\_money\_account\_closed

> **yoo\_money\_account\_closed**: `string` = `'Пользователь закрыл кошелёк ЮMoney, на который вы возвращаете платёж. Возврат через ЮKassa невозможен. Согласуйте с пользователем прямой способ возврата денег'`

## See

https://yookassa.ru/developers/payment-acceptance/after-the-payment/refunds#declined-refunds-cancellation-details-reason
