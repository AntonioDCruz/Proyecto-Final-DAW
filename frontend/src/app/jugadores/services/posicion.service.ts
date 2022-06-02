import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Posicion } from 'src/app/interfaces/posicion';

@Injectable({
  providedIn: 'root'
})
export class PosicionService {

  baseUrl: string = environment.api;
  constructor( private http: HttpClient ) { }

  allPositions(): Observable<Posicion[]>{
    return this.http.get<Posicion[]>(`${this.baseUrl}/positions`);
  }
}
