// login.component.ts
import { AuthService } from '../../auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  miFormulario: FormGroup = this.fb.group({
    email: [''],
    password: [''],
    password_confirm: [''],
  });

  display: boolean = false;

  constructor(
    public AuthService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  showDialog() {
    this.display = true;
  }

  closeDialog() {
    this.display = false;
  }

  login() {
    if (this.display) {
      this.closeDialog();
    }

    console.log(this.miFormulario.getRawValue());
    let body = new FormData();
    body.append('email', this.miFormulario.value?.['email']);
    body.append('password', this.miFormulario.value?.['password']);

    this.AuthService.login(body)
      .pipe(
        catchError((err) => {
          console.log(err);
          this.showDialog();
          return EMPTY;
        })
      )
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['/inicio']);
      });
  }
}
