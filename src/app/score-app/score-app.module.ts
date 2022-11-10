import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from './pages/score/score.component';
import { ScoreRoutingModule } from './score-routing';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ScoreComponent
  ],
  imports: [
    CommonModule,
    ScoreRoutingModule,
    SharedModule
  ]
})
export class ScoreAppModule { }
