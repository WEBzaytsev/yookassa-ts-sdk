[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / refundCancelReasonMap

# Variable: refundCancelReasonMap

> `const` **refundCancelReasonMap**: `object`

Defined in: [src/dictionaries.ts:55](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/e9d85f4ed383ba5ce3c8e159cab8210bba24f9e4/src/dictionaries.ts#L55)

****Причины отмены возврата****

Причина отмены возвращается в параметре `reason` объекта `cancellation_details`.

## Type Declaration

### general\_decline

> **general\_decline**: `string` = `'Причина не детализирована. Для уточнения подробностей обратитесь в техническую поддержку.'`

### insufficient\_funds

> **insufficient\_funds**: `string` = `'Не хватает денег, чтобы сделать возврат: сумма платежей, которые вы получили в день возврата, меньше, чем сам возврат, или есть задолженность. Что делать в этом случае'`

### payment\_article\_number\_not\_found

> **payment\_article\_number\_not\_found**: `string` = `'Указаны товары, для оплаты которых не использовался электронный сертификат: значение payment_article_number отсутствует в одобренной корзине покупки. Откорректируйте данные и отправьте запрос еще раз с новым ключом идемпотентности.'`

### payment\_basket\_id\_not\_found

> **payment\_basket\_id\_not\_found**: `string` = `'НСПК не нашла для этого возврата одобренную корзину покупки. Откорректируйте данные и отправьте запрос еще раз с новым ключом идемпотентности.'`

### payment\_tru\_code\_not\_found

> **payment\_tru\_code\_not\_found**: `string` = `'Указаны товары, для оплаты которых не использовался электронный сертификат: значение tru_code отсутствует в одобренной корзине покупки. Откорректируйте данные и отправьте запрос еще раз с новым ключом идемпотентности.'`

### rejected\_by\_payee

> **rejected\_by\_payee**: `string` = `'Эмитент платежного средства или другой участник процесса возврата отклонил операцию по неизвестным причинам. Сделать возврат через ЮKassa нельзя. Договоритесь с пользователем напрямую, каким способом вы вернете ему деньги.'`

### rejected\_by\_timeout

> **rejected\_by\_timeout**: `string` = `'Технические неполадки на стороне инициатора отмены возврата. Повторите запрос с новым ключом идемпотентности. Если результат не изменится, повторяйте запрос с возрастающим разумным интервалом (например, можно использовать последовательность Фибоначчи). Если прошло более получаса, но вы всё еще получаете rejected_by_timeout, обратитесь к инициатору отмены возврата для уточнения подробностей.'`

### some\_articles\_already\_refunded

> **some\_articles\_already\_refunded**: `string` = `'Некоторые товары уже возвращены. Откорректируйте данные и отправьте запрос еще раз с новым ключом идемпотентности.'`

### too\_many\_refunding\_articles

> **too\_many\_refunding\_articles**: `string` = `'Для одного или нескольких товаров количество возвращаемых единиц (quantity) больше, чем указано в одобренной корзине покупки. Откорректируйте данные и отправьте запрос еще раз с новым ключом идемпотентности.'`

### yoo\_money\_account\_closed

> **yoo\_money\_account\_closed**: `string` = `'Пользователь закрыл кошелек ЮMoney, на который вы пытаетесь вернуть платеж. Сделать возврат через ЮKassa нельзя. Договоритесь с пользователем напрямую, каким способом вы вернете ему деньги.'`

## See

https://yookassa.ru/developers/payment-acceptance/after-the-payment/refunds#declined-refunds-cancellation-details-reason
