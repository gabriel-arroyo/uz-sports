import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/core/models/news';

@Component({
  selector: 'app-news-bar',
  templateUrl: './news-bar.component.html',
  styleUrls: ['./news-bar.component.scss']
})
export class NewsBarComponent implements OnInit {
  @Input() news: News[]= [];

  constructor() {}

ngOnInit():void{}
}
