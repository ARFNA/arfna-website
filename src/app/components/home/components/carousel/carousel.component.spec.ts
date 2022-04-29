import { ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarService } from 'src/app/services/navbar.service';
import { FascadeService } from '../../services/fascade.service';

import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let navBar: NavbarService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselComponent ],
      providers: [FascadeService, NavbarService],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    navBar = TestBed.inject(NavbarService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change based on current page', () => {
    navBar.activeLink.next('/about');
    component.ngOnInit();
    expect(component.currPage).toEqual('/about');
    navBar.activeLink.next('/donate');
    component.ngOnInit();
    expect(component.currPage).toEqual('/donate');
  });

  it('should change image to previous when at beginning', () => {
    component.previousImage();
    expect(component.currentImage).toEqual(2);
  });

  it('should change image to next', () => {
    component.nextImage();
    expect(component.currentImage).toEqual(1);
  });

  it('should change image to previous', () => {
    component.currentImage = 1;
    component.previousImage();
    expect(component.currentImage).toEqual(0);
  });

  it('should change image to next when at end', () => {
    component.currentImage = component.images.length;
    component.nextImage();
    expect(component.currentImage).toEqual(0);
  });

  it('should call next iteration', fakeAsync(() => {
    component.nextImage();
    tick(5000);
    fixture.detectChanges();
    expect(component.currentImage).toEqual(2);
    discardPeriodicTasks();
  }));

  it('should call next iteration', fakeAsync(() => {
    component.previousImage();
    tick(5000);
    fixture.detectChanges();
    expect(component.currentImage).toEqual(0);
    discardPeriodicTasks();
  }));
});
