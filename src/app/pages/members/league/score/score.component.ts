import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import * as dayjs from 'dayjs';
import { ScoreService } from 'src/app/services/score.service';
import { map } from 'rxjs';
import { TeamService } from 'src/app/services/team.service';
import { PlayerService } from 'src/app/services/player.service';
import { timer } from 'rxjs';
import { Game, Point, Score, Team } from 'src/app/core/models/models';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  timerDisplay = {
    minutes: { digit1: '0', digit2: '0' },
    seconds: { digit1: '0', digit2: '0' },
  };
  isRunning: boolean = false;
  shotTimer: number = 24;
  timespan: number = 0;
  seconds: number = 0;
  minutes: number = 0;
  totalScore1: number = 0;
  totalScore2: number = 0;
  team1: Team = {
    name: 'team1',
    category: 'male',
    city: 'Saltillo',
  };
  team2: Team = {
    name: 'team2',
    category: 'male',
    city: 'Saltillo',
  };
  array: any[] = [];
  game: Game = {
    id: '',
    idScore1: '',
    idScore2: '',
    idTeam1: '',
    idTeam2: '',
    date: dayjs().format('YYYY/MM/DD'),
    time: dayjs().format('HH:mm'),
  };
  points1: Point[] = [];
  scoreTeam1: Score = {
    id: '',
    idTeam: '',
  };
  scoreTeam2: Score = {
    id: '',
    idTeam: '',
  };

  constructor(
    private gameService: GameService,
    private scoreService: ScoreService,
    private teamService: TeamService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    timer(0, 1000).subscribe(() => {
      if (this.isRunning) {
        this.timespan++;
        this.timerDisplay = this.getDisplayTimer(this.timespan);
      }
    });
    timer(0, 1000).subscribe(() => {
      if (this.isRunning) {
        this.shotTimer--;
        if (this.shotTimer < 1) {
          this.shotTimer = 24;
          this.isRunning = false;
        }
      }
    });
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
    this.scoreService
      .getAllPoints('kX5RIatU4DBCmaX5YV27')
      .subscribe((points) => (this.points1 = points));
    this.scoreService.getPoints('kX5RIatU4DBCmaX5YV27').subscribe((score) => {
      this.points1 = score;
      this.totalScore1 = this.totalPoints(score);
    });
    this.totalScore2 = 3;
    this.scoreService.getPoints('5Kxt5LnIAoZuemBR5Wio').subscribe((score) => {
      this.totalScore2 = this.totalPoints(score);
    });
  }

  toggleTimer() {
    this.isRunning = !this.isRunning;
  }

  totalPoints = (points: Point[]) => {
    return points.reduce((a, b) => a + (b['points'] || 0), 0);
  };

  addPoints = () => {};
  getDisplayTimer(time: number) {
    const minutes = '0' + Math.floor((time % 3600) / 60);
    const seconds = '0' + Math.floor((time % 3600) % 60);

    return {
      minutes: { digit1: minutes.slice(-2, -1), digit2: minutes.slice(-1) },
      seconds: { digit1: seconds.slice(-2, -1), digit2: seconds.slice(-1) },
    };
  }

  resetShotTimer() {
    this.shotTimer = 24;
  }
}
