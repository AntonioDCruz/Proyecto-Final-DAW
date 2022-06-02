import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class JugadorGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ){

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authService.auth.role_id === 3){
        this.router.navigate(['/inicio']);
        return false;
      }else{
        return true;
      }
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authService.auth.role_id === 3){
        this.router.navigate(['/inicio']);
        return false;
      }else{
        return true;
      }
  }
}
