import { TestBed } from '@angular/core/testing';
import { ModalComponent } from '../components/modal/modal.component';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;
  let modal: ModalComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
