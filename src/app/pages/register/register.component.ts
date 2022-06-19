import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { PlayerService } from 'src/app/services/player.service';
import { Player, User } from 'src/app/core/models/models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  errors = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private playerService: PlayerService
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      contact: ['', Validators.required],
      roles: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      number: [''],
      position: [''],
      teams: [''],
      photoUrl: [''],
      birthday: [''],
      address: [''],
      mail: [''],
      social: [''],
    });
  }

  ngOnInit(): void { }

  goToHome() {
    this.router.navigate(['/']);
  }

  get f() {
    return this.form.controls;
  }
  onSubmit() {
    let user: User = {
      name: this.form.get('name')?.value,
      photoUrl: this.form.get('photoUrl')?.value,
      contact: this.form.get('contact')?.value,
      roles: ['player'],
      timestamp: new Date().toISOString()
    };
    let player: Player = {
      name: this.form.get('name')?.value,
      number: this.form.get('number')?.value || 0,
      city: this.form.get('city')?.value,
      photoUrl: this.form.get('photoUrl')?.value,
      contact: this.form.get('contact')?.value,
      birthday: this.form.get('birthday')?.value,
      address: this.form.get('address')?.value,
      position: this.form.get('position')?.value,
      mail: this.form.get('mail')?.value,
      social: this.form.get('social')?.value,
      timestamp: new Date().toISOString()
    };
    // this.userService.createUser(user);
    // alert("el registro se realizó con éxito");
    // this.goToHome()
    this.userService.createUser(user);
    this.playerService.createPlayer(player);
    console.log('test');
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      console.log('form invalid');
      return;
    }

    this.loading = true;
    // this.accountService.register(this.form.value)
    //     .pipe(first())
    //     .subscribe({
    //         next: () => {
    //             this.alertService.success('Registration successful', { keepAfterRouteChange: true });
    //             this.router.navigate(['../login'], { relativeTo: this.route });
    //         },
    //         error: error => {
    //             this.alertService.error(error);
    //             this.loading = false;
    //         }
    //     });
  }
}
