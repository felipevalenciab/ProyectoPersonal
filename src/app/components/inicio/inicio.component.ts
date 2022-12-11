import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private router: Router,
    private toastr: ToastrService,
  ) {
    this.userAuth="";
  }

  ngOnInit(): void {
    this.userAuth=this.loginService.obtenerTokenAsociado();
    
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
