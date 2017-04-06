import { Component, OnInit } from '@angular/core';
import { Application } from './shared/application';
import { MarketplaceDataService } from './shared/marketplaceData.service';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  constructor(private dataService: MarketplaceDataService) { }

  public products: Application[];

  ngOnInit() {
     this.products = this.dataService.getApplications();
  }
}
