import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from 'src/app/core/models/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() pages: NavItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
