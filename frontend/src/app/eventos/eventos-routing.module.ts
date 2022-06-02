import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoEventosComponent } from './pages/listado-eventos/listado-eventos.component';
import { CrearEventoComponent } from './pages/crear-evento/crear-evento.component';
import { JugadorGuard } from '../guards/jugador.guard';
import { EntrenadorGuard } from '../guards/entrenador.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListadoEventosComponent,
      },
      {
        path: 'crearEvento',
        component: CrearEventoComponent,
        canActivate: [JugadorGuard, EntrenadorGuard],
        canLoad: [JugadorGuard, EntrenadorGuard]
      },
      {
        path:'editarEvento/:id',
        component: CrearEventoComponent,
        canActivate: [JugadorGuard, EntrenadorGuard],
        canLoad: [JugadorGuard, EntrenadorGuard]
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosRoutingModule {}
