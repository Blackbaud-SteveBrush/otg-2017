import { Component } from '@angular/core';

@Component({
  selector: 'app-partner-search-bar',
  templateUrl: './partner-app-search-bar.component.html',
  styleUrls: ['./partner-app-search-bar.component.scss']
})
export class PartnerAppSearchBarComponent {
  public searchText: string;
  public searchApplied(searchText: string) {
    this.searchText = searchText;
    console.log('Search for summin', searchText);
  }
  public filterButtonClicked() {}
  public onDismiss(index) {}
}
