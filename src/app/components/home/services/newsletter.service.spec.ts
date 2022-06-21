import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MSubscriber } from 'src/app/models/m-subscriber';
import { Subscriber } from 'src/app/models/subscriber';

import { NewsletterService } from './newsletter.service';

describe('NewsletterService', () => {
  let service: NewsletterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NewsletterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call through', () => {
    // should not throw errors, no expectations
    service.mSubscriber(new MSubscriber('', '', new Subscriber()));
  });
});
