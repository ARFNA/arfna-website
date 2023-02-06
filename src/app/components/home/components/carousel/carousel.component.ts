import { Component, OnInit } from '@angular/core';
import { FascadeService } from 'src/app/services/fascade.service';
import { HomeConstants } from '../../constants/home.constants';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public currentImage = 0;
  
  public images: string[] = [];

  public currPage: string = '';

  private carouselInterval: any = setInterval(() => {this.nextImage()}, 5000);

  constructor(private fascadeService: FascadeService) { }

  ngOnInit() {
    this.fascadeService.getActiveLink().subscribe((data) => {
      this.currPage = data;
    });

    switch(this.currPage) {
      case '':
        this.images = HomeConstants.HOME_CAROUSEL;
        break;
      case '/about':
        this.images = HomeConstants.ABOUT_CAROUSEL;
        break;
      case '/donate':
        this.images = HomeConstants.DONATE_CAROUSEL;
        break;
    }
    
  }

  previousImage() {
    clearInterval(this.carouselInterval);
    if (this.currentImage <= 0) {
      this.currentImage = this.images.length - 1;
    } else {
      this.currentImage--;
    }
    this.carouselInterval = setInterval(() => {this.nextImage()}, 5000);
  }

  nextImage() {
    clearInterval(this.carouselInterval);
    if (this.currentImage < this.images.length - 1) {
      this.currentImage++;
    } else {
      this.currentImage = 0;
    }
    this.carouselInterval = setInterval(() => {this.nextImage()}, 5000);
  }

}
