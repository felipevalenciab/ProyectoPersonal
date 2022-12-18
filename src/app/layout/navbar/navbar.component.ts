import { Component,  OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showFiller = false;
  showNavBar:boolean=false;

  constructor( private loginService : LoginService,
    private faIconLibrary : FaIconLibrary) {
      faIconLibrary.addIcons(faRocket, faPerson, faHouseChimney, faPeopleGroup);
    }

  ngOnInit(): void {
  }

  obtenerTokenAsociado(){
    return this.loginService.obtenerTokenAsociado();
  }

}
