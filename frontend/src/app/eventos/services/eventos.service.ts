import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from 'src/app/interfaces/evento';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  baseUrl: string = environment.api;

  constructor(private http: HttpClient) {}

  crearEvento(data: any): Observable<Evento> {
    return this.http.post<Evento>(`${this.baseUrl}/eventos`, data);
  }

  eventosUsuario(): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.baseUrl}/userEventos`);
  }

  getEvento(id: number): Observable<Evento>{
    return this.http.get<Evento>(`${this.baseUrl}/eventos/${id}`)
  }

  actualizarEvento(id: number, data: any){
    return this.http.put<Evento>(`${this.baseUrl}/eventos/${id}`, data);
  }

  borrarEvento(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/eventos/${id}`);
  }

}
