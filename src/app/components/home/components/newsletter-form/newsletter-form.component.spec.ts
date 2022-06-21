import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { FascadeService } from '../../services/fascade.service';
import { of, throwError } from 'rxjs';

import { NewsletterFormComponent } from './newsletter-form.component';
import { Errors } from '../../constants/errors.constants';

describe('NewsletterFormComponent', () => {
  let component: NewsletterFormComponent;
  let fixture: ComponentFixture<NewsletterFormComponent>;
  let fascade: FascadeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ NewsletterFormComponent ],
      providers: [FascadeService, FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterFormComponent);
    fascade = TestBed.inject(FascadeService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the success icon', () => {
    component.toggleActive();
    expect(component.active).toBeTruthy();
  });

  it('should submit successfully', () => {
    component.form.controls['name'].patchValue('Kay');
    component.form.controls['emailAddress'].patchValue('keolecki@gmail.com');
    const spy = spyOn(fascade, 'addSubscriber').and.callThrough().and.returnValue(of({}));
    component.submit();
    expect(spy).toHaveBeenCalled();
    expect(component.success).toBeTruthy();
  });

  it('should throw error', () => {
    const spy = spyOn(fascade, 'addSubscriber').and.callThrough()
    .and.returnValue(throwError({'error':{'response': {'messages': [{ 'message': 'test'}]}}}));
    component.submit();
    expect(spy).toHaveBeenCalled();
    expect(component.errorMessage).toBe('Error: test');
  });

  it('should throw generic error', () => {
    const spy = spyOn(fascade, 'addSubscriber').and.callThrough()
    .and.returnValue(throwError({'error': { 'status': 400 }}));
    component.submit();
    expect(spy).toHaveBeenCalled();
    expect(component.errorMessage).toBe(Errors.GENERIC);
  });
});
