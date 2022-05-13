import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LeagueComponent } from './pages/league/league.component';
import { ScoreComponent } from './pages/members/league/score/score.component';
import { AgendaComponent } from './pages/members/league/agenda/agenda.component';
import { ChecklistComponent } from './pages/members/league/checklist/checklist.component';
import { PlayersComponent } from './pages/members/league/score/players/players.component';
import { RoleMakerComponent } from './pages/members/league/rol-maker/rol-maker.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule), component: HomeComponent },
  { path: 'league', loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule), component: LeagueComponent },
  { path: 'score', loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule), component: ScoreComponent },
  { path: 'agenda', loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule), component: AgendaComponent },
  { path: 'checklist', loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule), component: ChecklistComponent },
  { path: 'score-players', loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule), component: PlayersComponent },
  { path: 'rol-maker', loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule), component: RoleMakerComponent },
  { path: 'login', loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule), component: LoginComponent },
  { path: 'register', loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule), component: RegisterComponent },
  { path: '**', loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule), component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
