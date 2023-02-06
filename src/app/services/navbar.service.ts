import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  /**
   * Controls the activeLink state of the Nav Bar
   * @type {BehaviorSubject}
   * @memberof NavbarService
   */
  public activeLink: BehaviorSubject<string> = new BehaviorSubject("");

  constructor(private router: Router) { }

/**
 * Handles the routing and route state of navbar
 * @param link
 * @typeof String
 */
  public routeTo(link: string) {
    this.activeLink.next(link);
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([link]));
  }
}
