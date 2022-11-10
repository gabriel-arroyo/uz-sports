import { Component, OnInit } from '@angular/core';
import { Foul } from 'src/app/core/class/foul';
import { FOULS } from 'src/app/core/constantes/FOULS';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styles: [
  ]
})
export class ScoreComponent implements OnInit {
  pointsTeam1: number = 0;
  pointsTeam2: number = 0;
  QuarterTime: string = '1 er';

  foulsTeam1: Foul[] = FOULS;
  foulsTeam2: Foul[] = FOULS;

  constructor() { }

  ngOnInit(): void {
  }

}
