import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { NavbarService } from 'src/app/services/navbar.service';
import { FascadeService } from 'src/app/services/fascade.service';
import { MosaicLayoutComponent } from './mosaic-layout.component';

describe('MosaicLayoutComponent', () => {
  let component: MosaicLayoutComponent;
  let fixture: ComponentFixture<MosaicLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MosaicLayoutComponent, ModalComponent],
      providers: [FascadeService, NavbarService],
      imports: [RouterTestingModule]
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

  it('should create the box based on screen size 1000', () => {
    spyOn(component, 'getWidth').and.returnValue(1000);
    fixture.detectChanges();
    component.ngDoCheck();
    expect(component.rowHeight).toEqual('80px');
  });

  it('should create the box based on screen size 1600', () => {
    spyOn(component, 'getWidth').and.returnValue(1600);
    fixture.detectChanges();
    component.ngDoCheck();
    expect(component.rowHeight).toEqual('175px');
  });
  
});
