import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  errors = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }
  goToHome(){
    this.router.navigate(['/']);
  }
  goToRegister(){
    this.router.navigate(['/register']);
  }
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    alert("usuario logueado")
    this.goToHome()
    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    // this.accountService.login(this.f.username.value, this.f.password.value)
    //     .pipe(first())
    //     .subscribe({
    //         next: () => {
    //             // get return url from query parameters or default to home page
    //             const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //             this.router.navigateByUrl(returnUrl);
    //         },
    //         error: error => {
    //             this.alertService.error(error);
    //             this.loading = false;
    //         }
    //     });
  }

}
