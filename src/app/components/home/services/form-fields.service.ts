import { Injectable } from '@angular/core';
import { FieldServiceRegex } from '../constants/field-service-regex';

@Injectable({
  providedIn: 'root'
})
export class FormFieldsService {

  constructor() { }

  public processFieldValidationMessage(form: any, fieldName: string, content: any): string | null {
    const { errors, value } = form.controls[fieldName] || {};
    if (errors) {
      const { required, maxlength, minlength, pattern } = errors;
      const { EMAIL } = FieldServiceRegex;
      return (
        required ? content.get("requiredTxt") :
          maxlength ? content.get("maxLengthTxt") :
            minlength ? content.get("minLengthTxt") :
              pattern.requiredPattern === EMAIL ? content.get("emailPatternTxt") :
                null
      );
    }
    return null;
  }
}
