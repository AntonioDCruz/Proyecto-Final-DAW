import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Equipo } from '../../interfaces/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  baseUrl: string = environment.api;

  constructor(private http: HttpClient) { }

  getEquipo(id: any): Observable<Equipo>{
    return this.http.get<Equipo>(`${this.baseUrl}/equipos/${id}`);
  }

  actualizarEquipo(id: number, data: any){
    return this.http.put<Equipo>(`${this.baseUrl}/equipos/${id}`, data);
  }


}
