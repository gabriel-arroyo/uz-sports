import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LeagueComponent } from './league/league.component';
import { ComunityComponent } from './comunity/comunity.component';
import { CourtsComponent } from './courts/courts.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    HomeComponent,
    LeagueComponent,
    ComunityComponent,
    CourtsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
