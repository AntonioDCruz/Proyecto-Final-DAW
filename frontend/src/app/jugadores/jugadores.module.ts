import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { JugadoresRoutingModule } from './jugadores-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InfoComponent } from './pages/info/info.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { FormsModule } from '@angular/forms';
import { ListadoComponent } from './pages/listado/listado.component';
import { TarjetaUsuarioComponent } from './components/tarjeta-usuario/tarjeta-usuario.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { CrearJugadorComponent } from './pages/crear-jugador/crear-jugador.component';
import { CrearEntrenadorComponent } from './pages/crear-entrenador/crear-entrenador.component';
import { VerUserComponent } from './pages/ver-user/ver-user.component';
import { UploadComponent } from './components/upload/upload.component';
import { ImagenPipe } from '../pipes/imagen.pipe';
import { RolPipe } from '../pipes/rol.pipe';
import { PosicionPipe } from '../pipes/posicion.pipe';
import { ImagenEquipoPipe } from '../pipes/imagen-equipo.pipe';
import { EquipoComponent } from './pages/equipo/equipo.component';



@NgModule({
  declarations: [
    InicioComponent,
    InfoComponent,
    PerfilComponent,
    ListadoComponent,
    TarjetaUsuarioComponent,
    ConfirmarComponent,
    CrearJugadorComponent,
    CrearEntrenadorComponent,
    VerUserComponent,
    UploadComponent,
    ImagenPipe,
    RolPipe,
    PosicionPipe,
    ImagenEquipoPipe,
    EquipoComponent
  ],
  imports: [
    CommonModule,
    JugadoresRoutingModule,
    AngularMaterialModule,
    PrimeNgModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class JugadoresModule { }
