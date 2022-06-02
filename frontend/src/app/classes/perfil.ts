import { EventEmitter } from "@angular/core";
import { User } from '../interfaces/user';

export class Perfil {
  static userEmiter = new EventEmitter<User>();
}
