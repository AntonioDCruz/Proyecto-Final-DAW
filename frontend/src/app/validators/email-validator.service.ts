import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, tap, of } from 'rxjs';
import { map } from 'rxjs/operators';

interface Email{
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator{

  constructor( private http: HttpClient ) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value
    let emails: string[] = []
    if (control.dirty) {
      return this.http.get<Email[]>('http://164.92.158.170:8088/api/usersEmail')
      .pipe(
        tap(res => console.log(res.length)),
        map((res: Email[]) => {
          res.forEach(email => emails.push(email.email))
          return emails;
        }),
        map((emails) => {
          console.log(emails);
          return emails.includes(email) ? { enUso: true } : null
        })
      )
    }else{
      return of(null)
    }
  }
}
