import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entrenamiento } from '../../interfaces/entrenamiento';

@Injectable({
  providedIn: 'root'
})
export class EntrenamientoService {

  baseUrl: string = environment.api;

  constructor(private http: HttpClient) {}

  crearEntrenamiento(data: any): Observable<Entrenamiento> {
    return this.http.post<Entrenamiento>(`${this.baseUrl}/entrenamientos`, data);
  }

  entrenamientosUsuario(): Observable<Entrenamiento[]> {
    return this.http.get<Entrenamiento[]>(`${this.baseUrl}/userEntrenamientos`);
  }

  getEntrenamiento(id: number): Observable<Entrenamiento>{
    return this.http.get<Entrenamiento>(`${this.baseUrl}/entrenamientos/${id}`)
  }

  actualizarEntrenamiento(id: number, data: any){
    return this.http.put<Entrenamiento>(`${this.baseUrl}/entrenamientos/${id}`, data);
  }

  borrarEntrenamiento(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/entrenamientos/${id}`);
  }

}
