import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styles: [
  ]
})
export class LeagueComponent implements OnInit {

  titleLeague: string = '';

  constructor(private routerActive: ActivatedRoute) { }

  ngOnInit(): void {
    this.routerActive.params.subscribe((params: Params) => this.titleLeague = params['league'])
  }

}
