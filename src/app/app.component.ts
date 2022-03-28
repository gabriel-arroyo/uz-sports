import { Component } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'uz-sports';
  constructor(private itemService: ItemService) { }
  insert() {
    console.log('setting item')
    this.itemService.setItem()
  }
}
