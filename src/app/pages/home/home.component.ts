import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario-model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  newUserTest: UsuarioModel = new UsuarioModel({
    email : 'eddy10.cm@gmail.com',
    nombre : 'Carlos Eduardo Moreno Calderon',
    password: '123456'
  });

  Items!: Observable<any[]>;
  constructor(private apiService: AuthService, firestore: AngularFirestore) {
    this.Items = firestore.collection('Login').valueChanges();
    console.log("🚀 ~ file: home.component.ts ~ line 24 ~ HomeComponent ~ constructor ~ this.Items", this.Items)
  }

  ngOnInit(): void {
    //this.apiService.newUser(this.newUserTest).subscribe(data => console.log(data));
  }

}
