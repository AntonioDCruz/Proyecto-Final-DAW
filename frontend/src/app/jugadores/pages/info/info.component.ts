import { Component, Input, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { AuthService } from '../../../auth/auth.service';
import { PartidosService } from '../../../partidos/services/partidos.service';
import { EntrenamientoService } from '../../../entrenamientos/services/entrenamiento.service';
import { EventosService } from '../../../eventos/services/eventos.service';
import { switchMap, map } from 'rxjs/operators';
import { Jugador } from '../../../interfaces/jugador';
import { UserService } from '../../services/user.service';
import { Equipo } from '../../../interfaces/equipo';
import { EquipoService } from '../../services/equipo.service';
const newLocal = '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  aux: boolean = false;
  user!: User;
  jugador: Jugador | undefined = undefined;
  public events: any[] = [];
  public options!: any;
  equipo: Equipo | undefined = undefined;
  display: boolean = false;
  header: string = '';
  content: string = '';

  constructor(
    private as: AuthService,
    private ps: PartidosService,
    private us: UserService,
    private eq: EquipoService,
    private ev: EventosService,
    private et: EntrenamientoService
  ) {}

  ngOnInit(): void {
    this.user = this.as.auth;
    this.eq.getEquipo(this.user.equipo_id).subscribe(res => this.equipo = res)
    if (this.user.role_id === 3) {
      this.us.jugadorId(this.user.id).subscribe(res => this.jugador = res)
    }
    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: new Date(),
      locale: 'es',
      header: {
        /* left: 'prev,next',
        center: 'title',
        right: 'today,prevYear,prev,next,nextYear' */
        left: 'title',
        right: 'today,prev,next',
      },
      editable: false,
      handleWindowResize: true,
      windowResizeDelay: 100,
      eventClick: this.verInfoEvento.bind(this)
    };

    //Poner metodo bueno
    this.ps.partidosUsuarioRival()
    .pipe(
      switchMap(res => {
        res.forEach((game) => {
          let partido = {
            title: `Partido vs ${game.rival_nombre}`,
            start: new Date(game.fecha.toString() + ' ' + game.hora.toString()),
            description: `Partido contra ${game.rival_nombre} el dia ${new Date(game.fecha).toLocaleString('es').substring(0,8)} a las ${String(game.hora).substring(0, 5)}` ,
          };

          this.events.push(partido);
        });
        return this.et.entrenamientosUsuario()
      }),
      switchMap(res => {
        res.forEach((entreno) => {
          let partido = {
            title: 'Entrenamiento',
            start: new Date(entreno.fecha.toString() + ' ' + entreno.hora.toString()),
            description: entreno.descripcion,
          };

          this.events.push(partido);
        });
        return this.ev.eventosUsuario()
      }),
      map(res => {
        res.forEach((evento) => {
          let partido = {
            title: 'Evento',
            start: new Date(evento.fecha.toString() + ' ' + evento.hora.toString()),
            description: evento.descripcion,
          };

          this.events.push(partido);
        });
      })
    ).subscribe(res => this.aux = true)
    console.log(this.events);
  }

  verInfoEvento(info: any){
    if (this.display) {
      this.closeDialog();
    }
    console.log(info);

    this.header = info.event.title;
    this.content = info.event.extendedProps.description;
    console.log(this.content);

    this.showDialog();
    info.el.style.borderColor = 'red';
  }


  showDialog() {
    this.display = true;
  }

  closeDialog() {
    this.display = false;
  }
}
