import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/core/models/models';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService
      .getTeamPlayers('6CbkplTSDym5rB3H5CT9')
      .subscribe((players) => {
        console.log('players', players);
        this.players = players;
      });
  }
}
