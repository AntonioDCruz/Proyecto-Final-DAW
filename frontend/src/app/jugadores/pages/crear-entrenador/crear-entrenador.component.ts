import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators';
import { EmailValidatorService } from '../../../validators/email-validator.service';

@Component({
  selector: 'app-crear-entrenador',
  templateUrl: './crear-entrenador.component.html',
  styleUrls: ['./crear-entrenador.component.css'],
})
export class CrearEntrenadorComponent implements OnInit {
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
    image_user: [''],
    salario: ['', [Validators.required, Validators.max(999999999)]],
    telefono: ['', [Validators.required, Validators.maxLength(9), Validators.pattern('[0-9]{9}')]],
  });

  aux: boolean = false;
  title: string = 'Nuevo';
  user: User | undefined = undefined;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private us: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('editarEntrenador') && !this.router.url.includes('editarManager') ) {
      this.aux = true;
      return;
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.us.userId(id)))
      .subscribe((user) => {
        this.aux = true;
        this.user = user;
        console.log(this.user);
        this.title = 'Editar';
        this.miFormulario.reset({
          nombre_user: this.user.nombre_user,
          apellidos: this.user.apellidos,
          email: this.user.email,
          image_user: this.user.image_user,
          salario: this.user.salario,
          telefono: this.user.telefono,
        });
      });
  }

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

  get salarioMsg(){
    const errors = this.miFormulario.get('salario')?.errors;
    if (errors?.['required']) {
      return 'Introduce un salario';
    } else if (errors?.['max']) {
      return 'El salario es demasiado grande';
    }
    return '';
  }

  get telefonoMsg(){
    const errors = this.miFormulario.get('telefono')?.errors;
    if (errors?.['required']) {
      return 'Introduce un número de teléfono';
    } else if (errors?.['maxlength']) {
      return 'El número de teléfono es demasiado grande';
    } else if (errors?.['pattern']) {
      return 'Introduce un número de teléfono válido';
    }
    return '';
  }

  error(campo: string) {
    return (
      this.miFormulario.controls?.[campo]?.errors &&
      this.miFormulario.controls?.[campo]?.touched
    );
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    if (this.user?.id !== undefined) {
      this.us
        .actualizarEntrenador(this.user.id, this.miFormulario.getRawValue())
        .subscribe((entrenador) => this.mostrarSnackBar('Entrenador Actualizado'));
    } else {
      this.us
        .crearEntrenador(this.miFormulario.getRawValue())
        .subscribe((res) => {
          console.log(res);
          this.router.navigate(['/inicio/equipo']);
        });
    }
  }

  mostrarSnackBar(mensaje: string) {
    this.snackBar.open(mensaje, 'OK!', {
      duration: 2000,
    });
  }
}
