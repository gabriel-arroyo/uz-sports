import { Component, Input, OnInit } from '@angular/core';
import { Score } from '../../../../../core/models/score';
import { ScoreService } from 'src/app/services/score.service';
import { MatButtonModule } from '@angular/material/button';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-team-score',
  templateUrl: './team-score.component.html',
  styleUrls: ['./team-score.component.scss'],
})
export class TeamScoreComponent implements OnInit {
  @Input() idScore: string = '';
  score: Score[] = [];

  constructor(private scoreService: ScoreService) {}

  ngOnInit(): void {}

  create() {}

  onePointer() {
    this.scoreService.addPoints(this.idScore, 'rDQpMX3YBnuWjQ4RBzYI', 1, 1, '1:11');
  }
  twoPointer() {
    this.scoreService.addPoints(
      this.idScore,
      'rDQpMX3YBnuWjQ4RBzYI',
      2,
      1,
      '1:11'
    );
  }
  threePointer() {
    this.scoreService.addPoints(
      this.idScore,
      'rDQpMX3YBnuWjQ4RBzYI',
      3,
      1,
      '1:11'
    );
  }
}
