import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  userAuth:string;
  isLogged!:boolean;
  opened=true;
  private cookieValue!:string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService,
    private cookieService: CookieService
  ) {
    this.userAuth="";
  }

  ngOnInit(): void {
    this.opened=true;
  }

  logout(){
    this.loginService.cerrarSesion()
    .then(response =>{
      console.log("Cerrando sesión...");
      this.showLogOut();
    })
    .catch(error => {
      console.log("Error:" +error);
    });
    this.router.navigate(['/login']);
  }

  showLogOut() {
    this.toastr.success('Cierre de sesión exitoso', 'Adiós!', {
      timeOut: 3000,
    });
  }

}
