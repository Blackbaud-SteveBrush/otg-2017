import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './app-rating.component.html',
  styleUrls: ['./app-rating.component.scss']
})
export class AppRatingComponent implements OnInit {
  @Input('value')
  public rating: number = 0;

  public stars: string[] = [
    'fa-star-o',
    'fa-star-o',
    'fa-star-o',
    'fa-star-o',
    'fa-star-o'
  ];

  ngOnInit() {
    this.stars = this.stars.map((el, idx) => {
      let value = ++idx;
      let isNotWhole = (this.rating % 1 !== 0);

      if (this.rating >= value) {
        return 'fa-star';
      } else if (isNotWhole && (Math.round(this.rating) === value)) {
        return 'fa-star-half-full';
      } else {
        return el;
      }
    });
  }
}
