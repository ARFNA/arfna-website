import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { FascadeService } from './fascade.service';

describe('FascadeService', () => {
  let service: FascadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormBuilder],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(FascadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
