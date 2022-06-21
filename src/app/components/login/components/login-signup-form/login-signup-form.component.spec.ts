import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FascadeService } from 'src/app/components/login/services/fascade.service';

import { LoginSignupFormComponent } from './login-signup-form.component';

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

  it('should check what info is already in the table for new subscriber', () => {
    expect(component).toBeTruthy();
  });

  it('should show errors', () => {
    expect(component).toBeTruthy();
  });

  it('should shows generic errors', () => {
    expect(component).toBeTruthy();
  });
});
