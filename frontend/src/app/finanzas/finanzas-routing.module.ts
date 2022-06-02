import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoFinanzasComponent } from './pages/listado-finanzas/listado-finanzas.component';
import { CrearFinanzaComponent } from './pages/crear-finanza/crear-finanza.component';
import { JugadorGuard } from '../guards/jugador.guard';
import { EntrenadorGuard } from '../guards/entrenador.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListadoFinanzasComponent,
      },
      {
        path: 'crearFinanza',
        component: CrearFinanzaComponent,
        canActivate: [JugadorGuard, EntrenadorGuard],
        canLoad: [JugadorGuard, EntrenadorGuard]
      },
      {
        path:'editarFinanza/:id',
        component: CrearFinanzaComponent,
        canActivate: [JugadorGuard, EntrenadorGuard],
        canLoad: [JugadorGuard, EntrenadorGuard]
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanzasRoutingModule { }
