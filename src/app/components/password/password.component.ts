import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PasswordService } from 'src/app/services/password.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  passwordForm!: FormGroup;
  erroresForm: any = { 'email': '' };

  mensajesError: any = {
    'email': {
      'required': 'La dirección de email es obligatoria.',
      'email': 'La dirección de email no tiene el formato correcto.'
    }
  };

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private passwordService: PasswordService,
    private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.passwordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.passwordForm.valueChanges.subscribe(
      datos => {
        this.onChangeForm(datos);
      }
    )
    this.onChangeForm();
  }

  onChangeForm(data?: any) {
    if (!this.passwordForm) { return; }
    const form = this.passwordForm;
    for (const field in this.erroresForm) {
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

  resetForm(){
    this.passwordForm.reset({
      email:''
    })
  }

  // Service Methods
  recoveyPassword() {
    this.passwordService.recoveryPassword(this.passwordForm.get('email')?.value);
    this.resetForm();
    this.showInfo();
  }

  //Toastr Methods
  showInfo() {
    this.toastr.info('Si la dirección de correo coincide con un registro se enviará un correo para restablecer la contraseña.',
     'Cambio de contraseña:', {
      timeOut: 5000,
    });
  }

  

}
