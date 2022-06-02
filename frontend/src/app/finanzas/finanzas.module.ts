import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanzasRoutingModule } from './finanzas-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ListadoFinanzasComponent } from './pages/listado-finanzas/listado-finanzas.component';
import { CrearFinanzaComponent } from './pages/crear-finanza/crear-finanza.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    ListadoFinanzasComponent,
    CrearFinanzaComponent
  ],
  imports: [
    CommonModule,
    FinanzasRoutingModule,
    NgChartsModule,
    PrimeNgModule
  ]
})
export class FinanzasModule { }
