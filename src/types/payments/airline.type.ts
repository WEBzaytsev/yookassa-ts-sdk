/** Пассажир */
interface IAirlinePassenger {
    /** Имя латиницей. Пример: `SERGEI` */
    first_name: string
    /** Фамилия латиницей. Пример: `IVANOV` */
    last_name: string
}

/** Сегмент перелёта */
interface IAirlineLeg {
    /** Код аэропорта вылета [IATA](https://www.iata.org/publications/Pages/code-search.aspx). Пример: `LED` */
    departure_airport: string
    /** Код аэропорта прилёта [IATA](https://www.iata.org/publications/Pages/code-search.aspx). Пример: `AMS` */
    destination_airport: string
    /** Дата вылета `YYYY-MM-DD` ([ISO 8601:2004](http://www.iso.org/iso/catalogue_detail?csnumber=40874)). Пример: `2018-12-24` */
    departure_date: string
    /** Код авиакомпании [IATA](https://www.iata.org/publications/Pages/code-search.aspx) */
    carrier_code?: string
}
/**
 * Данные продажи авиабилетов. Только для оплаты банковской картой.
 */
interface IAirlineGeneral {
    /**
     * Номер билета. Если известен при создании платежа — обязателен.
     * Иначе передайте `booking_reference`.
     *
     * Длина: 1–150. Пример: `5554916004417`. Паттерн: `[0-9]{1,150}`
     */
    ticket_number?: string
    /** Номер бронирования. Обязателен без `ticket_number` */
    booking_reference?: string
    /** Пассажиры */
    passengers?: IAirlinePassenger[]
    /** Сегменты перелёта */
    legs?: IAirlineLeg[]
}
interface IAirlineWithTicketNumber extends IAirlineGeneral {
    ticket_number: string
}
interface IAirlineWithBookingReference extends IAirlineGeneral {
    booking_reference: string
}
/**
 * Данные продажи авиабилетов. Только для оплаты банковской картой.
 */
export type IAirline = IAirlineWithTicketNumber | IAirlineWithBookingReference
