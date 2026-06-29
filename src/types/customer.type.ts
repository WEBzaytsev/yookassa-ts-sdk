/**
 * Данные пользователя. Минимум контактов: для Чеков ЮKassa — `customer.email`;
 * иначе — `customer.email` или `customer.phone`.
 */
interface GeneralCustomer {
    /**
     * Юрлицо — название; ИП и физлицо — ФИО.
     * Без ИНН у физлица — паспортные данные в этом же поле. До 256 символов.
     * Для Чеков ЮKassa или касс Orange Data, Атол Онлайн.
     */
    full_name?: string
    /**
     * ИНН (10 или 12 цифр).
     * Без ИНН у физлица передайте паспорт в `full_name`.
     * Для Чеков ЮKassa или касс Orange Data, Атол Онлайн.
     */
    inn?: string
    /**
     * Email для чека.
     * Обязателен для Чеков ЮKassa; иначе — если не передан `phone`.
     */
    email?: string
    /**
     * Телефон для чека в формате [ITU-T E.164](https://ru.wikipedia.org/wiki/E.164). Пример: `79000000000`.
     * Обязателен, если не передан `email`.
     */
    phone?: string
}

type CustomerWithPhone = GeneralCustomer & {
    phone: string
}
type CustomerWithoutPhone = GeneralCustomer & {
    email: string
}

/**
 * Данные пользователя. Минимум контактов: для Чеков ЮKassa — `customer.email`;
 * иначе — `customer.email` или `customer.phone`.
 */
export type Customer = CustomerWithPhone | CustomerWithoutPhone
