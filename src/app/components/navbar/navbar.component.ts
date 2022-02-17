import { Component, OnInit } from '@angular/core';
import { FascadeService } from 'src/app/services/fascade.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public activeLink: string = '';

  constructor(private fascadeService: FascadeService) { }

  ngOnInit(): void {
    this.fascadeService.getActiveLink().subscribe((state) => {
      this.activeLink = state;
    });
  }

  public serveLink(link: string): void {
    this.fascadeService.routeTo(link);
  }

  ngOnDestroy(): void {

  }

}
