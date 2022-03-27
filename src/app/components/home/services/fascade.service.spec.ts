import { TestBed } from '@angular/core/testing';

import { FascadeService } from './fascade.service';

describe('FascadeService', () => {
  let service: FascadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FascadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
