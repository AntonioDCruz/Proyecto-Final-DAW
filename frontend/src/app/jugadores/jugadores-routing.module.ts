import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InfoComponent } from './pages/info/info.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { CrearJugadorComponent } from './pages/crear-jugador/crear-jugador.component';
import { CrearEntrenadorComponent } from './pages/crear-entrenador/crear-entrenador.component';
import { VerUserComponent } from './pages/ver-user/ver-user.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { JugadorGuard } from '../guards/jugador.guard';
import { EntrenadorGuard } from '../guards/entrenador.guard';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path: '',
        component: InfoComponent,
      },
      {
        path: 'perfil',
        component: PerfilComponent,
      },
      {
        path: 'equipo',
        component: ListadoComponent,
      },
      {
        path: 'equipo/crearJugador',
        component: CrearJugadorComponent,
        canActivate: [JugadorGuard],
        canLoad: [JugadorGuard]

      },
      {
        path: 'equipo/crearEntrenador',
        component: CrearEntrenadorComponent,
        canActivate: [JugadorGuard, EntrenadorGuard],
        canLoad: [JugadorGuard, EntrenadorGuard]
      },
      {
        path: 'equipo/editarJugador/:id',
        component: CrearJugadorComponent,
        canActivate: [JugadorGuard],
        canLoad: [JugadorGuard]
      },
      {
        path: 'equipo/editarEntrenador/:id',
        component: CrearEntrenadorComponent,
        canActivate: [JugadorGuard, EntrenadorGuard],
        canLoad: [JugadorGuard, EntrenadorGuard]
      },
      {
        path: 'equipo/editarManager/:id',
        component: CrearEntrenadorComponent,
        canActivate: [JugadorGuard, EntrenadorGuard],
        canLoad: [JugadorGuard, EntrenadorGuard]
      },
      {
        path: 'equipo/verMas/:id',
        component: VerUserComponent,
        canActivate: [JugadorGuard],
        canLoad: [JugadorGuard]
      },
      {
        path: 'editarEquipo/:id',
        component: EquipoComponent,
        canActivate: [JugadorGuard, EntrenadorGuard],
        canLoad: [JugadorGuard, EntrenadorGuard]
      },
      {
        path:'partidos',
        loadChildren: () =>  import('../partidos/partidos.module').then(m => m.PartidosModule)
      },
      {
        path: 'entrenamientos',
        loadChildren: () => import('../entrenamientos/entrenamientos.module').then(m => m.EntrenamientosModule)
      },
      {
        path: 'eventos',
        loadChildren: () => import('../eventos/eventos.module').then(m =>  m.EventosModule)
      },
      {
        path: 'finanzas',
        loadChildren: () => import('../finanzas/finanzas.module').then(m =>  m.FinanzasModule),
        canActivate: [JugadorGuard, EntrenadorGuard],
        canLoad: [JugadorGuard, EntrenadorGuard]
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JugadoresRoutingModule {}
