import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rol'
})
export class RolPipe implements PipeTransform {

  transform(rol: number): string {
    if (rol === 3) {
      return 'Jugador';
    }
    else if(rol === 2){
      return 'Entrenador';
    }
    else {
      return 'Manager';
    }
  }

}
