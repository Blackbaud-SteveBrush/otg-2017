import { NgModule } from '@angular/core';

import { StacheModule } from '@blackbaud/stache';

import { AppService } from './shared/services/app.service';

require('style!../styles/app.scss');

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [StacheModule],
  exports: [StacheModule],
  providers: [AppService],
  entryComponents: []
})
export class AppExtrasModule { }
