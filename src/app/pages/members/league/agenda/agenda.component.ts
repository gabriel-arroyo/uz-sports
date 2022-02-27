import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  now:Date = new Date();
  date:string = this.now.toISOString().split('T')[0]
  max:Date = new Date(this.now.setMonth(this.now.getMonth() + 1));
  maxDate:string = this.max.toISOString().split('T')[0]
  min:Date = new Date(this.now.setMonth(this.now.getMonth() - 2));
  minDate:string = this.min.toISOString().split('T')[0]
  courts = [1,2, 3]
  matches = [
    {time:"10:00", team1:"Team1", team2:"Team2"},
    {time:"10:30", team1:"Team1", team2:"Team2"},
    {time:"11:00", team1:"Team1", team2:"Team2"},
    {time:"11:30", team1:"Team1", team2:"Team2"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
