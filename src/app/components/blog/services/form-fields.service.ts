import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormFieldsService {

  constructor() { }

  public processFieldValidationMessage(form: any, fieldName: string, content: Map<string, string>): string | undefined {
    const { errors, value } = form.controls[fieldName] || {};
    if (errors) {
      const { required, maxlength, minlength, pattern } = errors;
      return (
        required ? content.get('requiredTxt') :
          maxlength ? content.get('maxLengthTxt') :
            minlength ? content.get('minLengthTxt'):
                ''
      );
    }
    return '';
  }
}
