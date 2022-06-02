import { Time } from '@angular/common';
export interface Evento {
  id: number;
  fecha: Date;
  hora: Time;
  descripcion: string;
  titulo: string;
}
