import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { League } from 'src/app/core/class/league';
import { LeagueService } from '../../shared/services/league.service';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styles: [
  ]
})
export class FullComponent implements OnInit {

  leaguesClass: League[] = []

  constructor(private router: Router, private _LeagueService: LeagueService) { }

  ngOnInit(): void {
    this._LeagueService.GetAll()
    .subscribe(data => this.leaguesClass = data);
  }

  GoLeague(League: League): void {
    console.log("🚀 ~ file: full.component.ts ~ line 23 ~ FullComponent ~ GoLeague ~ League", League)
    this.router.navigate(['/uzsport/league',League.NameLeague]);
  }
}
