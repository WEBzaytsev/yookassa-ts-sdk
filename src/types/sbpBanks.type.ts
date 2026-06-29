/** Участник СБП (банк / НСПК) для выплат. @see https://yookassa.ru/developers/api#get_sbp_banks */
export interface SbpParticipantBank {
    bank_id: string
    name: string
    bic: string
}

export type GetSbpBanksResponse = {
    type: 'list'
    items: SbpParticipantBank[]
}
