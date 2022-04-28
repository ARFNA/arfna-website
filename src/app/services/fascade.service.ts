import { Injectable } from '@angular/core';
import { ModalService } from './modal.service';
import { NavbarService } from './navbar.service';

@Injectable({
  providedIn: 'root'
})
export class FascadeService {

  constructor(private navbarService: NavbarService, private modalService: ModalService) { }

  /**
   * Fascade interface with routing
   * @param link 
   */
  public routeTo(link: string) {
    this.navbarService.routeTo(link);
  }

  public getActiveLink() {
    return this.navbarService.activeLink;
  }

  public add(element: any) {
    this.modalService.add(element);
  }

  public remove(id: string | undefined) {
    this.modalService.remove(id);
  }

  public open(id: string) {
    this.modalService.open(id);
  }

  public close(id: string) {
    this.modalService.close(id);
  }
}
