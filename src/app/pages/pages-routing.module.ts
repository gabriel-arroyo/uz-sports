import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';


const ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: 'home',
                component: HomeComponent
            }
        ]
    }
]

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(ROUTES)
    ]
  })

export class PagesRoutingModule {}