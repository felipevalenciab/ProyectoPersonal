import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-infofinanciera',
  templateUrl: './infofinanciera.component.html',
  styleUrls: ['./infofinanciera.component.scss']
})
export class InfofinancieraComponent implements OnInit {

  finacieraForm!: FormGroup;

  erroresForm: any = {
    'ingmensuales': '',
    'otingresos': '',
    'procdnciaoting': '',
    'totaling': '',
    'totalegr': '',
    'totalactivos': '',
    'totalpasivos': '',
    'totalpatrimonio': ''
  };

  mensajesError: any = {
    'ingmensuales': {
      'required': 'Los ingresos son obligatorios',
      'pattern': 'Solo puede contener números.'
    },
    'otingresos': {
      'pattern': 'Solo puede contener números.'
    },
    'procdnciaoting': {
      'required': 'La procedencia es obligatoria. (N/A si no tiene)',
      'minlength': 'Introduce mínimo 2 carácteres',
      'maxlength': 'Introduce máximo de 45 carácteres'
    },
    'totaling': {
      'required': 'El total de ingresos es obligatorio',
      'pattern': 'Solo puede contener números.'
    },
    'totalegr': {
      'required': 'El total de egresos es obligatorio',
      'pattern': 'Solo puede contener números.'
    },
    'totalactivos': {
      'required': 'El total de activos es obligatorio',
      'pattern': 'Solo puede contener números.'
    },
    'totalpasivos': {
      'required': 'El total de pasivos es obligatorio',
      'pattern': 'Solo puede contener números.'
    },
    'totalpatrimonio': {
      'required': 'El total de patimonio es obligatorio',
      'pattern': 'Solo puede contener números.'
    },
  }


  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.finacieraForm = this.fb.group({
      ingmensuales: ['', [Validators.required, Validators.pattern]],
      otingresos: ['', [Validators.pattern]],
      procdnciaoting: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(45)]],
      totaling: ['', [Validators.required, Validators.pattern]],
      totalegr: ['', [Validators.required, Validators.pattern]],
      totalactivos: ['', [Validators.required, Validators.pattern]],
      totalpasivos: ['', [Validators.required, Validators.pattern]],
      totalpatrimonio: ['', [Validators.required, Validators.pattern]],

    });
    this.finacieraForm.valueChanges.subscribe(datos => {
      this.onChangeForm(datos);
    });
    this.onChangeForm();
  }
  onChangeForm(data?: any) { //Para cada uno de los elementos del array, añade el error encontrado
    if (!this.finacieraForm) { return; }
    const form = this.finacieraForm;
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
