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
  public slides: string[] = [
    'http://vignette4.wikia.nocookie.net/metroid/images/b/ba/Metroid.jpg/revision/latest?cb=20150702055904',
    'http://vignette4.wikia.nocookie.net/metroid/images/d/d8/Metroid4_07.jpg/revision/latest/scale-to-width-down/275?cb=20100322225155',
    'http://metroid.retropixel.net/games/mprime/artwork/character_samus_varia_suit_05_hd.png',
    'http://vignette1.wikia.nocookie.net/metroid/images/b/bb/Metroid_fusion.jpg/revision/latest?cb=20120706064821',
    'https://s-media-cache-ak0.pinimg.com/originals/03/51/99/0351996bd35d904d71aad6a8b424b3d5.jpg'
  ];

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
