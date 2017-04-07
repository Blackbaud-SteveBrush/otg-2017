import { NgModule } from '@angular/core';

import { StacheModule } from '@blackbaud/stache';

import { AppService } from './shared/services/app.service';

import {
  PartnerAppDetailModalComponent
} from './shared/partner-app-detail-modal/partner-app-detail-modal.component';

require('style!../styles/app.scss');

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [
    StacheModule
  ],
  exports: [
    StacheModule
  ],
  providers: [
    AppService
  ],
  entryComponents: [
    PartnerAppDetailModalComponent
  ]
})
export class AppExtrasModule { }
