import { Component, OnInit } from '@angular/core';
import { User } from '../../../interfaces/user';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../../auth/auth.service';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  authUser!: User;
  users: User[] = [];
  aux: boolean = false;

  constructor(private us: UserService, private as: AuthService) {}

  ngOnInit(): void {
    this.us.equipo()
    .pipe(
      map(res => {
        res.forEach( user => {
          if (user.role_id === 3) {
            this.us.jugadorId(user.id).subscribe(jugador => {
              user.id_jugador = jugador.id
              user.estado = jugador.estado
              user.nacionalidad = jugador.nacionalidad
              user.position_id = jugador.position_id
              user.fec_nac = jugador.fec_nac
              user.created_at = jugador.created_at
              user.numero = jugador.numero
            })
          }
        })
        res.sort((a,b)=>a.role_id - b.role_id);
        return res
      }),
    )
    .subscribe((users) => {
      this.aux = true;
      this.users = users;
    });
    this.authUser = this.as.auth;
  }

  recargarUsers(users: User[]) {
    this.users = users;
  }
}
