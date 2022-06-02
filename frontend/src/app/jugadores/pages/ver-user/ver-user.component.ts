import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { UserService } from '../../services/user.service';
import { Jugador } from '../../../interfaces/jugador';
import { User } from 'src/app/interfaces/user';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ver-user',
  templateUrl: './ver-user.component.html',
  styleUrls: ['./ver-user.component.css'],
})
export class VerUserComponent implements OnInit {
  user!: User;
  jugador!: Jugador | null;
  aux: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private us: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    /* this.activatedRoute.params.subscribe( params => console.log(params["id"])) */
    /* this.activatedRoute.params.subscribe( ({id}) => console.log(id)) */
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.us.userId(id)),
        map((user) => {
          if (user.role_id === 3) {
            this.us.jugadorId(user.id).subscribe((jugador) => {
              user.id_jugador = jugador.id;
              user.estado = jugador.estado;
              user.nacionalidad = jugador.nacionalidad;
              user.position_id = jugador.position_id;
              user.fec_nac = jugador.fec_nac;
              user.created_at = jugador.created_at;
              user.numero = jugador.numero;
            });
          }
          return user;
        })
      )
      .subscribe((jugador) => {
        this.aux = true;
        this.user = jugador;
      });
  }

  regresar() {
    this.router.navigate(['/inicio/equipo']);
  }
}
