import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarService } from 'src/app/services/navbar.service';
import { FascadeService } from '../home/services/fascade.service';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      providers: [FascadeService, NavbarService],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create with id', () => {
    component.id = 'modal-1';
    component.ngOnInit();
    expect(component).toBeTruthy();
    expect(document.body.classList.contains('modal-open')).toBeFalsy();
  });

  it('should open', () => {
    component.id = 'modal-1';
    component.open();
    expect(document.body.classList.contains('modal-open')).toBeTruthy();
  });

  it('should close', () => {
    component.id = 'modal-1';
    component.close();
    expect(document.body.classList.contains('modal-open')).toBeFalsy();
  });
});
