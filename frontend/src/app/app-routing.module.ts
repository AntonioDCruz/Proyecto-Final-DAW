import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroPageComponent } from './shared/erro-page/erro-page.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import ('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'inicio',
    loadChildren: () => import ('./jugadores/jugadores.module').then( m => m.JugadoresModule ),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: '404',
    component: ErroPageComponent
  },
  {
    path: '**',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
