import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import * as dayjs from 'dayjs'
import { Game } from 'src/app/core/models/game';
import { Score } from 'src/app/core/models/score';
import { ScoreService } from 'src/app/services/score.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  game: Game = {
    id: "",
    idTeam1: "",
    idTeam2: "",
    date: dayjs().format("YYYY/MM/DD"),
    time: dayjs().format("HH:mm")
  }
  scoreTeam1: Score = {
    idTeam: "",
    idGame: "",
    date: dayjs().format("YYYY/MM/DD"),
    time: dayjs().format("HH:mm")
  }
  scoreTeam2: Score = {
    idTeam: "",
    idGame: "",
    date: dayjs().format("YYYY/MM/DD"),
    time: dayjs().format("HH:mm")
  }

  constructor(private gameService: GameService, private scoreService: ScoreService) { }

  ngOnInit(): void {
    // this.gameService.createScore({
    //   date: dayjs().format('DD/MM/YYYY'),
    //   time: dayjs().format('HH:mm'),
    //   idTeam1: 't1',
    //   teamName1: 'equipo1',
    //   idTeam2: 't2',
    //   teamName2: 'equipo2',
    // })

    this.gameService.getGame("GspWAq5OCukyu977mCQD")
      .subscribe(res => {
        this.game = res
        // if (!this.game.idScore1 || !this.game.idScore2 || !this.scoreTeam2.idGame || !this.scoreTeam2.idGame) {
        //   this.game.idScore1 = this.scoreService.createScore(this.game, 1)
        //   this.game.idScore2 = this.scoreService.createScore(this.game, 2)
        //   this.gameService.setGameScoresId(this.game.id, this.game.idScore1, this.game.idScore2)
        // }
        this.scoreService.getScoreByIdGameAndTeam("GspWAq5OCukyu977mCQD", res.idTeam1)
          .subscribe(
            res => {
              this.scoreTeam1 = res[0];
              console.log("res", res);
            }
          )
        this.scoreService.getScoreByIdGameAndTeam("GspWAq5OCukyu977mCQD", res.idTeam2)
          .subscribe(
            res => this.scoreTeam2 = res[0]
          )
      })
  }

}
