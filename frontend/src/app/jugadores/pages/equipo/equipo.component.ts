import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { EquipoService } from '../../services/equipo.service';
import { Equipo } from '../../../interfaces/equipo';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    liga: ['', [Validators.required]],
    image: [''],
  });

  aux: boolean = false;
  equipo: Equipo | undefined = undefined;


  constructor(
    private fb: FormBuilder,
    private es: EquipoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (!this.router.url.includes('editarEquipo')) {
      this.aux = true
      return
    }
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.es.getEquipo(id)))
      .subscribe((equipo) => {
        this.aux = true
        this.equipo = equipo;
        this.miFormulario.reset({
          nombre: this.equipo.nombre,
          liga: this.equipo.liga,
          image: this.equipo.image
        });
        console.log(this.miFormulario.getRawValue());
      });
  }

  get nombreMsg(){
    const errors = this.miFormulario.get('nombre')?.errors;
    if (errors?.['required']) {
      return 'Introduce el nombre del equipo';
    }
    return '';
  }

  get ligaMsg(){
    const errors = this.miFormulario.get('liga')?.errors;
    if (errors?.['required']) {
      return 'Introduce el nombre de la liga';
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

    if (this.equipo?.id) {
      this.es
        .actualizarEquipo(this.equipo.id, this.miFormulario.getRawValue())
        .subscribe((partido) => {
          console.log(partido);
          this.router.navigate(['/inicio']);
        });
    }
  }

}
