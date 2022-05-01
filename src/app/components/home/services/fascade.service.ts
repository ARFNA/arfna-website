import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FormBuilderService } from './form-builder.service';
import { FormFieldsService } from './form-fields.service';

@Injectable({
  providedIn: 'root'
})
export class FascadeService {

  constructor(private formBuilder: FormBuilderService,
    private formFieldsService: FormFieldsService) { }

  public buildNewsletterForm(): FormGroup {
    return this.formBuilder.buildNewsletterFormGroup();
  }

  public buildContactUsForm(): FormGroup {
    return this.formBuilder.buildContactUsFormGroup();
  }

  public proccessErrorMessages(form: FormGroup, fieldName: string, content: Map<string, string>): string | null | undefined {
    return this.formFieldsService.processFieldValidationMessage(form, fieldName, content);
  }

}
