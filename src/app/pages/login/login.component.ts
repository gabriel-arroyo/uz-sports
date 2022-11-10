import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario-model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  user: UsuarioModel | undefined;

  JSONLogin: any = {
    email: {
      label: 'Correo',
      value: '',
      type: 'text',
      validation: {
        required: true,
        /*minLength: 5,
        maxLength: 10*/
      }
    },
    password: {
      label: 'Contraseña',
      value: '',
      type: 'text',
      validation: {
        required: true
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
    /*this.user = new UsuarioModel({
      email : 'eddy10.cm@gmail.com',
      nombre : 'Carlos Eduardo Moreno',
      password : 'AnaElena151198*'
    });*/
  }

  ValidateForm(form: FormGroup) {
    console.log("🚀 ~ file: login.component.ts ~ line 47 ~ LoginComponent ~ ValidateForm ~ form", form)
  }
}
