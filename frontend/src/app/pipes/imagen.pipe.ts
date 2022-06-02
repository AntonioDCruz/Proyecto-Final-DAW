import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  transform(user: User): string {
    if (!user.image_user) {
      return 'assets/no-image.png';
    } else {
      return user.image_user;
    }
  }
}
