import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueComponent } from './league/league.component';
import { TeamComponent } from './team/team.component';
import { PlayerComponent } from './player/player.component';
import { RefereeComponent } from './referee/referee.component';
import { CoachComponent } from './coach/coach.component';



@NgModule({
  declarations: [
    LeagueComponent,
    TeamComponent,
    PlayerComponent,
    RefereeComponent,
    CoachComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MembersModule { }
