export interface Game {
    id: string,
    idTeam1: string,
    idTeam2: string,
    idScore1: string,
    idScore2: string,
    date: string,
    time: string,
    quarter?: number,
    extraquarter?: number,
}