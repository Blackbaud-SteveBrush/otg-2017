import { Component, OnInit } from '@angular/core';

import { Application } from './shared/models/application';
import { AppService } from './shared/services/app.service';
import { SkyModalService, SkyModalCloseArgs } from '@blackbaud/skyux/dist/core';

import {
  PartnerAppDetailModalContext
} from './shared/partner-app-detail-modal/partner-app-detail-modal-context';
import {
  PartnerAppDetailModalComponent
} from './shared/partner-app-detail-modal/partner-app-detail-modal.component';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public apps: Application[] = [];

  constructor(
    private appService: AppService,
    private modal: SkyModalService) { }

  public ngOnInit() {
    this.appService.getAll().then(data => {
      this.apps = data as Application[];
    });
  }

  public onOpenModal(event) {
    let application = this.apps.filter(el => el.id === event)[0];
    let context = new PartnerAppDetailModalContext();
    context.rating = application.rating.value;
    context.title = application.name;

    let modalInstance = this.modal.open(PartnerAppDetailModalComponent, [{
      provide: PartnerAppDetailModalContext,
      useValue: context
    }]);

    modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
      console.log('Modal closed with reason: ' + result.reason + ' and data: ' + result.data);
    });
  }
}
