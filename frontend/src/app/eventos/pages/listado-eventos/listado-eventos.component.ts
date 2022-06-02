import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message } from 'primeng/api';
import { switchMap, map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/interfaces/user';
import { Evento } from '../../../interfaces/evento';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-listado-eventos',
  templateUrl: './listado-eventos.component.html',
  styleUrls: ['./listado-eventos.component.css'],
  providers: [ConfirmationService]
})
export class ListadoEventosComponent implements OnInit {

  msgs: Message[] = [];
  authUser!: User;
  eventos: Evento[] = [];
  aux: boolean = false

  constructor(
    private as: AuthService,
    private evs: EventosService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.authUser = this.as.auth;
    this.evs.eventosUsuario().subscribe((res) => {
      this.aux = true
      this.eventos = res;
    });
  }

  confirm2(evento: Evento) {
    this.confirmationService.confirm({
      message: `¿Estás seguro de eliminar este evento?`,
      header: 'Eliminar evento',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.evs
          .borrarEvento(evento.id)
          .pipe(
            tap( res => this.aux = false ),
            map(
              (res) =>
                (this.msgs = [
                  {
                    severity: 'info',
                    summary: 'Confirmado',
                    detail: `Evento eliminado`,
                  },
                ])
            )
          )
          .subscribe((res) => {
            this.evs.eventosUsuario().subscribe((eventos) => {
              this.aux = true;
              this.eventos = eventos;
            });
          });
      },
    });
  }

}
