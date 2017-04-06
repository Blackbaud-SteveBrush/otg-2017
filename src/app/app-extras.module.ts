import { NgModule } from '@angular/core';

import { StacheModule } from '@blackbaud/stache';

import { MarketplaceDataService } from './shared/marketplaceData.service';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [StacheModule],
  exports: [StacheModule],
  providers: [MarketplaceDataService],
  entryComponents: []
})
export class AppExtrasModule { }
