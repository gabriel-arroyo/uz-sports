import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ThisisuzComponent } from 'src/app/components/thisisuz/thisisuz.component';
import { League, Player, Team, Tournament } from 'src/app/core/models/models';
import { LeagueService } from 'src/app/services/league.service';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.scss'],
})
export class AddTournamentComponent implements OnInit {
  selectedLeague: string = '';
  selectedTeam: string = '';
  monday = new FormControl(false);
  tuesday = new FormControl(false);
  wednesday = new FormControl(false);
  thursday = new FormControl(false);
  friday = new FormControl(false);
  saturday = new FormControl(false);
  sunday = new FormControl(false);

  courtsList = ['court1', 'court2'];

  form = this.formBuilder.group({
    name: '',
    leagueName: '',
    region: '',
    startDate: new Date(),
    endDate: new Date(),
    moday: this.monday,
    tuesday: this.tuesday,
    wednesday: this.wednesday,
    thursday: this.thursday,
    friday: this.friday,
    saturday: this.saturday,
    sunday: this.sunday,
    startTime: '',
    endTime: '',
    address: '',
    city: '',
    state: '',
    // courts: this.formBuilder.group({}),
    courts: 0,
    type: '',
    size: '',
    category: '',
    priceReferee: 0,
    priceRegistration: 0,
    rules: '',
    contact: '',
  });
  //courts = <FormGroup>this.form.get('courts');
  courts = this.form.get('courts');

  leagues: League[] = [{ name: 'TNB', region: 'South', timestamp: new Date().toISOString(), id: '1' }];
  teams: Team[] = []
  players: Player[] = []

  types = ['Aire libre', 'Gimnasio'];
  sizes = ['Profesional', 'Semi-Profesional', 'Infantil'];
  categories = ['Varonil', 'Femenil', 'Mixto'];



  // Equipo
  teamForm = this.formBuilder.group({
    name: '',
    logo: '',
    photo: '',
    category: '',
    birthday: '',
    city: '',
    captain: '',
    players: [],
    mail: '',
    contact: '',
    social: ''
  })


  constructor(
    private formBuilder: FormBuilder,
    private leagueService: LeagueService,
    private torunamentService: TournamentService,
    private teamService: TeamService,
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe((t) => this.teams = t)
    this.playerService.getAllPlayers().subscribe((p) => this.players = p)
    this.leagueService.getAllLeagues().subscribe((l) => this.leagues = l)
  }

  onSubmit(): void {
    // this.courtsList.forEach((court: any) => {
    //   this.courts.addControl(court, new FormControl(true));
    // });
    if (this.selectedLeague === 'new') {
      const league = {
        name: this.form.get('leagueName')?.value?.toString(),
        region: this.form.get('region')?.value,
        timestamp: new Date().toISOString()
      }
      this.leagueService.createLeague(league)
    }
    const tournament = { ... this.form.value, timestamp: new Date().toISOString() }
    this.torunamentService.createTournament(tournament)
    console.warn('Your form has been submitted', this.form.value);
    this.form.reset();
  }
  onTeamSubmit() {
    const team = {
      ... this.teamForm.value,
      timestamp: new Date().toISOString()
    }
    this.teamService.createTeam(team)
    this.teamForm.reset()
  }
}
