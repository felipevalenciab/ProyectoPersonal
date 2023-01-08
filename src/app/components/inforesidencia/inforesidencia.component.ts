import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inforesidencia',
  templateUrl: './inforesidencia.component.html',
  styleUrls: ['./inforesidencia.component.scss']
})
export class InforesidenciaComponent implements OnInit {

  infoestrato: string [] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
  ];

  viviendaForm!: FormGroup;

  erroresForm: any = {
    'direccion': '',
    'barrio': '',
    'ciudad': '',
    'estrato' : ''
  };

  mensajesError: any = {
    'direccion': {
      'required': 'La dirección es obligatoria',
      'minlength': 'Introduce mínimo 5 carácteres',
      'maxlength': 'Introduce máximo de 45 carácteres'
    },
    'barrio': {
      'required': 'El barrio es obligatorio',
      'minlength': 'Introduce mínimo 5 carácteres',
      'maxlength': 'Introduce máximo de 45 carácteres'
    },
    'ciudad': {
      'required': 'La ciudad es obligatoria',
      'minlength': 'Introduce mínimo 5 carácteres',
      'maxlength': 'Introduce máximo de 45 carácteres'
    },
    'estrato': {
      'required': 'El estrato es obligatorio'
    },
  }

  constructor( private fb: FormBuilder ) { 
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.viviendaForm = this.fb.group({
      direccion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(45)]],
      barrio: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(45)]],
      ciudad: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(45)]],
      estrato: ['', [Validators.required]]
    });
    this.viviendaForm.valueChanges.subscribe(datos =>{
      this.onChangeForm(datos);
    });
    this.onChangeForm();
  }

  onChangeForm(data?: any) { //Para cada uno de los elementos del array, añade el error encontrado
    if (!this.viviendaForm) { return; }
    const form = this.viviendaForm;
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
