import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PosicionService } from '../../services/posicion.service';
import { Posicion } from '../../../interfaces/posicion';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user';
import { Jugador } from '../../../interfaces/jugador';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailValidatorService } from '../../../validators/email-validator.service';

@Component({
  selector: 'app-crear-jugador',
  templateUrl: './crear-jugador.component.html',
  styleUrls: ['./crear-jugador.component.css'],
})
export class CrearJugadorComponent implements OnInit {
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
    numero: ['', [Validators.required, Validators.min(0), Validators.max(99)]],
    nacionalidad: ['', [Validators.required]],
    position_id: ['', [Validators.required]],
    estado: ['', [Validators.required]],
    fec_nac: ['', [Validators.required]],
  });
  aux: boolean = false;
  title: string = 'Nuevo';
  user: User | undefined = undefined;
  jugador!: Jugador;
  posiciones: Posicion[] = [];

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private ps: PosicionService,
    private us: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.ps.allPositions().subscribe((res) => {
      console.log(res);
      this.posiciones = res;
    });

    if (!this.router.url.includes('editarJugador')) {
      this.aux = true;
      return;
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.us.userId(id)))
      .subscribe((user) => {
        this.user = user;
        console.log(this.user);
        this.title = 'Editar';
        this.us.jugadorId(this.user.id).subscribe((res) => {
          console.log(res);
          this.aux = true;
          this.jugador = res;
          this.miFormulario.reset({
            nombre_user: this.user?.nombre_user,
            apellidos: this.user?.apellidos,
            email: this.user?.email,
            image_user: this.user?.image_user,
            salario: this.user?.salario,
            telefono: this.user?.telefono,
            numero: this.jugador.numero,
            nacionalidad: this.jugador.nacionalidad,
            position_id: this.jugador.position_id,
            estado: this.jugador.estado,
            fec_nac: new Date(this.jugador.fec_nac),
          });
        });
      });
  }

  get posicionMsg() {
    const errors = this.miFormulario.get('position_id')?.errors;
    if (errors?.['required']) {
      return 'Seleccione una posición ';
    }
    return '';
  }

  get estadoMsg() {
    const errors = this.miFormulario.get('estado')?.errors;
    if (errors?.['required']) {
      return 'Seleccione un estado';
    }
    return '';
  }

  get fechaMsg() {
    const errors = this.miFormulario.get('fec_nac')?.errors;
    if (errors?.['required']) {
      return 'Seleccione una fecha de nacimiento';
    }
    return '';
  }

  get nacionalidadMsg() {
    const errors = this.miFormulario.get('nacionalidad')?.errors;
    if (errors?.['required']) {
      return 'Introduce una nacionalidad';
    }
    return '';
  }

  get numeroMsg() {
    const errors = this.miFormulario.get('numero')?.errors;
    if (errors?.['required']) {
      return 'Introduce un dorsal';
    } else if (errors?.['max']) {
      return 'El dorsal no puede ser superior a 99';
    } else if (errors?.['min']) {
      return 'El dorsal no puede ser inferior a 0';
    }
    return '';
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
        .actualizarJugador(this.jugador.id, this.miFormulario.getRawValue())
        .subscribe((jugador) => this.mostrarSnackBar('Jugador Actualizado'));
    } else {
      this.us.crearJugador(this.miFormulario.getRawValue()).subscribe((res) => {
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
