import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/core/models/models';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-rol-maker',
  templateUrl: './rol-maker.component.html',
  styleUrls: ['./rol-maker.component.scss'],
})
export class RoleMakerComponent implements OnInit {
  teams: Team[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.teams.subscribe((t) => (this.teams = t));
  }
}
