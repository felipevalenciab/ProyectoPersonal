import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

//Componentes
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './layout/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';

//Servicios
import { DataService } from './services/data.service';

//Animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Formularios
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

import { PasswordComponent } from './components/password/password.component';

//HREF
import { APP_BASE_HREF } from '@angular/common';
import { baseURL } from './baseurl';
import { MatDividerModule } from '@angular/material/divider';

//Cookies
import { CookieService } from 'ngx-cookie-service';
import { InfopersonalComponent } from './components/infopersonal/infopersonal.component';
import { InforesidenciaComponent } from './components/inforesidencia/inforesidencia.component';
import { InfofamiliarComponent } from './components/infofamiliar/infofamiliar.component';
import { InfolaboralComponent } from './components/infolaboral/infolaboral.component';
import { InfoacademicaComponent } from './components/infoacademica/infoacademica.component';
import { InfofinancieraComponent } from './components/infofinanciera/infofinanciera.component';
import { AutorizacionesComponent } from './components/autorizaciones/autorizaciones.component';
import { DeduccionesComponent } from './components/deducciones/deducciones.component';
import { FirmaComponent } from './components/firma/firma.component';
import { ObservacionesComponent } from './components/observaciones/observaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    InicioComponent,
    RegistroComponent,
    PasswordComponent,
    InfopersonalComponent,
    InforesidenciaComponent,
    InfofamiliarComponent,
    InfolaboralComponent,
    InfoacademicaComponent,
    InfofinancieraComponent,
    AutorizacionesComponent,
    DeduccionesComponent,
    FirmaComponent,
    ObservacionesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatSelectModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule    
  ],
  providers: [CookieService, DataService, {provide: 'baseURL', useValue: baseURL} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
