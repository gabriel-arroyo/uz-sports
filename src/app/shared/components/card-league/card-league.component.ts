import { Component, OnInit, Input } from '@angular/core';
import { League } from '../../../core/class/league';

@Component({
  selector: 'app-card-league',
  templateUrl: './card-league.component.html',
  styles: [
  ]
})
export class CardLeagueComponent implements OnInit {
  avatar: string = 'https://material.angular.io/assets/img/examples/shiba1.jpg';

  @Input() League: League = new League();

  constructor() { }

  ngOnInit(): void {
  }

}
