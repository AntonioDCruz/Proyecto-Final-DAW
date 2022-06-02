import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../../auth/auth.service';
import { EmailValidatorService } from '../../../validators/email-validator.service';
import { ValidatorService } from '../../../validators/validator.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  infoForm: FormGroup = this.fb.group({
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
  });

  passwordForm: FormGroup = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    password_confirm: ['', [Validators.required, Validators.minLength(6)]],
  },{
    validators: [ this.validatorService.camposIguales('password', 'password_confirm') ]
  });

  constructor(
    private fb: FormBuilder,
    private us: UserService,
    private as: AuthService,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.infoForm.patchValue(this.as.auth);
    this.passwordForm.patchValue(this.as.auth);
  }

  get emailMsg() {
    const errors = this.infoForm.get('email')?.errors;
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
    const errors = this.infoForm.get('nombre_user')?.errors;
    if (errors?.['required']) {
      return 'Introduce un nombre';
    } else if (errors?.['pattern']) {
      return 'Introduce un nombre válido';
    }
    return '';
  }

  get apellidosMsg(){
    const errors = this.infoForm.get('apellidos')?.errors;
    if (errors?.['required']) {
      return 'Introduce los apellidos';
    } else if (errors?.['pattern']) {
      return 'Introduce unos apellidos válidos';
    } else if (errors?.['enUso']) {
      return 'El email ya está en uso';
    }
    return '';
  }

  get passwordMsg(){
    const errors = this.passwordForm.get('password')?.errors;
    if (errors?.['required']) {
      return 'Introduce una contraseña';
    } else if (errors?.['minlength']) {
      return 'La contraseña debe tener mínimo 6 carácteres';
    }
    return '';
  }

  get passwordConfirmMsg(){
    const errors = this.passwordForm.get('password_confirm')?.errors;
    if (errors?.['required']) {
      return 'Introduce una contraseña';
    } else if (errors?.['minlength']) {
      return 'La contraseña debe tener mínimo 6 carácteres';
    }else if (errors?.['noIguales']) {
      return 'Las contraseñas no coinciden'
    }
    return '';
  }

  errorInfoForm(campo: string) {
    return (
      this.infoForm.controls?.[campo]?.errors &&
      this.infoForm.controls?.[campo]?.touched
    );
  }

  errorPasswordForm(campo: string) {
    return (
      this.passwordForm.controls?.[campo]?.errors &&
      this.passwordForm.controls?.[campo]?.touched
    );
  }

  infoSubmit() {
    if (this.infoForm.invalid) {
      this.infoForm.markAllAsTouched();
      return;
    }

    this.us.updateInfo(this.infoForm.getRawValue()).subscribe((res) => {
      console.log(res);
      window.location.reload();
    });
  }

  passwordSubmit() {
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      return;
    }

    this.us.updatePassword(this.passwordForm.getRawValue()).subscribe((res) => {
      console.log(res);
    });
  }
}
