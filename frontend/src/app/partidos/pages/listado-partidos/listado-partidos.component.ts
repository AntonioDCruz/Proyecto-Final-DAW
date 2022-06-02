import { Component, OnInit } from '@angular/core';
import { User } from '../../../interfaces/user';
import { AuthService } from '../../../auth/auth.service';
import { PartidosService } from '../../services/partidos.service';
import { Partido } from '../../../interfaces/partido';
import { ConfirmationService, Message } from 'primeng/api';
import { switchMap, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-listado-partidos',
  templateUrl: './listado-partidos.component.html',
  styleUrls: ['./listado-partidos.component.css'],
  providers: [ConfirmationService],
})
export class ListadoPartidosComponent implements OnInit {
  msgs: Message[] = [];
  authUser!: User;
  aux:boolean = false;

  constructor(
    private as: AuthService,
    private ps: PartidosService,
    private confirmationService: ConfirmationService
  ) {}

  partidos: Partido[] = [];

  ngOnInit(): void {
    this.authUser = this.as.auth;
    /* this.ps.partidosUsuario().subscribe((res) => {
      this.aux = true;
      this.partidos = res;
    }); */

    this.ps.partidosUsuarioRival().subscribe(res => {
      this.aux = true
      this.partidos = res
    })

  }

  confirm2(partido: Partido) {
    this.confirmationService.confirm({
      message: `¿Estás seguro de eliminar este partido?`,
      header: 'Eliminar partido',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.ps
          .borrarPartido(partido.id)
          .pipe(
            tap( res => this.aux = false ),
            map(
              (res) =>
                (this.msgs = [
                  {
                    severity: 'info',
                    summary: 'Confirmado',
                    detail: `Partido eliminado`,
                  },
                ])
            )
          )
          .subscribe((res) => {
            this.ps.partidosUsuario().subscribe((partidos) => {
              this.aux = true;
              this.partidos = partidos;
            });
          });
      },
    });
  }
}
