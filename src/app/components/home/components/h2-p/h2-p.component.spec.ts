import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H2PComponent } from './h2-p.component';

describe('H2PComponent', () => {
  let component: H2PComponent;
  let fixture: ComponentFixture<H2PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H2PComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H2PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
