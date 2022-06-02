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