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
    'http://vignette4.wikia.nocookie.net/metroid/images/b/ba/Metroid.jpg/revision/latest?cb=20150702055904',
    'http://vignette4.wikia.nocookie.net/metroid/images/d/d8/Metroid4_07.jpg/revision/latest/scale-to-width-down/275?cb=20100322225155',
    'http://metroid.retropixel.net/games/mprime/artwork/character_samus_varia_suit_05_hd.png',
    'http://vignette1.wikia.nocookie.net/metroid/images/b/bb/Metroid_fusion.jpg/revision/latest?cb=20120706064821',
    'https://s-media-cache-ak0.pinimg.com/originals/03/51/99/0351996bd35d904d71aad6a8b424b3d5.jpg'
  ];
  public showRatings: boolean = false;

  constructor(
    public context: PartnerAppDetailModalContext,
    public instance: SkyModalInstance) { }

  public show() {
    this.showRatings = !this.showRatings;
  }

}
