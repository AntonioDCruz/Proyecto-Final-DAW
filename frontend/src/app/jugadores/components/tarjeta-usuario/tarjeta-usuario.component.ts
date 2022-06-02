import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../../interfaces/user';
import { ConfirmarComponent } from '../confirmar/confirmar.component';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Jugador } from '../../../interfaces/jugador';

@Component({
  selector: 'app-tarjeta-usuario',
  templateUrl: './tarjeta-usuario.component.html',
  styleUrls: ['./tarjeta-usuario.component.css'],
})
export class TarjetaUsuarioComponent implements OnInit {
  @Output() emitUsers = new EventEmitter<User[]>();
  @Input() user!: User;
  @Input() authUser!: User;
  constructor(
    public dialog: MatDialog,
    private us: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    /* if (this.user.role_id === 3) {
      this.us.jugadorId(this.user.id).subscribe(res => this.jugador = res)
    } */
  }

  get deleteBtn() {
    if (this.user.role_id === 1) {
      return false;
    }
    return true;
  }

  mostrarBotones(): boolean {
    let bool = false;
    if (this.authUser.role_id === 1) {
      bool = true;
    } else if (this.authUser.role_id === 3) {
      bool = false;
    } else if (this.authUser.role_id === 2 && this.user.role_id === 2) {
      bool = false;
    }else if (this.authUser.role_id === 2 && this.user.role_id === 3) {
      bool = true;
    }
    return bool;
  }

  borrarUser() {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.user,
    });

    dialog.afterClosed().subscribe((res) => {
      if (res) {
        this.us.borrarUser(this.user.id).subscribe((res) => {
          this.us.equipo().subscribe((users) => {
            this.emitUsers.emit(users);
          });
        });
      }
    });
  }

  editarRoute(user: User): string {
    if (user.role_id !== 3) {
      return `./editarEntrenador/${user.id}`;
    } else {
      return `./editarJugador/${user.id}`;
    }
  }
}
