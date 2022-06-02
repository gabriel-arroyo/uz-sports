import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { League } from '../../../../core/models/League';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.scss'],
})
export class AddTournamentComponent implements OnInit {
  form = this.formBuilder.group({
    name: '',
  });
  leagues: League[] = [{ name: 'TNB', region: 'South' }];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.warn('Your form has been submitted', this.form.value);
    this.form.reset();
  }
}
