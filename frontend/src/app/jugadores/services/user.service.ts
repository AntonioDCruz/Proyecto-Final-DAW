import { User } from './../../interfaces/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Jugador } from '../../interfaces/jugador';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = environment.api;
  constructor( private http: HttpClient ) { }

  updateInfo(data: any): Observable<User>{
    return this.http.put<User>(`${this.baseUrl}/users/info`, data);
  }

  updatePassword(data: any): Observable<User>{
    return this.http.put<User>(`${this.baseUrl}/users/password`, data);
  }

  userId(id: number): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/users/${id}`);
  }

  jugadorId(id: number): Observable<Jugador>{
    return this.http.get<Jugador>(`${this.baseUrl}/jugadorUser/${id}`);
  }

  equipo(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/usersTeam`);
  }

  borrarUser(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/users/${id}`);
  }

  crearEntrenador(data: any): Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/users`, data);
  }

  crearJugador(data: any): Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/jugadores`, data);
  }

  actualizarJugador(id: number, data: any){
    return this.http.put<User>(`${this.baseUrl}/jugadores/${id}`, data);
  }

  actualizarEntrenador(id: number, data: any){
    return this.http.put<User>(`${this.baseUrl}/users/${id}`, data);
  }
}
