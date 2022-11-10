import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ScoreComponent } from "./pages/score/score.component";
import { CommonModule } from '@angular/common';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'marker',
                pathMatch: 'full'
            },
            {
                path: 'marker',
                component: ScoreComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class ScoreRoutingModule {}