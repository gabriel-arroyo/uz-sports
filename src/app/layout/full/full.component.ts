import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { League } from 'src/app/core/class/league';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styles: [
  ]
})
export class FullComponent implements OnInit {

  leaguesClass: League[] = [{
    nameLeague: 'Norte'
  }]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  GoLeague(League: League): void {
    console.log("🚀 ~ file: full.component.ts ~ line 23 ~ FullComponent ~ GoLeague ~ League", League)
    this.router.navigate(['/uzsport/league',League.nameLeague]);
  }
}
