import { Component,  OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faHomeUser } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faHouse = faHouse;
  faHomeUser = faHomeUser
  showNavBar:boolean=false;

  constructor( private loginService : LoginService,
    private faIconLibrary : FaIconLibrary) {
      faIconLibrary.addIcons(faHouseChimney,faRocket);
    }

  ngOnInit(): void {
  }

  obtenerTokenAsociado(){
    return this.loginService.obtenerTokenAsociado();
    window.location.reload();
  }


}
