export interface NavItem {
    title: string,
    url: string,
    children?: NavItem[]
}

export interface Coach {
    name: string,
    experience?: string,
    speciality?: string,
    photoUrl?: string,
    contact?: string,
}

export interface User {
    name: string,
    photoUrl?: string,
    contact: string,
    roles: string[],
}

import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export interface Team {
    name: string,
    city: string,
    category: string,
    logoUrl?: string,
    photoUrl?: string,
    birthday?: string,
    idCaptitain?: string,
    mail?: string,
    contact?: string,
    social?: string,
    likes?: number,
}

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

export interface Referee {
    name: string,
    experience?: string,
    photoUrl?: string,
    contact?: string,
}

export interface Player {
    id?: string,
    name: string,
    number: number,
    idTeams?: string[],
    photoUrl?: string,
    birthday?: string,
    address?: string,
    position?: string,
    idFavorite?: string,
    mail?: string,
    contact?: string,
    social?: string,
    likes?: number,
}

export interface News {
  title: string;
  content: string;
  imageUrl: string;
  idLeague: string;
}


export interface League {
  name: string;
  region: string;
}

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