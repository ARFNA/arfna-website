import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FascadeService } from './fascade.service';
import { NavbarService } from './navbar.service';

describe('FascadeService', () => {
  let service: FascadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FascadeService, NavbarService],
      imports: [RouterTestingModule]
    });
    service = TestBed.inject(FascadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
