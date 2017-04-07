import { Component, OnInit } from '@angular/core';

import { Application } from './../shared/models/application';
import { AppService } from './../shared/services/app.service';
import { SkyModalService, SkyModalCloseArgs } from '@blackbaud/skyux/dist/core';

import {
  PartnerAppDetailModalContext
} from './../shared/partner-app-detail-modal/partner-app-detail-modal-context';
import {
  PartnerAppDetailModalComponent
} from './../shared/partner-app-detail-modal/partner-app-detail-modal.component';

import { AddAppFormContext } from './../shared/addapp-form-component/addapp-form-context';
import { AddAppFormComponent } from './../shared/addapp-form-component/addapp-form.component';

@Component({
  selector: 'my-apps',
  templateUrl: './my-app-home.component.html'
})
export class MyAppsHomeComponent implements OnInit {
  public myApps: Application[] = [];

  constructor(
    private appService: AppService,
    private modal: SkyModalService) { }

  private refreshApps() {
    console.log('refreshing apps');
    this.appService.getMyApps().then(data => {
      console.log('data');
      this.myApps = data as Application[];
    });
  }

  public openModal() {
    let context = new AddAppFormContext();

    let windowContext = [{ provide: AddAppFormContext, useValue: context }];
    let modalInstance = this.modal.open(AddAppFormComponent, windowContext);

    modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
      this.refreshApps();
      console.log('Modal closed with reason: ' + result.reason + ' and data: ' + result.data);
    });
  }

  public ngOnInit() {
    this.refreshApps();
  }

  public onOpenModal(event) {
    let application = this.myApps.filter(el => el.id === event)[0];
    let context = new PartnerAppDetailModalContext();
    context.application = application;

    let modalInstance = this.modal.open(PartnerAppDetailModalComponent, [{
      provide: PartnerAppDetailModalContext,
      useValue: context
    }]);

    modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
      console.log('Modal closed with reason: ' + result.reason + ' and data: ' + result.data);
    });
  }
}
