import * as internal from "stream";

export interface Score {
    id?: string;
    idTeam: string;
    idGame: string;
    date: string;
    time: string;
    fouls?: Foul[];
    points?: Point[];
}

export interface Foul {
    playerId?: string;
    playerName?: string;
    quarter?: number;
    time?: string;
}

export interface Point {
    playerId?: string;
    playerName?: string;
    quarter?: number;
    time?: string;
    points?: number;
}