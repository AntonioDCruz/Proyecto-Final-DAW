import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Rival } from 'src/app/interfaces/rival';
import { RivalService } from '../../services/rival.service';

@Component({
  selector: 'app-crear-rival',
  templateUrl: './crear-rival.component.html',
  styleUrls: ['./crear-rival.component.css'],
})
export class CrearRivalComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern('[a-zA-ZÀ-ÖØ-öø-ÿ]+.?(( |-)[a-zA-ZÀ-ÖØ-öø-ÿ]+.?)*')]],
    image: [''],
  });

  rival: Rival | undefined = undefined;
  aux: boolean = false

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private rs: RivalService
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('editarRival')) {
      this.aux = true
      return;
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.rs.getRival(id)))
      .subscribe((rival) => {
        this.aux = true
        this.rival = rival;
        this.miFormulario.reset({
          image: this.rival.image,
          nombre: this.rival.nombre,
        });
      });
  }

  get nombreMsg(){
    const errors = this.miFormulario.get('nombre')?.errors;
    if (errors?.['required']) {
      return 'Introduce un nombre';
    } else if (errors?.['pattern']) {
      return 'Introduce un nombre válido';
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

    if (this.rival?.id) {
      this.rs
        .actualizarRival(this.rival.id, this.miFormulario.getRawValue())
        .subscribe((rival) => {
          console.log(rival);
          this.router.navigate(['/inicio/partidos/listadoRivales']);
        });
    } else {
      this.rs.crearRival(this.miFormulario.getRawValue()).subscribe((res) => {
        console.log(res);
        this.router.navigate(['/inicio/partidos/listadoRivales']);
      });
    }
  }
}
