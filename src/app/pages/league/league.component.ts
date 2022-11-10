import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LeagueService } from '../../shared/services/league.service';
import { League } from '../../core/class/league';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styles: [
  ]
})
export class LeagueComponent implements OnInit {

  titleLeague: string = '';
  league: League = new League();

  constructor(private routerActive: ActivatedRoute, private _leagueService: LeagueService) { }

  ngOnInit(): void {
    this.routerActive.params.subscribe((params: Params) => {
      this.titleLeague = params['league'];
      this.GetLeague(this.titleLeague);
    })
    console.log(this.league)
  }


  GetLeague(NameLeague: string) {
    this._leagueService.GetLeague(NameLeague)
    .subscribe(x => {
      this.league = new League({
        nameLeague : x[0].NameLeague,
        Description : x[0].Description,
        Status : x[0].Status,
        Like : x[0].Like
      });
      console.log(this.league)
    });
  }

}
