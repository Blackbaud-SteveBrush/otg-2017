import { NgModule } from '@angular/core';

import { StacheModule } from '@blackbaud/stache';

import { AppService } from './shared/services/app.service';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [StacheModule],
  exports: [StacheModule],
  providers: [AppService],
  entryComponents: []
})
export class AppExtrasModule { }
