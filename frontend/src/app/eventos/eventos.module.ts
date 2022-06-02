import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { ListadoEventosComponent } from './pages/listado-eventos/listado-eventos.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CrearEventoComponent } from './pages/crear-evento/crear-evento.component';


@NgModule({
  declarations: [
    ListadoEventosComponent,
    CrearEventoComponent
  ],
  imports: [
    CommonModule,
    EventosRoutingModule,
    PrimeNgModule,
  ]
})
export class EventosModule { }
