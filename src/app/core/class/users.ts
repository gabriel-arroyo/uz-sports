import { Roles } from './roles';
export class User {
    address: string;
    birthday: string;
    city: string;
    email: string;
    firstName: string;
    gender: string;
    lastName: string;
    password: string;
    passwordConfirm: string;
    phone: number;
    photoUrl: string;
    roles: string[];

    constructor(opt: {
        address: string;
        birthday: string;
        city: string;
        email: string;
        firstName: string;
        gender: string;
        lastName: string;
        password: string;
        passwordConfirm: string;
        phone: number;
        photoUrl: string;
        roles: string[];
    }) {
        this.address = opt.address;
        this.birthday = opt.birthday;
        this.city = opt.city;
        this.email = opt.email;
        this.firstName = opt.firstName;
        this.gender = opt.gender;
        this.lastName = opt.lastName;
        this.password = opt.password;
        this.passwordConfirm = opt.passwordConfirm;
        this.phone = opt.phone;
        this.photoUrl = opt.photoUrl
        this.roles = opt.roles;
    }
}
