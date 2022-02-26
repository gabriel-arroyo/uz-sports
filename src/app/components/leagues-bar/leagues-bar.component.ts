import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-leagues-bar',
  templateUrl: './leagues-bar.component.html',
  styleUrls: ['./leagues-bar.component.scss']
})
export class LeaguesBarComponent implements OnInit {
  @Input() leagues: string[] = [];

  constructor() {}

ngOnInit():void{}
}
