import type { Payments } from '../types/payments'
import type { Refunds } from '../types/refunds'
import type { WebhookEvent } from '../types/webhook.type'

/**
 * IP-адреса и диапазоны, с которых YooKassa отправляет уведомления.
 * Используйте для валидации входящих запросов.
 *
 * @see https://yookassa.ru/developers/using-api/webhooks#ip
 */
export const YOOKASSA_IP_RANGES = [
    // IPv4 диапазоны
    '185.71.76.0/27',
    '185.71.77.0/27',
    '77.75.153.0/25',
    '77.75.154.128/25',
    // Отдельные IPv4 адреса
    '77.75.156.11',
    '77.75.156.35',
] as const

/**
 * IPv6 диапазон YooKassa
 * @see https://yookassa.ru/developers/using-api/webhooks#ip
 */
export const YOOKASSA_IPV6_RANGE = '2a02:5180::/32'

/**
 * Входящее уведомление от YooKassa
 */
export interface WebhookNotification<T = Payments.IPayment | Refunds.IRefund> {
    /** Тип объекта — всегда 'notification' */
    type: 'notification'
    /** Событие, о котором уведомляет YooKassa */
    event: WebhookEvent
    /** Объект, связанный с событием (платёж, возврат, выплата, сделка) */
    object: T
}

/** Уведомление о платеже */
export type PaymentNotification = WebhookNotification<Payments.IPayment>

/** Уведомление о возврате */
export type RefundNotification = WebhookNotification<Refunds.IRefund>

/**
 * Ошибка валидации уведомления
 */
export class WebhookValidationError extends Error {
    constructor(
        message: string,
        public readonly code?: string,
    ) {
        super(message)
        this.name = 'WebhookValidationError'
        // Сохраняем оригинальный stack trace
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, WebhookValidationError)
        }
    }
}

/**
 * Проверяет, является ли IP-адрес адресом YooKassa.
 *
 * @param ip - IP-адрес для проверки (например, из req.ip или x-forwarded-for)
 * @returns true, если IP принадлежит YooKassa
 *
 * @example
 * ```ts
 * import { isYooKassaIP } from 'yookassa-ts-sdk'
 *
 * app.post('/webhook', (req, res) => {
 *     const clientIP = req.ip || req.headers['x-forwarded-for']
 *     if (!isYooKassaIP(clientIP)) {
 *         return res.status(403).send('Forbidden')
 *     }
 *     // ...
 * })
 * ```
 */
export function isYooKassaIP(ip: string): boolean {
    // Убираем IPv6 prefix если есть (::ffff:192.168.1.1)
    const cleanIP = ip.replace(/^::ffff:/, '')

    // Проверяем IPv6
    if (cleanIP.includes(':')) {
        return isIPv6InRange(cleanIP, YOOKASSA_IPV6_RANGE)
    }

    // Проверяем IPv4
    for (const range of YOOKASSA_IP_RANGES) {
        if (isIPv4Match(cleanIP, range)) {
            return true
        }
    }
    return false
}

/**
 * Проверяет, соответствует ли IPv4 адрес диапазону CIDR или отдельному IP
 */
function isIPv4Match(ip: string, rangeOrIP: string): boolean {
    // Если это отдельный IP (без маски)
    if (!rangeOrIP.includes('/')) {
        return ip === rangeOrIP
    }

    // CIDR диапазон
    const [rangeIP, bits] = rangeOrIP.split('/')
    const mask = ~(2 ** (32 - parseInt(bits, 10)) - 1)

    const ipNum = ipToNumber(ip)
    const rangeNum = ipToNumber(rangeIP)

    if (ipNum === null || rangeNum === null) {
        return false
    }

    return (ipNum & mask) === (rangeNum & mask)
}

/**
 * Проверяет, входит ли IPv6 адрес в CIDR диапазон
 */
function isIPv6InRange(ip: string, cidr: string): boolean {
    const [rangeIP, bits] = cidr.split('/')
    const prefixBits = parseInt(bits, 10)

    const ipParts = expandIPv6(ip)
    const rangeParts = expandIPv6(rangeIP)

    if (!ipParts || !rangeParts) {
        return false
    }

    // Сравниваем побитово
    let bitsToCompare = prefixBits
    for (let i = 0; i < 8 && bitsToCompare > 0; i++) {
        const bitsInThisPart = Math.min(16, bitsToCompare)
        const mask = bitsInThisPart === 16 ? 0xffff : (0xffff << (16 - bitsInThisPart)) & 0xffff

        if ((ipParts[i] & mask) !== (rangeParts[i] & mask)) {
            return false
        }

        bitsToCompare -= 16
    }

    return true
}

/**
 * Разворачивает сокращённый IPv6 адрес в массив из 8 чисел
 */
function expandIPv6(ip: string): number[] | null {
    // Обработка :: (сокращение нулей)
    const parts = ip.split(':')
    const emptyIndex = parts.indexOf('')

    if (emptyIndex !== -1) {
        // Убираем пустые строки от ::
        const nonEmpty = parts.filter((p) => p !== '')
        const zerosNeeded = 8 - nonEmpty.length
        const zeros = Array(zerosNeeded).fill('0')

        parts.splice(emptyIndex, parts.filter((p) => p === '').length, ...zeros)
    }

    if (parts.length !== 8) {
        return null
    }

    const result: number[] = []
    for (const part of parts) {
        const num = parseInt(part, 16)
        if (Number.isNaN(num) || num < 0 || num > 0xffff) {
            return null
        }
        result.push(num)
    }

    return result
}

/**
 * Преобразует IP-адрес в число
 */
function ipToNumber(ip: string): number | null {
    const parts = ip.split('.')
    if (parts.length !== 4) {
        return null
    }

    let num = 0
    for (const part of parts) {
        const octet = parseInt(part, 10)
        if (Number.isNaN(octet) || octet < 0 || octet > 255) {
            return null
        }
        num = (num << 8) + octet
    }
    return num >>> 0 // Convert to unsigned
}

/**
 * Парсит и валидирует входящее уведомление от YooKassa.
 *
 * @param body - Тело запроса (req.body)
 * @returns Типизированное уведомление
 * @throws {WebhookValidationError} Если формат уведомления некорректен
 *
 * @example
 * ```ts
 * import { parseNotification } from 'yookassa-ts-sdk'
 *
 * app.post('/webhook', (req, res) => {
 *     try {
 *         const notification = parseNotification(req.body)
 *
 *         switch (notification.event) {
 *             case 'payment.succeeded':
 *                 const payment = notification.object
 *                 console.log('Payment succeeded:', payment.id)
 *                 break
 *             case 'payment.canceled':
 *                 console.log('Payment canceled:', notification.object.id)
 *                 break
 *             case 'refund.succeeded':
 *                 console.log('Refund succeeded:', notification.object.id)
 *                 break
 *         }
 *
 *         res.status(200).send('OK')
 *     } catch (error) {
 *         console.error('Invalid webhook:', error)
 *         res.status(400).send('Bad Request')
 *     }
 * })
 * ```
 */
export function parseNotification(body: unknown): WebhookNotification {
    if (!body || typeof body !== 'object') {
        throw new WebhookValidationError('Notification body must be an object')
    }

    const notification = body as Record<string, unknown>

    if (notification.type !== 'notification') {
        throw new WebhookValidationError(
            `Invalid notification type: expected 'notification', got '${notification.type}'`,
        )
    }

    if (typeof notification.event !== 'string') {
        throw new WebhookValidationError('Missing or invalid event field')
    }

    if (!notification.object || typeof notification.object !== 'object') {
        throw new WebhookValidationError('Missing or invalid object field')
    }

    return notification as unknown as WebhookNotification
}

/**
 * Типизированный парсер для уведомлений о платежах.
 *
 * @param body - Тело запроса
 * @returns Уведомление с типизированным объектом платежа
 * @throws {WebhookValidationError} Если событие не относится к платежам
 */
export function parsePaymentNotification(body: unknown): PaymentNotification {
    const notification = parseNotification(body)

    if (!notification.event.startsWith('payment.')) {
        throw new WebhookValidationError(`Expected payment event, got '${notification.event}'`)
    }

    return notification as PaymentNotification
}

/**
 * Типизированный парсер для уведомлений о возвратах.
 *
 * @param body - Тело запроса
 * @returns Уведомление с типизированным объектом возврата
 * @throws {WebhookValidationError} Если событие не относится к возвратам
 */
export function parseRefundNotification(body: unknown): RefundNotification {
    const notification = parseNotification(body)

    if (!notification.event.startsWith('refund.')) {
        throw new WebhookValidationError(`Expected refund event, got '${notification.event}'`)
    }

    return notification as RefundNotification
}
