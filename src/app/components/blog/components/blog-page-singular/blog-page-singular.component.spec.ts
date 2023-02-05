import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPageSingularComponent } from './blog-page-singular.component';

describe('BlogPageSingularComponent', () => {
  let component: BlogPageSingularComponent;
  let fixture: ComponentFixture<BlogPageSingularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPageSingularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPageSingularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
