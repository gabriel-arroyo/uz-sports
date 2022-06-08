import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from 'src/app/core/models/models';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss'],
})
export class LeagueComponent implements OnInit {
  league: string = 'Nombre de la liga';
  leagues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
  pages: NavItem[] = [
    { title: 'This is uz', url: '/home' },
    {
      title: 'League',
      url: '/home',
      children: [{ title: 'Score', url: '/score' }],
    },
    { title: 'Community', url: '/home' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
