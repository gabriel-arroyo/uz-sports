export class Foul {
    Id: number;
    Foul: boolean;

    constructor(opt? : {
        Id: number,
        Foul: boolean
    }) {
        this.Id = opt !== undefined ? opt.Id : 0;
        this.Foul = opt !== undefined ? opt.Foul : false;
    }
}
