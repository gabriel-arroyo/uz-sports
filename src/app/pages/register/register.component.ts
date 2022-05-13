import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
    loading = false;
    submitted = false;
    errors = false;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,) { 
      this.form = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
    }

  ngOnInit(): void {
  }

  goToHome(){
    this.router.navigate(['/']);
  }

  get f() { return this.form.controls; }
  onSubmit() {
    alert("el registro se realizó con éxito");
    this.goToHome()
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
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
