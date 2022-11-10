export class Point {
    Id: number;
    Value: number;

    constructor(opt?: {Id: number; Value: number}) {
        this.Id = opt !== undefined ? opt.Id : 1;
        this.Value = opt !== undefined ? opt.Value : 1;
    }
}
