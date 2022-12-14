import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
    return this.dataService.login3(email, password)
  }

  createCookie(token:any, nombre: any){
    return this.dataService.createCookie(token, nombre);
  }

  cerrarSesion(){
    return this.dataService.logout();
  }

  obtenerTokenAsociado(){
    return this.dataService.isAuthenticated();
  }

  getUserRol(){
    return this.dataService.getUserRol();
  }

  get isLoggedIn(){
    return this.dataService.isLoggedIn();
  }

  getIsAuth(){
    return this.dataService.isAuthenticated();
  }
}
