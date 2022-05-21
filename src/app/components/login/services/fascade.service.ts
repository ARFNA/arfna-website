import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilderService } from './form-builder.service';
import { FormFieldsService } from './form-fields.service';

@Injectable({
  providedIn: 'root'
})
export class FascadeService {

  constructor(private formBuilder: FormBuilderService,
    private formFieldsService: FormFieldsService) { }

  public buildLoginForm(): FormGroup {
    return this.formBuilder.buildLoginFormGroup();
  }

  public buildSignUpForm(): FormGroup {
    return this.formBuilder.buildSignUpFormGroup();
  }

  public proccessErrorMessages(form: FormGroup, fieldName: string, content: Map<string, string>): string | undefined {
    return this.formFieldsService.processFieldValidationMessage(form, fieldName, content);
  }
}
