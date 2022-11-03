import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing';
import { MaterialModule } from '../material/material.module';
import { ThisIsUsComponent } from './this-is-us/this-is-us.component';
import { LeagueComponent } from './league/league.component';
import { TournamentComponent } from './tournament/tournament.component';
import { CommunityComponent } from './community/community.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    HomeComponent,
    ThisIsUsComponent,
    LeagueComponent,
    TournamentComponent,
    CommunityComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
