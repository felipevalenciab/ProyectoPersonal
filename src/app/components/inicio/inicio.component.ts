import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  userAuth:string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.userAuth="";
  }

  ngOnInit(): void {
    this.userAuth=this.loginService.obtenerTokenAsociado();
  }

  logout(){
    this.loginService.cerrarSesion()
    .then(response =>{
      console.log("Cerrando sesión...")
    })
    .catch(error => {
      console.log("Error:" +error);
    });
    this.router.navigate(['/login']);
  }

}
