import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  public currentImage = 0;

  public images: string[] = ['../../../../assets/rosh.jpg','../../../../assets/epipen.jpg','../../../../assets/nuts.jpg'];

  private carouselInterval: any = setInterval(() => {this.nextImage()}, 5000);

  constructor() { }

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
