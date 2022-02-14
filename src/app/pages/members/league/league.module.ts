import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentComponent } from './tournament/tournament.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NewsComponent } from './news/news.component';
import { ScoreComponent } from './score/score.component';
import { TeamsComponent } from './teams/teams.component';



@NgModule({
  declarations: [
    TournamentComponent,
    CalendarComponent,
    NewsComponent,
    ScoreComponent,
    TeamsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LeagueModule { }
