import { Component } from '@angular/core';
import { SkyModalService, SkyModalCloseArgs } from '@blackbaud/skyux/dist/core';

import { AddAppFormContext } from './../addapp-form-component/addapp-form-context';
import { AddAppFormComponent } from './../addapp-form-component/addapp-form.component';

@Component({
  selector: 'app-partner-search-bar',
  templateUrl: './partner-app-search-bar.component.html',
  styleUrls: ['./partner-app-search-bar.component.scss']
})
export class PartnerAppSearchBarComponent {
  constructor(private modal: SkyModalService) { }

  public openModal() {
    let context = new AddAppFormContext();

    let windowContext = [{ provide: AddAppFormContext, useValue: context }];
    let modalInstance = this.modal.open(AddAppFormComponent, windowContext);

    modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
      console.log('Modal closed with reason: ' + result.reason + ' and data: ' + result.data);
    });
  }

  public searchText: string;
  public searchApplied(searchText: string) {
    this.searchText = searchText;
    console.log('Search for summin', searchText);
  }
  public filterButtonClicked() {}
  public onDismiss(index) {}
}
