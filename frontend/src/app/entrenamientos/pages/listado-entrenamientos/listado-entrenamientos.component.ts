import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message } from 'primeng/api';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/interfaces/user';
import { EntrenamientoService } from '../../services/entrenamiento.service';
import { Entrenamiento } from '../../../interfaces/entrenamiento';
import { switchMap, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-listado-entrenamientos',
  templateUrl: './listado-entrenamientos.component.html',
  styleUrls: ['./listado-entrenamientos.component.css'],
  providers: [ConfirmationService]
})
export class ListadoEntrenamientosComponent implements OnInit {

  msgs: Message[] = [];
  authUser!: User;
  entrenamientos: Entrenamiento[] = [];
  aux: boolean = false

  constructor(
    private as: AuthService,
    private ens: EntrenamientoService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.authUser = this.as.auth;
    this.ens.entrenamientosUsuario().subscribe((res) => {
      this.aux = true
      this.entrenamientos = res;
    });
  }

  confirm2(entrenamiento: Entrenamiento) {
    this.confirmationService.confirm({
      message: `¿Estás seguro de eliminar este entrenamiento?`,
      header: 'Eliminar entrenamiento',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.ens
          .borrarEntrenamiento(entrenamiento.id)
          .pipe(
            tap( res => this.aux = false ),
            map(
              (res) =>
                (this.msgs = [
                  {
                    severity: 'info',
                    summary: 'Confirmado',
                    detail: `Entrenamiento eliminado`,
                  },
                ])
            )
          )
          .subscribe((res) => {
            this.ens.entrenamientosUsuario().subscribe((entrenamientos) => {
              this.aux = true;
              this.entrenamientos = entrenamientos;
            });
          });
      },
    });
  }

}
