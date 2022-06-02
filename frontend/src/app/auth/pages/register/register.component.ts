import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { EmailValidatorService } from '../../../validators/email-validator.service';
import { ValidatorService } from '../../../validators/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  miFormulario: FormGroup = this.fb.group({
    nombre_user: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-zA-ZÀ-ÖØ-öø-ÿ]+.?(( |-)[a-zA-ZÀ-ÖØ-öø-ÿ]+.?)*'),
      ],
    ],
    apellidos: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-zA-ZÀ-ÖØ-öø-ÿ]+.?(( |-)[a-zA-ZÀ-ÖØ-öø-ÿ]+.?)*'),
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '[a-z0-9_-]+(.[_a-z0-9-]+)*@([_a-z0-9-]+.)+([a-z]{2}|aero|asia|arpa|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|xxx)'
        ),
      ],
      [this.emailValidator],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password_confirm: ['', [Validators.required, Validators.minLength(6)]],
    nombre_equipo: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-zA-ZÀ-ÖØ-öø-ÿ]+.?(( |-)[a-zA-ZÀ-ÖØ-öø-ÿ]+.?)*'),
      ],
    ],
    liga: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-zA-ZÀ-ÖØ-öø-ÿ]+.?(( |-)[a-zA-ZÀ-ÖØ-öø-ÿ]+.?)*'),
      ],
    ],
  },{
    validators: [ this.validatorService.camposIguales('password', 'password_confirm') ]
  });

  constructor(
    public AuthService: AuthService,
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService,
    private router: Router
  ) {}

  get emailMsg() {
    const errors = this.miFormulario.get('email')?.errors;
    if (errors?.['required']) {
      return 'Introduce un email';
    } else if (errors?.['pattern']) {
      return 'Introduce un formato de email válido';
    } else if (errors?.['enUso']) {
      return 'El email ya está en uso';
    }
    return '';
  }

  get nombreUserMsg(){
    const errors = this.miFormulario.get('nombre_user')?.errors;
    if (errors?.['required']) {
      return 'Introduce un nombre';
    } else if (errors?.['pattern']) {
      return 'Introduce un nombre válido';
    }
    return '';
  }

  get apellidosMsg(){
    const errors = this.miFormulario.get('apellidos')?.errors;
    if (errors?.['required']) {
      return 'Introduce los apellidos';
    } else if (errors?.['pattern']) {
      return 'Introduce unos apellidos válidos';
    } else if (errors?.['enUso']) {
      return 'El email ya está en uso';
    }
    return '';
  }

  get nombreEquipoMsg(){
    const errors = this.miFormulario.get('nombre_equipo')?.errors;
    if (errors?.['required']) {
      return 'Introduce un nombre de equipo';
    } else if (errors?.['pattern']) {
      return 'Introduce un nombre de equipo válido';
    }
    return '';
  }

  get passwordMsg(){
    const errors = this.miFormulario.get('password')?.errors;
    if (errors?.['required']) {
      return 'Introduce una contraseña';
    } else if (errors?.['minlength']) {
      return 'La contraseña debe tener mínimo 6 carácteres';
    }
    return '';
  }

  get passwordConfirmMsg(){
    const errors = this.miFormulario.get('password_confirm')?.errors;
    if (errors?.['required']) {
      return 'Introduce una contraseña';
    } else if (errors?.['minlength']) {
      return 'La contraseña debe tener mínimo 6 carácteres';
    }else if (errors?.['noIguales']) {
      return 'Las contraseñas no coinciden'
    }
    return '';
  }

  get ligaMsg(){
    const errors = this.miFormulario.get('liga')?.errors;
    if (errors?.['required']) {
      return 'Introduce un nombre de liga';
    } else if (errors?.['pattern']) {
      return 'Introduce un nombre de liga válido';
    }
    return '';
  }

  error(campo: string) {
    return (
      this.miFormulario.controls?.[campo]?.errors &&
      this.miFormulario.controls?.[campo]?.touched
    );
  }

  register() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    const headers = new HttpHeaders().append(
      'Content-Type',
      'multipart/form-data'
      //'application/x-www-form-urlencoded'
    );
    let body = new FormData();
    body.append('nombre_user', this.miFormulario.value?.['nombre_user']);
    body.append('apellidos', this.miFormulario.value?.['apellidos']);
    body.append('email', this.miFormulario.value?.['email']);
    body.append('password', this.miFormulario.value?.['password']);
    body.append(
      'password_confirm',
      this.miFormulario.value?.['password_confirm']
    );
    body.append('nombre', this.miFormulario.value?.['nombre_equipo']);
    body.append('liga', this.miFormulario.value?.['liga']);

    this.AuthService.register(body).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/auth/login']);
    });
  }
}
