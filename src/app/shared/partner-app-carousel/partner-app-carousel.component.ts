import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'partner-app-carousel',
  templateUrl: './partner-app-carousel.component.html',
  styleUrls: ['./partner-app-carousel.component.scss']
})
export class PartnerAppCarouselComponent implements OnInit {
  @Input()
  public slides: string[];

  public slideIndex: number = 0;
  public slidesContainerWidth: string;
  public slidesWidth: string;

  public ngOnInit() {
    this.slidesContainerWidth = `${100 * this.slides.length}%`;
    this.slidesWidth = `${100 / this.slides.length}%`;
  }

  public changeCurrentIndex(newIndex: number): void {
    if (newIndex < 0 ) {
      this.slideIndex = this.slides.length - 1;
    } else if (newIndex >= this.slides.length) {
      this.slideIndex = 0;
    } else {
      this.slideIndex = newIndex;
    }
  }
}
