import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  erroresForm: any = {
    'email': '',
    'password': ''
  };

  mensajesError: any = {
    'email': {
      'required': 'La dirección de email es obligatoria.',
      'email': 'La dirección de email no tiene el formato correcto.'
    },
    'password': {
      'required': 'La contraseña es obligatoria.'
    },
  }

  loginForm!: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    this.loginForm.valueChanges.subscribe(datos => {
      this.onChangeForm(datos);
    });
    this.onChangeForm();
  }

  onChangeForm(data?: any) { //Para cada uno de los elementos del array, añade el error encontrado
    if (!this.loginForm) { return; }
    const form = this.loginForm;
    for (const field in this.erroresForm) {
      // Se borrarán los mensajes de error previos
      this.erroresForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.mensajesError[field];
        for (const key in control.errors) {
          this.erroresForm[field] += messages[key] + ' ';
        }
      }
    }
  }

  login() {
    this.loginService.iniciarSesion(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value)
      .then(response => {
        if (response.user.emailVerified) {
          console.log("Usuario ha iniciado sesion:" + response);
          this.showSuccess();
          this.router.navigate(['/inicio']);
        }else{
          console.log("Correo electrónico no verificado");
          this.router.navigate(['/login']);
          this.logout();
          this.showWarn();
        }

      })
      .catch(error => {
        this.showError();
        console.log("Error:" + error);
      });
  }

  logout() {
    this.loginService.cerrarSesion();
  }

  showSuccess() {
    this.toastr.success('Inicio de sesión correcto', 'Hola!', {
      timeOut: 3000,
    });
  }

  showWarn() {
    this.toastr.warning('Verifica tu correo electrónico para poder iniciar sesión','Atención:', {
      timeOut: 3000,
    });
  }

  showError() {
    this.toastr.error('Usuario o contraseña inválidos', 'Error:', {
      timeOut: 3000,
    });
  }

}
