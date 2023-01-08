import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-infopersonal',
  templateUrl: './infopersonal.component.html',
  styleUrls: ['./infopersonal.component.scss']
})
export class InfopersonalComponent implements OnInit {

  personalForml!: FormGroup;

  erroresForm: any = {
    'nombre': '',
    'email': '',
    'celular': '',
    'numeroid' : '',
    'fechaexpe' : '',
    'fechanaci' : '',
    'ciudad' : '',
    'departamento' : '',
    'pais' : ''
  };

  mensajesError: any = {
    'nombre': {
      'required': 'El nombre es obligatorio',
      'minlength': 'Introduce mínimo 2 carácteres',
      'maxlength': 'Introduce máximo de 45 carácteres'
    },
    'email': {
      'required': 'La dirección de email es obligatoria',
      'email': 'El formato de email no es correcto'
    },
    'celular': {
      'required': 'El número de teléfono es obligatorio.',
      'pattern': 'El número de teléfono sólo puede contener números.'
    },
    'numeroid': {
      'required': 'El número de identificación es obligatorio',
      'minlength': 'Introduce mínimo 5 carácteres',
      'maxlength': 'Introduce máximo 12 carácteres'
    },
    'fechaexpe': {
      'required': 'La fecha de expedición es obligatoria'
    },
    'fechanaci': {
      'required': 'La fecha de nacimiento es obligatoria'
    },
    'ciudad': {
      'required': 'La ciudad es obligatoria',
      'minlength': 'Introduce mínimo 2 carácteres',
      'maxlength': 'Introduce máximo de 45 carácteres'
    },
    'departamento': {
      'required': 'El departamento es obligatorio',
      'minlength': 'Introduce mínimo 2 carácteres',
      'maxlength': 'Introduce máximo de 45 carácteres'
    },
    'pais': {
      'required': 'El País es obligatorio',
      'minlength': 'Introduce mínimo 2 carácteres',
      'maxlength': 'Introduce máximo de 45 carácteres'
    }
  }

  constructor( private fb: FormBuilder ) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.personalForml = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(45)]],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, Validators.pattern]],
      numeroid: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      fechaexpe: ['', [Validators.required]],
      fechanaci: ['', [Validators.required]],
      ciudad: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(45)]],
      departamento: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(45)]],
      pais: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(45)]]
    });
    this.personalForml.valueChanges.subscribe(datos =>{
      this.onChangeForm(datos);
    });
    this.onChangeForm();
  }

  onChangeForm(data?: any) { //Para cada uno de los elementos del array, añade el error encontrado
    if (!this.personalForml) { return; }
    const form = this.personalForml;
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
    //TODO: Save form
  }

}
