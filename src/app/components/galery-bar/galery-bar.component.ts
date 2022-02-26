import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery-bar',
  templateUrl: './galery-bar.component.html',
  styleUrls: ['./galery-bar.component.scss']
})
export class GaleryBarComponent implements OnInit {
  @Input() leagues: string[] = [];

  constructor() {}

ngOnInit():void{}
}
