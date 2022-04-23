import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import * as dayjs from 'dayjs'
import { Game } from 'src/app/core/models/game';
import { Point, Score } from 'src/app/core/models/score';
import { ScoreService } from 'src/app/services/score.service';
import { map } from 'rxjs';
import { TeamService } from 'src/app/services/team.service';
import { PlayerService } from 'src/app/services/player.service';
import { Team } from 'src/app/core/models/team';
import { Player } from 'src/app/core/models/player';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  totalScore1: number = 0
  totalScore2: number = 0
  team1: Team = {
    name: "team1",
    category: "male",
    city: "Saltillo",
  }
  team2: Team = {
    name: "team2",
    category: "male",
    city: "Saltillo",
  }
  array: any[] = []
  game: Game = {
    id: "",
    idScore1: "",
    idScore2: "",
    idTeam1: "",
    idTeam2: "",
    date: dayjs().format("YYYY/MM/DD"),
    time: dayjs().format("HH:mm")
  }
  points1: Point[] = []
  scoreTeam1: Score = {
    id: "",
    idTeam: "",
  }
  scoreTeam2: Score = {
    id: "",
    idTeam: "",
  }

  constructor(
    private gameService: GameService,
    private scoreService: ScoreService,
    private teamService: TeamService,
    private playerService: PlayerService,
  ) { }

  ngOnInit(): void {
    // this.gameService.createGame(
    //   "rDQpMX3YBnuWjQ4RBzYI",
    //   "6CbkplTSDym5rB3H5CT9",
    // ).then(
    //   game => {
    //     this.game = game
    //     this.scoreService.setGame(game)
    //     this.scoreService.addPoints(game.idScore1, "05ONfhbGOyqghC9AhB1m", 23, 2, "1:11")
    //   })

    // this.teamService.createTeam(this.team1).then(id => {
    //   if (id === "") return
    //   for (let index = 0; index < 50; index++) {
    //     this.playerService.createPlayer({
    //       name: "Player" + index,
    //       idTeams: [id],
    //       number: index
    //     })
    //   }
    // })
    // this.teamService.createTeam(this.team2).then(id => {
    //   if (id === "") return
    //   for (let index = 0; index < 50; index++) {
    //     this.playerService.createPlayer({
    //       name: "Player" + index,
    //       idTeams: [id],
    //       number: index
    //     })
    //   }
    // })
    this.scoreService.getAllPoints("kX5RIatU4DBCmaX5YV27").subscribe(
      points => this.points1 = points
    )
    this.scoreService.getPoints("kX5RIatU4DBCmaX5YV27").subscribe(
      score => {
        this.points1 = score
        this.totalScore1 = this.totalPoints(score)
      }
    )
    this.totalScore2 = 3
  }


  totalPoints = (points: Point[]) => {
    return points.reduce((a, b) => a + (b["points"] || 0), 0)
  }

  addPoints = () => {

  }

}
