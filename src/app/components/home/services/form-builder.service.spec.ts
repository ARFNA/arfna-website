import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { FormBuilderService } from './form-builder.service';

describe('FormBuilderService', () => {
  let service: FormBuilderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [FormBuilder]
    });
    service = TestBed.inject(FormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
