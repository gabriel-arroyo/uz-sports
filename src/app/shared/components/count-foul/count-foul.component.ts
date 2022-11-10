import { Component, OnInit, Input } from '@angular/core';
import { Foul } from '../../../core/class/foul';

@Component({
  selector: 'app-count-foul',
  templateUrl: './count-foul.component.html',
  styles: [
  ]
})
export class CountFoulComponent implements OnInit {

  @Input() foul: Foul = new Foul();

  constructor() { }

  ngOnInit(): void {
  }

}
