import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LeagueComponent } from './pages/league/league.component';
import { ScoreComponent } from './pages/members/league/score/score.component';
import { AgendaComponent } from './pages/members/league/agenda/agenda.component';
import { ChecklistComponent } from './pages/members/league/checklist/checklist.component';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule), component: HomeComponent},
  {path: 'league', loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule), component: LeagueComponent},
  {path: 'score', loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule), component: ScoreComponent},
  {path: 'agenda', loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule), component: AgendaComponent},
  {path: 'checklist', loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule), component: ChecklistComponent},
  {path: '**', loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule), component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
