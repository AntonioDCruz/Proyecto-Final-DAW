import { Time } from '@angular/common';
export interface Entrenamiento {
  id: number;
  fecha: Date;
  hora: Time;
  descripcion: string;
}
