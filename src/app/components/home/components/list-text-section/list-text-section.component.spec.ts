import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTextSectionComponent } from './list-text-section.component';

describe('ListTextSectionComponent', () => {
  let component: ListTextSectionComponent;
  let fixture: ComponentFixture<ListTextSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTextSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTextSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
