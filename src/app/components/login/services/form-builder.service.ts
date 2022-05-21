import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormFieldsService } from './form-fields.service';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(private formBuilder: FormBuilder,
    private formFieldService: FormFieldsService) { }

  public buildLoginFormGroup(): FormGroup {
    const { required, email } = Validators;
    return this.formBuilder.group({
      email: ['', [required, email]],
      password: ['', [required]]
    })
  }

  public buildSignUpFormGroup(): FormGroup {
    const { required, maxLength, minLength, email } = Validators;
    return this.formBuilder.group({
      name: ['', [required, maxLength(64), minLength(2)]],
      email: ['', [required, email]],
      password: ['', [required]],
      repassword: ['', [required]]
    }, 
    { validator: [this.formFieldService.passwordConfirmation('password', 'repassword')] })
  }
}
