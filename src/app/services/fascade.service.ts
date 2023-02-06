import { Injectable } from '@angular/core';
import { RSubscriber } from '../models/rsubscriber';
import { ModalService } from './modal.service';
import { NavbarService } from './navbar.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class FascadeService {
  
  constructor(private navbarService: NavbarService,
    private modalService: ModalService,
    private token: TokenService) { }

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

  public getUserLoggedIn(user: RSubscriber) {
    return this.token.rSubscriber(user);
  }

  public logout() {
    return this.token.logout();
  }

  public acceptTerms() {
    return this.token.accept();
  }
}
