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
import {MembersModule} from './members/members.module'
import {LeagueModule} from './members/league/league.module'
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialFullModule } from 'src/material.module';
import { PagesRoutingModule } from './pages-routing.module';





@NgModule({
  declarations: [
    HomeComponent,
    LeagueComponent,
    ComunityComponent,
    CourtsComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    MaterialFullModule,
    // MembersModule,
    // LeagueModule,
  ]
})
export class PagesModule { }
