import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  user: UsuarioModel | undefined;

  constructor() { }

  ngOnInit(): void {
    this.user = new UsuarioModel({
      email : 'eddy10.cm@gmail.com',
      nombre : 'Carlos Eduardo Moreno',
      password : 'AnaElena151198*'
    });
  }

}
