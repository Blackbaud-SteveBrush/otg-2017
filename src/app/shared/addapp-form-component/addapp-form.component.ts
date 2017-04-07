import { Component } from '@angular/core';

import { SkyModalInstance } from '@blackbaud/skyux/dist/core';

import { Application } from './../models/application';
import { Rating } from './../models/rating';
import { Organization } from './../models/organization';
import { AddAppFormContext } from './addapp-form-context';

import { AppService } from './../services/app.service';

@Component({
  selector: 'sky-demo-modal-form',
  templateUrl: './addapp-form.component.html',
  styleUrls: ['./addapp-form.component.scss']
})
export class AddAppFormComponent {
  public title = 'Add an application';

  public save() {
    let app = new Application();
    app.name = this.context.name;
    app.description = this.context.description;
    app.logo_url = this.context.logo_url;
    app.organization= new Organization(10020, 'Blackbaud');
    app.rating_total = new Rating(null, null, 5);
    app.ratings = [new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)];
    app.mine = true;

    this.appService.addApp(app);
    this.instance.save('App saved');
  }

  constructor(
    public context: AddAppFormContext, 
    public instance: SkyModalInstance, 
    private appService: AppService) { }
}
