export class UsuarioModel {
    email: string;
    password: string;
    nombre: string;

    constructor(opt?: {
        email: string,
        password: string,
        nombre: string,
    }) {
        this.email = opt != undefined ? opt?.email : '';
        this.password = opt != undefined ? opt?.password : '';
        this.nombre = opt != undefined ? opt?.nombre : '';
    }
}
