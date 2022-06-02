import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPartidosComponent } from './pages/listado-partidos/listado-partidos.component';
import { CrearPartidoComponent } from './pages/crear-partido/crear-partido.component';
import { CrearRivalComponent } from './pages/crear-rival/crear-rival.component';
import { ListadoRivalesComponent } from './pages/listado-rivales/listado-rivales.component';
import { JugadorGuard } from '../guards/jugador.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListadoPartidosComponent
      },
      {
        path: 'crearPartido',
        component: CrearPartidoComponent,
        canActivate: [JugadorGuard],
        canLoad: [JugadorGuard]
      },
      {
        path:'editarPartido/:id',
        component: CrearPartidoComponent,
        canActivate: [JugadorGuard],
        canLoad: [JugadorGuard]
      },
      {
        path: 'listadoRivales',
        component: ListadoRivalesComponent,
        canActivate: [JugadorGuard],
        canLoad: [JugadorGuard]
      },
      {
        path: 'crearRival',
        component: CrearRivalComponent,
        canActivate: [JugadorGuard],
        canLoad: [JugadorGuard]
      },
      {
        path:'editarRival/:id',
        component: CrearRivalComponent,
        canActivate: [JugadorGuard],
        canLoad: [JugadorGuard]
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidosRoutingModule { }
