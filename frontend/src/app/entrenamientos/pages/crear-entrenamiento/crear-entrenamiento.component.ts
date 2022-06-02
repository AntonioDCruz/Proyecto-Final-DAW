import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EntrenamientoService } from '../../services/entrenamiento.service';
import { Entrenamiento } from '../../../interfaces/entrenamiento';
import { switchMap } from 'rxjs/operators';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-crear-entrenamiento',
  templateUrl: './crear-entrenamiento.component.html',
  styleUrls: ['./crear-entrenamiento.component.css']
})
export class CrearEntrenamientoComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    fecha: ['', [Validators.required]],
    hora: ['', [Validators.required]],
    descripcion: ['', [Validators.required]]
  });

  entrenamiento: Entrenamiento | undefined = undefined;
  aux: boolean = false

  constructor(
    private ens: EntrenamientoService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (!this.router.url.includes('editarEntrenamiento')) {
      this.aux = true
      return
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.ens.getEntrenamiento(id)))
      .subscribe((entrenamiento) => {
        this.aux = true
        this.entrenamiento = entrenamiento;
        this.miFormulario.reset({
          fecha: new Date(this.entrenamiento.fecha),
          hora: this.entrenamiento.hora,
          descripcion: this.entrenamiento.descripcion
        });
        console.log(this.miFormulario.getRawValue());

      });
  }

  get fechaMsg(){
    const errors = this.miFormulario.get('fecha')?.errors;
    if (errors?.['required']) {
      return 'Seleccione el día del partido';
    }
    return '';
  }

  get horaMsg(){
    const errors = this.miFormulario.get('hora')?.errors;
    if (errors?.['required']) {
      return 'Seleccione la hora del partido';
    }
    return '';
  }


  get descMsg(){
    const errors = this.miFormulario.get('descripcion')?.errors;
    if (errors?.['required']) {
      return 'Rellene la descripción del entrenamiento';
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

    if (this.entrenamiento?.id) {
      this.miFormulario
        .get('fecha')
        ?.setValue(
          formatDate(this.miFormulario.get('fecha')?.value, 'yyyy-MM-dd', 'en')
        );
      this.ens
        .actualizarEntrenamiento(this.entrenamiento.id, this.miFormulario.getRawValue())
        .subscribe((partido) => {
          console.log(partido);
          this.router.navigate(['/inicio/entrenamientos']);
        });
    } else {
      this.miFormulario
        .get('fecha')
        ?.setValue(
          formatDate(this.miFormulario.get('fecha')?.value, 'yyyy-MM-dd', 'en')
        );
      this.ens.crearEntrenamiento(this.miFormulario.getRawValue()).subscribe((res) => {
        console.log(this.miFormulario.get('fecha')?.value);
        this.router.navigate(['/inicio/entrenamientos']);
        console.log(res);
      });
    }
  }

}
