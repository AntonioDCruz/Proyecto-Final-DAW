import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rival } from 'src/app/interfaces/rival';
import { PartidosService } from '../../services/partidos.service';
import { formatDate } from '@angular/common';
import { RivalService } from '../../services/rival.service';
import { switchMap } from 'rxjs/operators';
import { Partido } from 'src/app/interfaces/partido';

@Component({
  selector: 'app-crear-partido',
  templateUrl: './crear-partido.component.html',
  styleUrls: ['./crear-partido.component.css'],
})
export class CrearPartidoComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    fecha: ['', [Validators.required]],
    campo: ['', [Validators.required]],
    hora: ['', [Validators.required]],
    rival_id: ['', [Validators.required]],
    puntos_equipo: ['', [Validators.min(0), Validators.max(200)]],
    puntos_rival: ['', [Validators.min(0), Validators.max(200)]],
  });

  rivales: Rival[] = [];
  partido: Partido | undefined = undefined;
  aux: boolean = false;

  constructor(
    private ps: PartidosService,
    private rs: RivalService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.rs.rivalesEquipo().subscribe((res) => (this.rivales = res));

    if (!this.router.url.includes('editarPartido')) {
      this.aux = true;
      return;
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.ps.getPartido(id)))
      .subscribe((partido) => {
        this.aux = true;
        this.partido = partido;
        this.miFormulario.reset({
          fecha: new Date(this.partido.fecha),
          campo: this.partido.campo,
          hora: this.partido.hora,
          rival_id: this.partido.rival_id,
          puntos_equipo: this.partido.puntos_equipo,
          puntos_rival: this.partido.puntos_rival,
        });
        console.log(this.miFormulario.getRawValue());
      });
  }

  get fechaMsg() {
    const errors = this.miFormulario.get('fecha')?.errors;
    if (errors?.['required']) {
      return 'Seleccione el día del partido';
    }
    return '';
  }

  get campoMsg() {
    const errors = this.miFormulario.get('campo')?.errors;
    if (errors?.['required']) {
      return 'Seleccione el campo del partido';
    }
    return '';
  }

  get horaMsg() {
    const errors = this.miFormulario.get('hora')?.errors;
    if (errors?.['required']) {
      return 'Seleccione la hora del partido';
    }
    return '';
  }

  get rivalMsg() {
    const errors = this.miFormulario.get('rival_id')?.errors;
    if (errors?.['required']) {
      return 'Seleccione un rival';
    }
    return '';
  }

  get puntosEquipoMsg() {
    const errors = this.miFormulario.get('puntos_equipo')?.errors;
    if (errors?.['min']) {
      return 'Los puntos no puenden ser inferiores a 0';
    } else if (errors?.['max']) {
      return 'Los puntos no pueden ser superiores a 200';
    }
    return '';
  }

  get puntosRivalMsg() {
    const errors = this.miFormulario.get('puntos_rival')?.errors;
    if (errors?.['min']) {
      return 'Los puntos no puenden ser inferiores a 0';
    } else if (errors?.['max']) {
      return 'Los puntos no pueden ser superiores a 200';
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

    if (this.partido?.id) {
      this.miFormulario
        .get('fecha')
        ?.setValue(
          formatDate(this.miFormulario.get('fecha')?.value, 'yyyy-MM-dd', 'en')
        );
      this.ps
        .actualizarPartido(this.partido.id, this.miFormulario.getRawValue())
        .subscribe((partido) => {
          console.log(partido);
          this.router.navigate(['/inicio/partidos']);
        });
    } else {
      this.miFormulario
        .get('fecha')
        ?.setValue(
          formatDate(this.miFormulario.get('fecha')?.value, 'yyyy-MM-dd', 'en')
        );
      this.ps.crearPartido(this.miFormulario.getRawValue()).subscribe((res) => {
        console.log(this.miFormulario.get('fecha')?.value);
        this.router.navigate(['/inicio/partidos']);
        console.log(res);
      });
    }
  }
}
