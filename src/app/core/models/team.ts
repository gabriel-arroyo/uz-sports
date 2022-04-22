import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export interface Team {
    name: string,
    logoUrl?: string,
    photoUrl?: string,
    category: string,
    birthday?: string,
    city: string,
    idCaptitain?: string,
    mail?: string,
    contact?: string,
    social?: string,
    likes?: number,
}