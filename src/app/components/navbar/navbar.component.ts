import { Component, OnInit } from '@angular/core';
import { RSubscriber } from 'src/app/models/rsubscriber';
import { Subscriber } from 'src/app/models/subscriber';
import { FascadeService } from 'src/app/services/fascade.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public activeLink: string = '';

  public userLoggedIn: Subscriber = {};

  constructor(private fascadeService: FascadeService) { }

  ngOnInit(): void {
    this.fascadeService.getUserLoggedIn(new RSubscriber('V1', 'ALL')).subscribe(
      (response: any) => {
        this.userLoggedIn = response.body.response.subscriber;
    },
    (error: any) => {
      this.userLoggedIn = {};
    });

    this.fascadeService.getActiveLink().subscribe((state) => {
      this.activeLink = state;
    });
  }

  public serveLink(link: string): void {
    this.fascadeService.routeTo(link);
  }

}
