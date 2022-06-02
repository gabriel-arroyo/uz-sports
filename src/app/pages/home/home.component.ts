import { Component, OnInit } from '@angular/core';
import { throwIfEmpty } from 'rxjs';
import { TitleComponent } from 'src/app/components/title/title.component';
import { NavItem } from 'src/app/core/models/Navitem';
import { News } from 'src/app/core/models/News';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pages: NavItem[] = [
    { title: 'This is uz', url: '/home' },
    {
      title: 'League',
      url: '/score',
      children: [
        { title: 'Rol Maker', url: '/rol-maker' },
        { title: 'Score', url: '/score' },
      ],
    },
    { title: 'Community', url: '/home' },
  ];
  leagues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
  news: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    // this.newsService.createNews({
    //   title: "Title 3",
    //   content: "Consequat officia adipisicing eu exercitation Lorem duis non esse ullamco esse consectetur sint nisi cillum.",
    //   imageUrl: "https://concepto.de/wp-content/uploads/2019/12/basquetbol-baloncesto-e1575657099957-800x399.jpg",
    //   idLeague: "1"
    // })
    this.newsService.getNewsByLeague('1').subscribe((n) => {
      console.log(n);
      this.news = n;
    });
  }
}
