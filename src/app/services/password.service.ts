import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor( private dataService:DataService ) { }

  recoveryPassword(email:string){
    this.dataService.recoveryPassword(email);
  }
}
