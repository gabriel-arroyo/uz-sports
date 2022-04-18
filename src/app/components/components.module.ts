import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { SocialBarComponent } from './social-bar/social-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainLinksComponent } from './main-links/main-links.component';
import { LeaguesBarComponent } from './leagues-bar/leagues-bar.component';
import { NewsComponent } from './news/news.component';
import { NewsBarComponent } from './news-bar/news-bar.component';
import { GaleryBarComponent } from './galery-bar/galery-bar.component';
import { ThisisuzComponent } from './thisisuz/thisisuz.component';

@NgModule({
  declarations: [
    TitleComponent,
    SocialBarComponent,
    NavbarComponent,
    MainLinksComponent,
    LeaguesBarComponent,
    NewsComponent,
    NewsBarComponent,
    GaleryBarComponent,
    ThisisuzComponent,
  ],
  exports: [
    TitleComponent,
    SocialBarComponent,
    NavbarComponent,
    MainLinksComponent,
    LeaguesBarComponent,
    NewsComponent,
    NewsBarComponent,
    GaleryBarComponent,
    ThisisuzComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
