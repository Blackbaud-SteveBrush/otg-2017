import { Component } from '@angular/core';

import { SkyModalInstance } from '@blackbaud/skyux/dist/core';
import { PartnerAppDetailModalContext } from './partner-app-detail-modal-context';

@Component({
  selector: 'partner-app-detail-modal',
  templateUrl: './partner-app-detail-modal-component.html'
})
export class PartnerAppDetailModalComponent {
  constructor(
    public context: PartnerAppDetailModalContext,
    public instance: SkyModalInstance) { }
}
