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
    timestamp: string,
}

export interface User {
    name: string,
    photoUrl?: string,
    contact: string,
    roles: string[],
    timestamp: string,
}

import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export interface Team {
    id?: string,
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
    timestamp: string,
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
    timestamp: string,
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
    timestamp: string,
}

export interface News {
    title: string,
    content: string,
    imageUrl: string,
    idLeague: string,
    timestamp: string,
}


export interface League {
    id?: string;
    name: string,
    region: string,
    timestamp: string,
}

export interface Tournament {
    id?: string,
    name: string,
    leagueName: string,
    region: string,
    startDate: string,
    endDate: string,
    moday: boolean,
    tuesday: boolean,
    wednesday: boolean,
    thursday: boolean,
    friday: boolean,
    saturday: boolean,
    sunday: boolean,
    startTime: string,
    endTime: string,
    address: string,
    city: string,
    state: string,
    courts: number,
    type: string,
    size: string,
    category: string,
    priceReferee: number,
    priceRegistration: number,
    rules: string,
    contact: string,
    timestamp: string,
}

export interface Game {
    id?: string,
    idTeam1: string,
    idTeam2: string,
    idScore1: string,
    idScore2: string,
    date: string,
    time: string,
    quarter?: number,
    extraquarter?: number,
    timestamp: string,
}