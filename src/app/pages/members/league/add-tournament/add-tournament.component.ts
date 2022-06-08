import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { League } from 'src/app/core/models/models';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.scss'],
})
export class AddTournamentComponent implements OnInit {
  selectedLeague: string = '';
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
  courts = <FormGroup>this.form.get('courts');

  leagues: League[] = [{ name: 'TNB', region: 'South' }];

  types = ['Aire libre', 'Gimnasio'];
  sizes = ['Profesional', 'Semi-Profesional', 'Infantil'];
  categories = ['Varonil', 'Femenil', 'Mixto'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // this.courtsList.forEach((court: any) => {
    //   this.courts.addControl(court, new FormControl(true));
    // });
    console.warn('Your form has been submitted', this.form.value);
    this.form.reset();
  }
}
