import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$!: Observable<boolean>;
  opened=false;

  constructor( private authService:LoginService,
    private faIconLibrary : FaIconLibrary,
    private router: Router ) { 
      faIconLibrary.addIcons(faRocket, faPerson, faHouseChimney, 
        faPeopleGroup, faClose, faBriefcase, faGraduationCap, 
        faDollarSign, faListCheck);
    }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.opened=false;
  }

  onLogout(){
    this.authService.cerrarSesion();
    this.opened=false;
  }

  inicio(){
    this.router.navigate(['/inicio']);
    this.opened=false;
  }

  infoPersonal(){
    this.router.navigate(['/infopersonal']);
    this.opened=false;
  }

  infoLaboral(){
    this.router.navigate(['/infolaboral']);
    this.opened=false;
  }

  infoAcademica(){
    this.router.navigate(['/infoacademica']);
    this.opened=false;
  } 

  infoVivienda(){
    this.router.navigate(['/infovivienda']);
    this.opened=false;
  }

  infoFamiliar(){
    this.router.navigate(['/infofamiliar']);
    this.opened=false;
  }
  
  infoFinanciera(){
    this.router.navigate(['/infofinanciera']);
    this.opened=false;
  }

  autorizaciones(){
    this.router.navigate(['/autorizaciones']);
    this.opened=false;
  }

}