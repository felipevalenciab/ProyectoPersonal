import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private dataService:DataService ) { }

  registrarAsociado({email,password}: any){
    return this.dataService.registrarAsociado(email, password);
  }

  iniciarSesion(email:string, password:string){
    return this.dataService.login(email, password)
  }

  cerrarSesion(){
    return this.dataService.logout();
  }

  obtenerTokenAsociado(){
    return this.dataService.isAuthenticated();
  }


}
