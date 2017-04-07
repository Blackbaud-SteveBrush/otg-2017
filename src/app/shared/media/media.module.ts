import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StacheMediaComponent } from './media.component';
import { StacheMediaDetailsComponent } from './media-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StacheMediaComponent,
    StacheMediaDetailsComponent
  ],
  exports: [
    StacheMediaComponent,
    StacheMediaDetailsComponent
  ]
})
export class StacheMediaModule { }
