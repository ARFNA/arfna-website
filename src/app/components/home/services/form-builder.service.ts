import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldServiceRegex } from '../constants/field-service-regex';
import { FormFieldsService } from './form-fields.service';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(private formBuilder: FormBuilder,
    private formFieldService: FormFieldsService) { }

  public buildNewsletterFormGroup(): FormGroup {
    const { required, maxLength, pattern } = Validators;
    const { EMAIL } = FieldServiceRegex;
    return this.formBuilder.group({
      name: ['', [required, maxLength(64)]],
      email: ['', [required, pattern(EMAIL)]],
      checkbox: ['']
    })
  }
}
