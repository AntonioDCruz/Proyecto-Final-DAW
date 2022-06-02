import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { Rival } from '../../interfaces/rival';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Partido } from '../../interfaces/partido';
import { RivalService } from './rival.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PartidosService {
  baseUrl: string = environment.api;

  constructor(private http: HttpClient, private rs: RivalService) {}

  partidosUsuarioRival(): Observable<Partido[]> {
    return combineLatest([
      this.rs.rivalesEquipo(),
      this.partidosUsuario(),
    ]).pipe(
      map(([rivales, partidos]) => {
        return partidos.map(
          (partido) =>
            ({
              ...partido,
              rival_nombre: rivales.find(
                (rival) => partido.rival_id === rival.id
              )?.nombre,
              rival_img: rivales.find((rival) => partido.rival_id === rival.id)
                ?.image,
            } as Partido)
        );
      })
    );
  }

  crearPartido(data: any): Observable<Partido> {
    return this.http.post<Partido>(`${this.baseUrl}/partidos`, data);
  }

  partidosUsuario(): Observable<Partido[]> {
    return this.http.get<Partido[]>(`${this.baseUrl}/userGames`);
  }

  getPartido(id: number): Observable<Partido> {
    return this.http.get<Partido>(`${this.baseUrl}/partidos/${id}`);
  }

  actualizarPartido(id: number, data: any) {
    return this.http.put<Partido>(`${this.baseUrl}/partidos/${id}`, data);
  }

  borrarPartido(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/partidos/${id}`);
  }
}
