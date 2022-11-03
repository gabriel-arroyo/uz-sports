import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from 'src/app/models/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiKey = 'AIzaSyBoSt5MX460l1HpklUaXh4Ax6r8nw0hLdk';
  // Crear Usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  
  constructor(private http: HttpClient) { }

  logout() {
  }

  login(user: UsuarioModel) {
  }

  newUser(user: UsuarioModel) {
    const dataUser = {...user,
      returnSecureToken: true
    }

    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`, dataUser);
  }
}
