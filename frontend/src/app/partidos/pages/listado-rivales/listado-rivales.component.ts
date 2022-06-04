import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { RivalService } from '../../services/rival.service';
import { Rival } from '../../../interfaces/rival';
import { AuthService } from '../../../auth/auth.service';
import { ConfirmationService, Message } from 'primeng/api';
import { switchMap, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-listado-rivales',
  templateUrl: './listado-rivales.component.html',
  styleUrls: ['./listado-rivales.component.css'],
  providers: [ConfirmationService],
})
export class ListadoRivalesComponent implements OnInit {
  authUser!: User;
  msgs: Message[] = []
  aux: boolean = false

  constructor(
    private rs: RivalService,
    private as: AuthService,
    private confirmationService: ConfirmationService,
  ) {}

  rivales: Rival[] = [];

  ngOnInit(): void {
    this.authUser = this.as.auth;
    this.rs.rivalesEquipo().subscribe((res) => {
      this.aux = true;
      this.rivales = res
    });
  }

  confirm2(rival: Rival) {
    this.confirmationService.confirm({
      message: `¿Estás seguro de eliminar a ${rival.nombre}? Se eliminarán todos los partidos`,
      header: 'Eliminar Rival',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.rs.borrarRival(rival.id)
        .pipe(
          tap( res => this.aux = false ),
          map(
            (res) =>
              (this.msgs = [
                {
                  severity: 'info',
                  summary: 'Confirmado',
                  detail: `${rival.nombre} eliminado`
                }
              ])
          )
        )
        .subscribe((res) => {
          this.rs.rivalesEquipo().subscribe((rivales) => {
            this.aux = true;
            this.rivales = rivales
          })
        })
      },
    })
  }
}
