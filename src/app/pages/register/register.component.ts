import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {


  JSONRegister: any = {
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
      type: 'password',
      validation: {
        required: true
      }
    },
    nombre: {
      label: 'Nombre',
      value: '',
      type: 'text',
      validation: {
        required: true
      }
    }
  };
  
  constructor() { }

  ngOnInit(): void {
  }

  ValidateForm(form: FormGroup) {
    console.log("🚀 ~ file: login.component.ts ~ line 47 ~ LoginComponent ~ ValidateForm ~ form", form)
  }
}
