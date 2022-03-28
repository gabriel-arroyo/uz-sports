import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentComponent } from './tournament/tournament.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NewsComponent } from './news/news.component';
import { ScoreComponent } from './score/score.component';
import { TeamsComponent } from './teams/teams.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { AgendaComponent } from './agenda/agenda.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { TeamScoreComponent } from './score/team-score/team-score.component';



@NgModule({
  declarations: [
    TournamentComponent,
    CalendarComponent,
    NewsComponent,
    ScoreComponent,
    TeamsComponent,
    AgendaComponent,
    ChecklistComponent,
    TeamScoreComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class LeagueModule { }
