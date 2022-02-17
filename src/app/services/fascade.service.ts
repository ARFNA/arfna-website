import { Injectable } from '@angular/core';
import { NavbarService } from './navbar.service';

@Injectable({
  providedIn: 'root'
})
export class FascadeService {

  constructor(private navbarService: NavbarService) { }

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
}
