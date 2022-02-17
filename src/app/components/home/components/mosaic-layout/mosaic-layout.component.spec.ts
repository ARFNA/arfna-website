import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaicLayoutComponent } from './mosaic-layout.component';

describe('MosaicLayoutComponent', () => {
  let component: MosaicLayoutComponent;
  let fixture: ComponentFixture<MosaicLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MosaicLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MosaicLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
