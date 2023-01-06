import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

//Componentes
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PasswordComponent } from './components/password/password.component';
import { InfopersonalComponent } from './components/infopersonal/infopersonal.component';
import { InforesidenciaComponent } from './components/inforesidencia/inforesidencia.component';
import { InfofamiliarComponent } from './components/infofamiliar/infofamiliar.component';
import { InfolaboralComponent } from './components/infolaboral/infolaboral.component';
import { InfoacademicaComponent } from './components/infoacademica/infoacademica.component';
import { InfofinancieraComponent } from './components/infofinanciera/infofinanciera.component';
import { AutorizacionesComponent } from './components/autorizaciones/autorizaciones.component';
import { DeduccionesComponent } from './components/deducciones/deducciones.component';
import { FirmaComponent } from './components/firma/firma.component';

//Rutas
export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'password', component:PasswordComponent},
  { path: 'inicio',  component: InicioComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login'])) },
  { path: 'infopersonal',  component: InfopersonalComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login'])) },
  { path: 'infovivienda',  component: InforesidenciaComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login'])) }, 
  { path: 'infofamiliar',  component: InfofamiliarComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login'])) },
  { path: 'infolaboral',  component: InfolaboralComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login'])) },
  { path: 'infoacademica',  component: InfoacademicaComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login'])) },
  { path: 'infofinanciera',  component: InfofinancieraComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login'])) },
  { path: 'autorizaciones',  component: AutorizacionesComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login'])) },
  { path: 'deducciones',  component: DeduccionesComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login'])) },
  { path: 'firma',  component: FirmaComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login'])) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
