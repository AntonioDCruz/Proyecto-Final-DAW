import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Finanza } from '../../../interfaces/finanza';
import { FinanzasService } from '../../services/finanzas.service';

@Component({
  selector: 'app-crear-finanza',
  templateUrl: './crear-finanza.component.html',
  styleUrls: ['./crear-finanza.component.css']
})
export class CrearFinanzaComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    tipo: ['', [Validators.required]],
    cantidad: ['', [Validators.required]],
    concepto: ['',[Validators.required]],
  });

  finanza: Finanza | undefined = undefined;
  aux: boolean = false

  constructor(
    private fs: FinanzasService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (!this.router.url.includes('editarFinanza')) {
      this.aux = true
      return
    }
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.fs.getFinanza(id)))
      .subscribe((finanza) => {
        this.aux = true
        this.finanza = finanza;
        this.miFormulario.reset({
          tipo: this.finanza.tipo,
          cantidad: this.finanza.cantidad,
          concepto: this.finanza.concepto
        });
        console.log(this.miFormulario.getRawValue());
      });
  }

  get tipoMsg(){
    const errors = this.miFormulario.get('tipo')?.errors;
    if (errors?.['required']) {
      return 'Seleccione el tipo de finanza';
    }
    return '';
  }

  get cantidadMsg(){
    const errors = this.miFormulario.get('cantidad')?.errors;
    if (errors?.['required']) {
      return 'Introduce una cantidad';
    }
    return '';
  }

  get conceptoMsg(){
    const errors = this.miFormulario.get('concepto')?.errors;
    if (errors?.['required']) {
      return 'Rellene el concepto de la finanza';
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

    if (this.finanza?.id) {
      this.fs
        .actualizarFinanza(this.finanza.id, this.miFormulario.getRawValue())
        .subscribe((partido) => {
          console.log(partido);
          this.router.navigate(['/inicio/finanzas']);
        });
    } else {
      this.fs.crearFinanza(this.miFormulario.getRawValue()).subscribe((res) => {
        this.router.navigate(['/inicio/finanzas']);
        console.log(res);
      });
    }
  }


}
