import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/services/registro.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  erroresForm: any = {
    'nombre': '',
    'apellidos' : '',
    'email': '',
    'password' : ''
  };

  mensajesError: any = {
    'nombre': {
      'required': 'El nombre es obligatorio',
      'minlength': 'Introduce mínimo 2 carácteres',
      'maxlength': 'El nombre no puede exceder de 25 carácteres'
    },
    'apellidos': {
      'required': 'Los apellidos son obligatorios',
      'minlength': 'Introduce mínimo 2 carácteres',
      'maxlength': 'Los apellidos no pueden exceder de 25 carácteres'
    },
    'email': {
      'required': 'La dirección de email es obligatoria',
      'email': 'El formato de correo electrónico no es correcto'
    },
    'password': {
      'required': 'La contraseña es obligatoria',
      'minlength': 'Introduce mínimo 4 carácteres',
    },
  }

  registerForm!:FormGroup;

  constructor(
    private registroService: RegistroService,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder) {
      this.crearFormulario();   
  }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.registerForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      apellidos: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });

    this.registerForm.valueChanges.subscribe(datos =>{
      this.onChangeForm(datos);
    });
    this.onChangeForm();
  }

  onChangeForm(data?: any) { //Para cada uno de los elementos del array, añade el error encontrado
    if (!this.registerForm) { return; }
    const form = this.registerForm;
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

  onSubmit() {
    this.registroService.registrarAsociado(this.registerForm.get('email')?.value, this.registerForm.get('password')?.value)
      .then(response => {
        console.log("Registro exitoso: " + response);
        this.showSuccess();
        this.router.navigate(['/login']);
      })
      .catch(error => {
        console.log("Error: " + error)
      });

  }

  showSuccess(){
    this.toastr.success('Registro correcto. Válida el correo enviado a tu Email (Revisa el correo de SPAM).', 'Bienvenid@!',{
      timeOut: 5000,
    }); 
  }

}
