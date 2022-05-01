import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormFieldsService {

  constructor() { }

  public processFieldValidationMessage(form: any, fieldName: string, content: Map<string, string>): string | null | undefined {
    const { errors, value } = form.controls[fieldName] || {};
    if (errors) {
      const { required, maxlength, minlength, email } = errors;
      return (
        required ? content.get('requiredTxt') :
          maxlength ? content.get('maxLengthTxt') :
            minlength ? content.get('minLengthTxt') :
              email ? content.get('emailPatternTxt') :
                null
      );
    }
    return null;
  }
}
