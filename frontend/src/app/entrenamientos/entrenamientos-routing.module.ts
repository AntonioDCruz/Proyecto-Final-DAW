import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoEntrenamientosComponent } from './pages/listado-entrenamientos/listado-entrenamientos.component';
import { CrearEntrenamientoComponent } from './pages/crear-entrenamiento/crear-entrenamiento.component';
import { JugadorGuard } from '../guards/jugador.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListadoEntrenamientosComponent,
      },
      {
        path: 'crearEntrenamiento',
        component: CrearEntrenamientoComponent,
        canActivate: [JugadorGuard],
        canLoad: [JugadorGuard]
      },
      {
        path:'editarEntrenamiento/:id',
        component: CrearEntrenamientoComponent,
        canActivate: [JugadorGuard],
        canLoad: [JugadorGuard]
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
export class EntrenamientosRoutingModule {}
