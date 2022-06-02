import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [`
  .container{
    margin: 10px;
  }

  .spacer{
    flex: 1 1 auto;
  }

  mat-toolbar{
    color: white;
    background-color: #bcd8c1;
  }

  mat-sidenav-container{
    color: black;
    background-color: white;
  }
`]
})
export class InicioComponent implements OnInit {

  constructor( private authService: AuthService,
               private router: Router) { }

   user!: User;

  ngOnInit(): void {
    this.user = this.authService.auth;
    console.log(this.user, 'adfdasd');
  }

  logout(){
    this.authService.logout().subscribe(
      res => {
        console.log(res);
      }
    )
    this.router.navigate(['/auth/login']);
  }

}
