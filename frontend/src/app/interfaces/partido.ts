import { Time } from "@angular/common";

export interface Partido {
  id: number;
  fecha: Date;
  campo: string;
  hora: Time;
  rival_id: number;
  puntos_equipo: number;
  puntos_rival: number;
  rival_nombre?: string;
  rival_img?: string;
}
