import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FullCalendarModule } from 'primeng/fullcalendar';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {InputNumberModule} from 'primeng/inputnumber';
import {DialogModule} from 'primeng/dialog';
import { TableModule } from "primeng/table";
import {CalendarModule} from 'primeng/calendar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages'
import {MessageModule} from 'primeng/message';
import { ReactiveFormsModule } from '@angular/forms';
import {InputTextareaModule} from 'primeng/inputtextarea';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    DialogModule,
    InputTextareaModule,
    FullCalendarModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CalendarModule,
    InputNumberModule,
    TableModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    ReactiveFormsModule
  ]
})
export class PrimeNgModule { }
