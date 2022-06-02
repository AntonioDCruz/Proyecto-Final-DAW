import { ListadoEntrenamientosComponent } from './pages/listado-entrenamientos/listado-entrenamientos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrenamientosRoutingModule } from './entrenamientos-routing.module';
import { PrimeNgModule } from './../prime-ng/prime-ng.module';
import { CrearEntrenamientoComponent } from './pages/crear-entrenamiento/crear-entrenamiento.component';


@NgModule({
  declarations: [ListadoEntrenamientosComponent, CrearEntrenamientoComponent],
  imports: [
    CommonModule,
    EntrenamientosRoutingModule,
    PrimeNgModule
  ],
})
export class EntrenamientosModule { }
