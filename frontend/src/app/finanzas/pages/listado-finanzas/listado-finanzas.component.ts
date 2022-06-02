import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { ConfirmationService, Message } from 'primeng/api';
import { switchMap, map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/interfaces/user';
import { Finanza } from '../../../interfaces/finanza';
import { FinanzasService } from '../../services/finanzas.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-listado-finanzas',
  templateUrl: './listado-finanzas.component.html',
  styleUrls: ['./listado-finanzas.component.css'],
  providers: [ConfirmationService],
})
export class ListadoFinanzasComponent implements OnInit {
  msgs: Message[] = [];
  authUser!: User;
  finanzas: Finanza[] = [];
  public doughnutChartLabels: string[] = ['Gastos', 'Salarios', 'Ingresos'];

  gastos: number = 0;
  ingresos: number = 0;
  salarios: number = 0;
  data: number[] = [];
  aux: boolean = false

  constructor(
    private as: AuthService,
    private fs: FinanzasService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.authUser = this.as.auth;
    this.fs
      .salarioEquipo()
      .pipe(
        map((users) => users.forEach((user) => (this.salarios += user.salario)))
      ).subscribe(res => {
        this.fs.finanzasUsuario().subscribe((res) => {
          this.aux = true
          this.finanzas = res;
          this.finanzas.forEach((finanza) => {
            finanza.tipo === 'gasto'
              ? (this.gastos = +finanza.cantidad)
              : (this.ingresos = +finanza.cantidad);
          });
          this.doughnutChartData.datasets[0].data.push(
            this.gastos,
            this.salarios,
            this.ingresos
          );
          console.log(this.doughnutChartData.datasets[0].data);

          this.doughnutChartData.datasets[0].backgroundColor = [
            '#FE4A24',
            '#FE7F00',
            '#17FE00',
          ];
        });
      });

  }

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [] }],
  };

  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  confirm2(finanza: Finanza) {
    this.confirmationService.confirm({
      message: `¿Estás seguro de eliminar este ${finanza.tipo}?`,
      header: 'Eliminar finanza',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.fs
          .borrarFinanza(finanza.id)
          .pipe(
            tap( res => this.aux = false ),
            map(
              (res) =>
                (this.msgs = [
                  {
                    severity: 'info',
                    summary: 'Confirmado',
                    detail: `${finanza.tipo} eliminado`,
                  },
                ])
            )
          )
          .subscribe((res) => {
            this.doughnutChartData.datasets = [{ data: [] }];
            this.gastos = 0;
            this.ingresos = 0;
            this.salarios = 0;
            this.fs
            .salarioEquipo()
            .pipe(
              map((users) => users.forEach((user) => (this.salarios += user.salario)))
            ).subscribe(res => {
              this.fs.finanzasUsuario().subscribe((res) => {
                this.aux = true
                this.finanzas = res;
                console.log(this.finanzas);
                this.finanzas.forEach((finanza) => {
                  finanza.tipo === 'gasto'
                    ? (this.gastos = +finanza.cantidad)
                    : (this.ingresos = +finanza.cantidad);
                });
                this.doughnutChartData.datasets[0].data.push(
                  this.gastos,
                  this.salarios,
                  this.ingresos
                );
                console.log(this.doughnutChartData.datasets[0].data);

                this.doughnutChartData.datasets[0].backgroundColor = [
                  '#FE4A24',
                  '#FE7F00',
                  '#17FE00',
                ];
              });
            });
          });
      },
    });
  }
}
