import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Evento } from '../../../interfaces/evento';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    fecha: ['', [Validators.required]],
    hora: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    titulo: ['', [Validators.required]],
  });

  evento: Evento | undefined = undefined;
  aux: boolean = false

  constructor(
    private evs: EventosService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (!this.router.url.includes('editarEvento')) {
      this.aux = true
      return
    }
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.evs.getEvento(id)))
      .subscribe((evento) => {
        this.aux = true
        this.evento = evento;
        this.miFormulario.reset({
          fecha: new Date(this.evento.fecha),
          hora: this.evento.hora,
          descripcion: this.evento.descripcion,
          titulo: this.evento.titulo
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

  get tituloMsg(){
    const errors = this.miFormulario.get('titulo')?.errors;
    if (errors?.['required']) {
      return 'Introduce el titulo del Evento';
    }
    return '';
  }

  get descMsg(){
    const errors = this.miFormulario.get('descripcion')?.errors;
    if (errors?.['required']) {
      return 'Rellene la descripción del evento';
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

    if (this.evento?.id) {
      this.miFormulario
        .get('fecha')
        ?.setValue(
          formatDate(this.miFormulario.get('fecha')?.value, 'yyyy-MM-dd', 'en')
        );
      this.evs
        .actualizarEvento(this.evento.id, this.miFormulario.getRawValue())
        .subscribe((partido) => {
          console.log(partido);
          this.router.navigate(['/inicio/eventos']);
        });
    } else {
      this.miFormulario
        .get('fecha')
        ?.setValue(
          formatDate(this.miFormulario.get('fecha')?.value, 'yyyy-MM-dd', 'en')
        );
      this.evs.crearEvento(this.miFormulario.getRawValue()).subscribe((res) => {
        console.log(this.miFormulario.get('fecha')?.value);
        this.router.navigate(['/inicio/eventos']);
        console.log(res);
      });
    }
  }

}
