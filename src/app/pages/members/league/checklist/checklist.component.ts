import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  team1 = 'lakers'
  team2 = 'Thunder'
  players_team1:any[] = [
    {name:'Ulises Ulises Ulises Ulises',number:1,ok:true},
    {name:'Zema sports',number:2,ok:true},
  ]
  players_team2:any[] = [
    {name:'Gabriel',number:3,ok:true},
    {name:'Pepe',number:4,ok:false},
  ]

  selectedTab:number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  openCity(evt:any, tab:number):void {
    this.selectedTab = tab

  }

}
