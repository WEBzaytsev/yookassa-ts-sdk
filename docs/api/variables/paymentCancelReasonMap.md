[**YooKassa SDK API Reference**](../README.md)

***

[YooKassa SDK API Reference](../README.md) / paymentCancelReasonMap

# Variable: paymentCancelReasonMap

> `const` **paymentCancelReasonMap**: `object`

Defined in: [src/dictionaries.ts:7](https://github.com/WEBzaytsev/yookassa-ts-sdk/blob/a54dd4a4021888ce493b2f0fc27787905ddee7f3/src/dictionaries.ts#L7)

**Причины отмены платежа**

[Документация](https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments#cancellation-details-reason)

## Type Declaration

### 3d\_secure\_failed

> **3d\_secure\_failed**: `string` = `'Не пройдена аутентификация 3-D Secure. При повторной оплате предложите пройти аутентификацию, выбрать другое платёжное средство или уточнить детали в банке'`

### call\_issuer

> **call\_issuer**: `string` = `'Платёжное средство отклонило операцию без детализации. Предложите пользователю обратиться к эмитенту'`

### canceled\_by\_merchant

> **canceled\_by\_merchant**: `string` = `'Платёж отменён по API при двухстадийной оплате'`

### card\_expired

> **card\_expired**: `string` = `'Истёк срок действия карты. При повторной оплате предложите другое платёжное средство'`

### country\_forbidden

> **country\_forbidden**: `string` = `'Карта этой страны не принимается. При повторной оплате предложите другое средство. Можно ограничить оплату иностранными картами'`

### deal\_expired

> **deal\_expired**: `string` = `'Для Безопасной сделки: истёк срок сделки. Для приёма оплаты создайте новую сделку и платёж'`

### expired\_on\_capture

> **expired\_on\_capture**: `string` = `'Истёк срок списания у двухстадийного платежа. Для приёма оплаты повторите платёж с новым ключом идемпотентности и спишите средства после подтверждения'`

### expired\_on\_confirmation

> **expired\_on\_confirmation**: `string` = `'Истёк срок оплаты: пользователь не подтвердил платёж в отведённое время. Для приёма оплаты повторите платёж с новым ключом идемпотентности — пользователь подтвердит его заново'`

### fraud\_suspected

> **fraud\_suspected**: `string` = `'Платёж заблокирован из‑за подозрения в мошенничестве. При повторной оплате предложите другое платёжное средство'`

### general\_decline

> **general\_decline**: `string` = `'Причина не детализирована. Предложите пользователю уточнить детали у инициатора отмены'`

### identification\_required

> **identification\_required**: `string` = `'Превышен лимит платежей кошелька ЮMoney. При повторной оплате предложите идентифицировать кошелёк или выбрать другое средство'`

### insufficient\_funds

> **insufficient\_funds**: `string` = `'Недостаточно средств. Предложите пополнить баланс или выбрать другое платёжное средство'`

### internal\_timeout

> **internal\_timeout**: `string` = `'Технический сбой ЮKassa: запрос не обработан за 30 секунд. Повторите платёж с новым ключом идемпотентности'`

### invalid\_card\_number

> **invalid\_card\_number**: `string` = `'Неверный номер карты. При повторной оплате предложите ввести корректные данные'`

### invalid\_csc

> **invalid\_csc**: `string` = `'Неверный код CVV2 (CVC2, CID). При повторной оплате предложите ввести корректные данные'`

### issuer\_unavailable

> **issuer\_unavailable**: `string` = `'Эмитент платёжного средства недоступен. При повторной оплате предложите другое средство'`

### loan\_declined

> **loan\_declined**: `string` = `'Банк отклонил заявку на кредит или рассрочку. При повторной оплате предложите другое средство или уточнение в банке'`

### payment\_method\_limit\_exceeded

> **payment\_method\_limit\_exceeded**: `string` = `'Исчерпан лимит платежей для этого средства или магазина. При повторной оплате предложите другое средство или повторите завтра'`

### payment\_method\_restricted

> **payment\_method\_restricted**: `string` = `'Операции этим средством запрещены (карта заблокирована, кошелёк взломан и т. п.). Предложите пользователю обратиться к эмитенту'`

### permission\_revoked

> **permission\_revoked**: `string` = `'Безакцептное списание невозможно: пользователь отозвал разрешение на автоплатежи. Для оплаты создайте новый платёж — пользователь подтвердит его'`

### unsupported\_mobile\_operator

> **unsupported\_mobile\_operator**: `string` = `'Оплата с номера этого оператора недоступна. При повторной оплате предложите другое платёжное средство'`
