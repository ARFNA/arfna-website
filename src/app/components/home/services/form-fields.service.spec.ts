import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, NgControlStatus, Validators } from '@angular/forms';

import { FormFieldsService } from './form-fields.service';

describe('FormFieldsService', () => {
  let service: FormFieldsService;
  let formbuilder: FormBuilder = new FormBuilder();

  /** Test Set Up */
  const { required, maxLength, minLength, email, min } = Validators;
  let form: FormGroup = formbuilder.group({
    name: ['', [required, maxLength(64), minLength(2)]],
    email: ['', [required, email]],
    message: ['', [required, maxLength(1000), minLength(2)]],
    number: ['', [min(2)]]
  })
  let content: Map<string, string> = new Map();
  content.set('requiredTxt', 'required');
  content.set('maxLengthTxt', 'maxLength');
  content.set('minLengthTxt', 'minLength');
  content.set('emailPatternTxt', 'email');

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormFieldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return null when cant find field', () => {
    let message = service.processFieldValidationMessage(form, '', content);
    expect(message).toEqual(null);
  });

  it('should return required', () => {
    form.controls['email'].setValue('');
    let message = service.processFieldValidationMessage(form, 'email', content);
    expect(message).toEqual('required');
  });

  it('should return email', () => {
    form.controls['email'].setValue('not an email');
    let message = service.processFieldValidationMessage(form, 'email', content);
    expect(message).toEqual('email');
  });

  it('should return min length', () => {
    form.controls['message'].setValue('H');
    let message = service.processFieldValidationMessage(form, 'message', content);
    expect(message).toEqual('minLength');
  });

  it('should return max length', () => {
    form.controls['message'].setValue('Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
    let message = service.processFieldValidationMessage(form, 'message', content);
    expect(message).toEqual('maxLength');
  });

  it('should not return an error message', () => {
    form.controls['message'].setValue('Hi!');
    let message = service.processFieldValidationMessage(form, 'message', content);
    expect(message).toEqual(null);
  });

  it('should not return an error message for unaddressed errors', () => {
    form.controls['number'].setValue(1);
    let message = service.processFieldValidationMessage(form, 'number', content);
    expect(message).toEqual(null);
  });
});
