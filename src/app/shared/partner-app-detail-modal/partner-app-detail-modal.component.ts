import { Component } from '@angular/core';

import { SkyModalInstance } from '@blackbaud/skyux/dist/core';
import { PartnerAppDetailModalContext } from './partner-app-detail-modal-context';

@Component({
  selector: 'partner-app-detail-modal',
  templateUrl: './partner-app-detail-modal-component.html',
  styleUrls: ['./partner-app-detail-modal-component.scss']
})
export class PartnerAppDetailModalComponent {
  public slides: string[] = [
    'https://bbotgapr2017.blob.core.windows.net/samus/biznet5.png',
    'https://bbotgapr2017.blob.core.windows.net/samus/biznet4.png',
    'https://bbotgapr2017.blob.core.windows.net/samus/biznet3.png',
    'https://bbotgapr2017.blob.core.windows.net/samus/biznet2.jpg',
    'https://bbotgapr2017.blob.core.windows.net/samus/biznet1.jpg'
  ];
  public showRatings: boolean = false;

  constructor(
    public context: PartnerAppDetailModalContext,
    public instance: SkyModalInstance) { }

  public show() {
    this.showRatings = !this.showRatings;
  }

}
