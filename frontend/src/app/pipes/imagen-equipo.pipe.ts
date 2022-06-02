import { Pipe, PipeTransform } from '@angular/core';
import { Equipo } from '../interfaces/equipo';

@Pipe({
  name: 'imagenEquipo'
})
export class ImagenEquipoPipe implements PipeTransform {

  transform(equipo: Equipo): string {
    if (!equipo.image) {
      return 'assets/escudo-ejemplo.jpg';
    } else {
      return equipo.image;
    }
  }
}
