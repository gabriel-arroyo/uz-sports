import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/core/models/models';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  @Input() article: News = {
    title: 'news',
    content: 'news',
    imageUrl: '',
    idLeague: '',
    timestamp: new Date().toISOString()
  };

  constructor() {}

  ngOnInit(): void {}
}
