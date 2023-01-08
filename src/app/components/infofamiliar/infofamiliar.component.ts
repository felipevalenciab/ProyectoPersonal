import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-infofamiliar',
  templateUrl: './infofamiliar.component.html',
  styleUrls: ['./infofamiliar.component.scss']
})
export class InfofamiliarComponent implements OnInit {

  panelOpenState = false;

  familiar = {nombreFamiliar: '', tipoIdFamiliar: '', numIdFamiliar: '', fechaNacimientoFamiliar: '', parentesco: ''};
  
  infoestadocivil: string [] = [
    'Soltero',
    'Casado',
    'Unión libre',
    'Separado',
    'Viudo'
  ];

  infodondelabora: string [] = [
    'Empresa',
    'Independiente',
    'Pensionada'
  ];

  personalForm!: FormGroup;
  familiarForm!: FormGroup;

  erroresPersonalForm: any = {
    'salario': ''
  };

  erroresForm: any = {
    'nombrefamiliar': '',
    'tipoIdFamiliar': '',
    'numIdFamiliar': '',
    'fechaNacimientoFamiliar': '',
    'parentesco': ''
  };

  mensajesErrorPersonal: any = {
    'salario': {
      'required': 'El nombre es obligatorio.'
    },
  }

  mensajesErrorFamiliar: any = {
    'nombrefamiliar': {
      'required': 'El nombre es obligatorio.',
      'minlength': 'El nombre debe tener una longitud mínima de 2 caracteres.',
      'maxlength': 'El nombre no puede exceder de 25 caracteres.'
    },
    'tipoIdFamiliar': {
      'required': 'El tipo de identificación es obligatorio.'
    },
    'numIdFamiliar': {
      'required': 'El número de identificación es obligatorio.',
      'minlength': 'Introduce mínimo 5 carácteres',
      'maxlength': 'Introduce máximo 12 carácteres'
    },
    'fechaNacimientoFamiliar': {
      'required': 'La fecha de nacimiento es obligatoria.'
    },
    'parentesco': {
      'required': 'El parentesco es obligatorio.',
      'minlength': 'El parentesco debe tener una longitud mínima de 2 caracteres.',
      'maxlength': 'El parentesco no puede exceder de 25 caracteres.'
    },
  };

  constructor(private fb: FormBuilder) {
    this.crearFormularioPersonal();
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  addFamiliar(){
  }

  crearFormularioPersonal(){
    this.personalForm = this.fb.group({
      salario: ['', [Validators.required]]
    });

    this.personalForm.valueChanges.subscribe(datos => {
      this.onCambioValorPersonal(datos);
    });

    this.onCambioValorPersonal();
  }

  crearFormulario(){
    this.familiarForm = this.fb.group({
      nombrefamiliar: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      tipoIdFamiliar: ['', [Validators.required]],
      numIdFamiliar: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      fechaNacimientoFamiliar: ['', [Validators.required]],
      parentesco: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    });

    this.familiarForm.valueChanges.subscribe(datos => {
      this.onCambioValorFamiliar(datos);
    });

    this.onCambioValorFamiliar();
  }

  onCambioValorPersonal(data?: any) { //Para cada uno de los elementos del array, añade el error encontrado
    if (!this.personalForm) { return; }
    const form = this.personalForm;
    for (const field in this.personalForm) {
      // Se borrarán los mensajes de error previos
      this.erroresPersonalForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.mensajesErrorPersonal[field];
        for (const key in control.errors) {
          this.erroresPersonalForm[field] += messages[key] + ' ';
        }
      }
    }
  }

  onCambioValorFamiliar(data?: any) { //Para cada uno de los elementos del array, añade el error encontrado
    if (!this.familiarForm) { return; }
    const form = this.familiarForm;
    for (const field in this.familiarForm) {
      // Se borrarán los mensajes de error previos
      this.erroresForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.mensajesErrorFamiliar[field];
        for (const key in control.errors) {
          this.erroresForm[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    //TODO: Save form
  }

}
