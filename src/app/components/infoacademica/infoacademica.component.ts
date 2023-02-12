import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-infoacademica',
  templateUrl: './infoacademica.component.html',
  styleUrls: ['./infoacademica.component.scss']
})
export class InfoacademicaComponent implements OnInit {

  academicaForm!: FormGroup;

  erroresForm: any = {
    'nivel': '',
    'titulo': '',
    'nombreactual': '',
    'cursoactual': ''
  };

  mensajesError: any = {
    'nivel': {
      'required': 'El nivel de estudios es obligatorio'
    },
    'titulo': {
      'required': 'La título obtenido/profesión es obligatorio',
      'minlength': 'Introduce mínimo 2 carácteres',
      'maxlength': 'Introduce máximo de 45 carácteres'
    },
    'nombreactual': {
      'required': 'El nombre es obligatorio',
      'minlength': 'Introduce mínimo 2 carácteres',
      'maxlength': 'Introduce máximo de 45 carácteres'
    },
    'cursoactual': {
      'required': 'El curso es obligatorio',
      'minlength': 'Introduce mínimo 2 carácteres',
      'maxlength': 'Introduce máximo de 45 carácteres'
    }
  }

  //TODO: ¿Otro? ¿Cuál?
  infoacademica: string [] = [
    'Primaria',
    'Bachiller',
    'Técnico',
    'Tecnólogo',
    'Universitario',
    'Especialización',
    'Magister',
    'Doctorado'
  ];

  constructor( private fb: FormBuilder ) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.academicaForm = this.fb.group({
      nivel: ['', [Validators.required]],
      titulo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(45)]],
      nombreactual: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(45)]],
      cursoactual: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(45)]],
    });
    this.academicaForm.valueChanges.subscribe(datos =>{
      this.onChangeForm(datos);
    });
    this.onChangeForm();
  }

  onChangeForm(data?: any) { //Para cada uno de los elementos del array, añade el error encontrado
    if (!this.academicaForm) { return; }
    const form = this.academicaForm;
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