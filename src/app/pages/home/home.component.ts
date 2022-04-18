import { Component, OnInit } from '@angular/core';
import { TitleComponent } from 'src/app/components/title/title.component';
import { News } from 'src/app/core/models/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pages = ["This is uz", "League", "Community"];
  leagues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
  news: News[] = [
    {
      title: "title1",
      content: "news1 Exercitation ipsum cillum laborum et officia cupidatat amet non esse minim officia eu exercitation. Proident nulla proident ea et deserunt ex non minim.",
      imageUrl: "https://frontofficesports.com/wp-content/uploads/2020/06/GettyImages-1190989119-1-scaled.jpg"
    },
    {
      title: "title2",
      content: "news2 Ex ex mollit est esse eu dolor cupidatat occaecat occaecat.Laborum sunt cillum minim irure voluptate tempor laboris quis proident.",
      imageUrl: "https://frontofficesports.com/wp-content/uploads/2020/06/GettyImages-1190989119-1-scaled.jpg"
    },
    {
      title: "title3",
      content: "news3 Laboris consequat consequat minim consequat veniam ea.Lorem enim commodo culpa esse tempor exercitation aute duis.Duis ut aliquip nulla sint eu.Commodo exercitation laboris laborum pariatur laborum excepteur qui magna cillum nostrud excepteur dolore in dolore.",
      imageUrl: "https://frontofficesports.com/wp-content/uploads/2020/06/GettyImages-1190989119-1-scaled.jpg"
    },
  ]

  constructor() { }



  ngOnInit(): void {
  }

}


