import { Component, OnInit } from '@angular/core';
import { Score } from '../../../../../core/models/score';
import { ScoreService } from 'src/app/services/score.service';
import { MatButtonModule } from '@angular/material/button';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-team-score',
  templateUrl: './team-score.component.html',
  styleUrls: ['./team-score.component.scss']
})
export class TeamScoreComponent implements OnInit {
  score: Score[] = [];

  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {


  }

  create() {
  }

}
