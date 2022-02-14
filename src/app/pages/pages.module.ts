import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ThisisuzComponent } from './thisisuz/thisisuz.component';
import { LeagueComponent } from './league/league.component';
import { ComunityComponent } from './comunity/comunity.component';
import { CourtsComponent } from './courts/courts.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    HomeComponent,
    ThisisuzComponent,
    LeagueComponent,
    ComunityComponent,
    CourtsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
