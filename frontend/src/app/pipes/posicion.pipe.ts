import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'posicion'
})
export class PosicionPipe implements PipeTransform {

  transform(posicion: number): string {
    if (posicion === 5) {
      return 'Pivot'
    }
    else if (posicion === 4) {
      return 'Ala-Pivot'
    }
    else if (posicion === 3) {
      return 'Alero';
    }
    else if(posicion === 2){
      return 'Escolta';
    }
    else {
      return 'Base';
    }
  }

}
