import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor( private dataService:DataService ) { }

  registrarAsociado(email:string, password:string){
    return this.dataService.registrarAsociado(email,password);
  }
}
