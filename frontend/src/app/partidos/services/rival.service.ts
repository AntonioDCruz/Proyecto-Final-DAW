import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rival } from 'src/app/interfaces/rival';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RivalService {
  baseUrl: string = environment.api;

  constructor(private http: HttpClient) { }

  crearRival(data: any): Observable<Rival>{
    return this.http.post<Rival>(`${this.baseUrl}/rivals`, data);
  }

  rivalesEquipo(): Observable<Rival[]>{
    return this.http.get<Rival[]>(`${this.baseUrl}/rivalesEquipo`);
  }

  getRival(id: number): Observable<Rival>{
    return this.http.get<Rival>(`${this.baseUrl}/rivals/${id}`)
  }

  actualizarRival(id: number, data: any){
    return this.http.put<Rival>(`${this.baseUrl}/rivals/${id}`, data);
  }

  borrarRival(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/rivals/${id}`);
  }
}
