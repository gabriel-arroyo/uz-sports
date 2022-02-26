import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {
  league: string = 'Nombre de la liga'
  leagues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
  pages = ["This is uz", "League", "Community"];

  constructor() { }

  ngOnInit(): void {
  }

}
