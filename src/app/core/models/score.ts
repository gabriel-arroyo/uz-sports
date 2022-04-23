export interface Score {
    id: string,
    idTeam: string,
}

export interface Foul {
    id?: string,
    idPlayer?: string,
    quarter?: number,
    time?: string,
}

export interface Point {
    id?: string,
    idPlayer?: string,
    quarter?: number,
    time?: string,
    points?: number,
}