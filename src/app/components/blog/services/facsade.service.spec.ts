import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { FacsadeService } from './facsade.service';

describe('FacsadeService', () => {
  let service: FacsadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ HttpClientTestingModule ],});
    service = TestBed.inject(FacsadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
