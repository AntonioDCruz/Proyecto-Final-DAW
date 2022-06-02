import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import {  map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = environment.api;
  private _auth: User | undefined;

  get auth(): User{
    return {...this._auth!}
  }

  constructor(private http: HttpClient,
              private router: Router) { }

  login(data: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`,  data);
  }

  register(data: FormData): Observable<User>{
    return  this.http.post<User>(`${this.baseUrl}/register`, data);
  }

  user(): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/user`);
  }

  logout(): Observable<void>{
    return this.http.post<void>(`${this.baseUrl}/logout`,{});
  }

  authUser(): Observable<boolean>{

    return this.http.get<User>(`${this.baseUrl}/user`)
    .pipe(
      tap({
        error: error => {
          console.log('on error', error.message);
          this.router.navigate(['./auth/login']);
        }
      })
    )
    .pipe(
      map( auth => {
        this._auth = auth;
        console.log(this._auth);
        if (this._auth) {
          return (true);
        }else{
          return (false)
        }
      })
    )
  }

}
