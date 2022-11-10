import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layout/full/full.component';
import { BlankComponent } from './layout/blank/blank.component';

const routes: Routes = [{
  path: '',
  component: FullComponent,
  children: [
    {
      path: '',
      redirectTo: '/uzsport/home',
      pathMatch: 'full'
    },
    {
      path: 'uzsport',
      loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    }
  ]
}, {
  path: 'score',
  component: BlankComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./score-app/score-app.module').then(m => m.ScoreAppModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
