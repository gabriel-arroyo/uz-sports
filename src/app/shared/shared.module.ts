import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleryComponent } from './components/galery/galery.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardLeagueComponent } from './components/card-league/card-league.component';
import { MaterialModule } from '../material/material.module';
import { CarouselsComponent } from './components/carousels/carousels.component';
import { CountFoulComponent } from './components/count-foul/count-foul.component';



@NgModule({
  declarations: [
    GaleryComponent,
    FormComponent,
    CardLeagueComponent,
    CarouselsComponent,
    CountFoulComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    FormComponent,
    CardLeagueComponent,
    CountFoulComponent
  ]
})
export class SharedModule { }
