import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWithDividerComponent } from './header-with-divider.component';

describe('HeaderWithDividerComponent', () => {
  let component: HeaderWithDividerComponent;
  let fixture: ComponentFixture<HeaderWithDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderWithDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWithDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
