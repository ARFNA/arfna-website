import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FascadeService } from 'src/app/components/login/services/fascade.service';
import { of, throwError } from 'rxjs';

import { LoginSignupFormComponent } from './login-signup-form.component';
import { Errors } from '../../constants/errors.constants';
import { Subscriber } from 'src/app/models/subscriber';

describe('LoginSignupFormComponent', () => {
  let component: LoginSignupFormComponent;
  let fixture: ComponentFixture<LoginSignupFormComponent>;
  let fascade: FascadeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [FormBuilder],
      declarations: [ LoginSignupFormComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSignupFormComponent);
    fascade = TestBed.inject(FascadeService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check new subscriber with not info in table', () => {
    const spy = spyOn(fascade, 'manageSubscriber').and.callThrough().and.returnValue(of({	"response": {
      "subscriberType": "NOT_IN_TABLE"
    }
  }));
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  });

  it('should check what info is already in the table for new subscriber', () => {
    const spy = spyOn(fascade, 'manageSubscriber').and.callThrough().and.returnValue(of({	"response": {
      "subscriberType": "NAME_AND_EMAIL"
    }
  }));
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  });

  it('should show errors (onsubmit)', () => {
    const spy = spyOn(fascade, 'manageSubscriber').and.callThrough()
    .and.returnValue(throwError({'error':{'response': {'messages': [{ 'message': 'test'}]}}}));
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
    expect(component.errorMessage).toBe('Error: test');
  });

  it('should shows generic errors (onsubmit)', () => {
    const spy = spyOn(fascade, 'manageSubscriber').and.callThrough()
    .and.returnValue(throwError({'error':{'status': 400}}));
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
    expect(component.errorMessage).toBe(Errors.GENERIC);
  });

  it('should show errors (sign in)', () => {
    const spy = spyOn(fascade, 'manageSubscriber').and.callThrough()
    .and.returnValue(throwError({'error':{'response': {'messages': [{ 'message': 'test'}]}}}));
    component.signUp('', new Subscriber());
    expect(spy).toHaveBeenCalled();
    expect(component.errorMessage).toBe('Error: test');
  });

  it('should shows generic errors (sign in)', () => {
    const spy = spyOn(fascade, 'manageSubscriber').and.callThrough()
    .and.returnValue(throwError({'error':{'status': 400}}));
    component.signUp('', new Subscriber());
    expect(spy).toHaveBeenCalled();
    expect(component.errorMessage).toBe(Errors.GENERIC);
  });

  it('should login in subsciber', () => {
    const spy = spyOn(fascade, 'manageSubscriber').and.callThrough().and.returnValue(of({}));
    component.login();
    expect(spy).toHaveBeenCalled();
  });

  it('should show errors (login)', () => {
    const spy = spyOn(fascade, 'manageSubscriber').and.callThrough()
    .and.returnValue(throwError({'error':{'response': {'messages': [{ 'message': 'test'}]}}}));
    component.login();
    expect(spy).toHaveBeenCalled();
    expect(component.errorMessage).toBe('Error: test');
  });

  it('should shows generic errors (login)', () => {
    const spy = spyOn(fascade, 'manageSubscriber').and.callThrough()
    .and.returnValue(throwError({'error':{'status': 400}}));
    component.login();
    expect(spy).toHaveBeenCalled();
    expect(component.errorMessage).toBe(Errors.GENERIC);
  });
});
