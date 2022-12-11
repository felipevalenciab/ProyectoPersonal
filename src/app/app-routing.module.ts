import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

//Componentes
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PasswordComponent } from './components/password/password.component';
import { InfopersonalComponent } from './components/infopersonal/infopersonal.component';
import { InforesidenciaComponent } from './components/inforesidencia/inforesidencia.component';
import { InfofamiliarComponent } from './components/infofamiliar/infofamiliar.component';

//Rutas
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'password', component:PasswordComponent},
  { path: 'inicio',  component: InicioComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login'])) },
  { path: 'infopersonal',  component: InfopersonalComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login'])) },
  { path: 'infovivienda',  component: InforesidenciaComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login'])) }, 
  { path: 'infofamiliar',  component: InfofamiliarComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login'])) } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
