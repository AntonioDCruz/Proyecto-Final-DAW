import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartidosRoutingModule } from './partidos-routing.module';
import { ListadoPartidosComponent } from './pages/listado-partidos/listado-partidos.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CrearPartidoComponent } from './pages/crear-partido/crear-partido.component';
import { CrearRivalComponent } from './pages/crear-rival/crear-rival.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { RivalComponent } from './components/rival/rival.component';
import { ListadoRivalesComponent } from './pages/listado-rivales/listado-rivales.component';

@NgModule({
  declarations: [ListadoPartidosComponent, CrearPartidoComponent, CrearRivalComponent, UploadImageComponent, RivalComponent, ListadoRivalesComponent],
  imports: [
    CommonModule,
    PartidosRoutingModule,
    PrimeNgModule,
  ],
})
export class PartidosModule {}
