import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './app-rating.component.html',
  styleUrls: ['./app-rating.component.scss']
})
export class AppRatingComponent implements OnInit {
  @Input()
  public value: number = 0;

  public stars: string[] = [
    'fa-star-o',
    'fa-star-o',
    'fa-star-o',
    'fa-star-o',
    'fa-star-o'
  ];

  public ngOnInit() {
    this.stars = this.stars.map((el, idx) => {
      let value = ++idx;
      let isNotWhole = (this.value % 1 !== 0);

      if (this.value >= value) {
        return 'fa-star';
      } else if (isNotWhole && (Math.round(this.value) === value)) {
        return 'fa-star-half-full';
      } else {
        return el;
      }
    });
  }
}
