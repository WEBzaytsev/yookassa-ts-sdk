type BankReceiver = {
    type: 'bank_account'
    /** Номер счёта, 20 символов */
    account_number: string
    /** БИК банка, 9 символов */
    bic: string
}
type PhoneReceiver = {
    type: 'mobile_balance'
    /** Телефон для пополнения, до 15 символов, [ITU-T E.164](https://ru.wikipedia.org/wiki/E.164). Пример: `79000000000` */
    phone: string
}
type DigitalWalletReceiver = {
    type: 'digital_wallet'
    /** ID кошелька для пополнения, до 20 символов */
    account_number: string
}

export type Receiver = BankReceiver | PhoneReceiver | DigitalWalletReceiver
