import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LeagueComponent } from './pages/league/league.component';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule), component: HomeComponent},
  {path: 'league', loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule), component: LeagueComponent},
  {path: '**', loadChildren: () => import('src/app/pages/pages.module').then((m) => m.PagesModule), component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
