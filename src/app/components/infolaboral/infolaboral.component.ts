import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-infolaboral',
  templateUrl: './infolaboral.component.html',
  styleUrls: ['./infolaboral.component.scss']
})
export class InfolaboralComponent implements OnInit {

  laboralForm!: FormGroup;

  erroresForm: any = {
    'empresa': '',
    'direccion': '',
    'fechaingreso': '',
    'cargo' : '',
    'codigo' : '',
    'salario' : ''
  };

  mensajesError: any = {
    'empresa': {
      'required': 'El nombre de Empresa es obligatorio',
      'minlength': 'Introduce mínimo 2 carácteres',
      'maxlength': 'Introduce máximo de 20 carácteres'
    },
    'direccion': {
      'required': 'La dirección es obligatoria',
      'minlength': 'Introduce mínimo 5 carácteres',
      'maxlength': 'Introduce máximo de 30 carácteres'
    },
    'fechaingreso': {
      'required': 'La fecha de expedición es obligatoria'
    },
    'cargo': {
      'required': 'El cargo es obligatorio',
      'minlength': 'Introduce mínimo 2 carácteres',
      'maxlength': 'Introduce máximo de 30 carácteres'
    },
    'codigo': {
      'required': 'El código es obligatorio',
      'minlength': 'Introduce mínimo 2 carácteres',
      'maxlength': 'Introduce máximo de 15 carácteres'
    },
    'salario': {
      'required': 'El salario es obligatorio.',
      'pattern': 'El salario sólo puede contener números.'
    }
  }

  constructor( private fb: FormBuilder ) { 
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.laboralForm = this.fb.group({
      empresa: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      direccion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      fechaingreso: ['', [Validators.required]],
      cargo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      codigo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      salario: ['', [Validators.required, Validators.pattern]]
    });
    this.laboralForm.valueChanges.subscribe(datos =>{
      this.onChangeForm(datos);
    });
    this.onChangeForm();
  }

  onChangeForm(data?: any) { //Para cada uno de los elementos del array, añade el error encontrado
    if (!this.laboralForm) { return; }
    const form = this.laboralForm;
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
