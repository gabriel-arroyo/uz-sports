import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-league',
  templateUrl: './card-league.component.html',
  styles: [
  ]
})
export class CardLeagueComponent implements OnInit {
  avatar: string = 'https://material.angular.io/assets/img/examples/shiba1.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
