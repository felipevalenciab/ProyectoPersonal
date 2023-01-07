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
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';
import { faSignature } from '@fortawesome/free-solid-svg-icons';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  opened=false;
  private cookieValue!:string;

  constructor( private authService:LoginService,
    private faIconLibrary : FaIconLibrary,
    private router: Router, private cdRef : ChangeDetectorRef,
    private cookieService: CookieService) { 
      faIconLibrary.addIcons(faRocket, faPerson, faHouseChimney, 
        faPeopleGroup, faClose, faBriefcase, faGraduationCap, 
        faDollarSign, faListCheck, faMoneyBillTransfer,
        faSignature);
    }

  ngOnInit() {
  }

  isLoggedIn(){
    this.cookieValue = this.cookieService.get('cookieAuth');
    if(this.cookieValue!=""){
      return true;
    }
    else{
      return false;
    }
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

  deducciones(){
    this.router.navigate(['/deducciones']);
    this.opened=false;
  }

  firma(){
    this.router.navigate(['/firma']);
    this.opened=false;
  }

}