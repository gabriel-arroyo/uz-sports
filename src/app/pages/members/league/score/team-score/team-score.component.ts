import { Component, OnInit } from '@angular/core';
import { Score } from 'src/app/models/score';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-team-score',
  templateUrl: './team-score.component.html',
  styleUrls: ['./team-score.component.scss']
})
export class TeamScoreComponent implements OnInit {
  score: Score[] = [];

  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.scoreService.getScore().subscribe(score => {
      this.score = score;
    })
  }

  create() {
    this.scoreService.createScore()
  }

}
