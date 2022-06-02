import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Finanza } from '../../interfaces/finanza';
import { UserService } from '../../jugadores/services/user.service';
import { map } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class FinanzasService {
  baseUrl: string = environment.api;

  constructor(private http: HttpClient, private us: UserService) {}

  crearFinanza(data: any): Observable<Finanza> {
    return this.http.post<Finanza>(`${this.baseUrl}/finanzas`, data);
  }

  finanzasUsuario(): Observable<Finanza[]> {
    return this.http.get<Finanza[]>(`${this.baseUrl}/userFinanzas`);
  }

  getFinanza(id: number): Observable<Finanza> {
    return this.http.get<Finanza>(`${this.baseUrl}/finanzas/${id}`);
  }

  actualizarFinanza(id: number, data: any) {
    return this.http.put<Finanza>(`${this.baseUrl}/finanzas/${id}`, data);
  }

  borrarFinanza(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/finanzas/${id}`);
  }

  salarioEquipo(): Observable<User[]> {
    return this.us.equipo()
  }
}
