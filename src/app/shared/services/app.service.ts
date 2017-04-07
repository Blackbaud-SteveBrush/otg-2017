import { Injectable } from '@angular/core';

import { Applications } from '../mocks-apps';
import { Application } from '../models/application';

@Injectable()
export class AppService {
  private apps: Application[];

  private populateApps() {
    if (this.apps == null) {
      this.apps = JSON.parse(localStorage.getItem('apps')) || Applications;
    }

    return this.apps;
  }

  private setApps(apps) {
    this.apps = apps;
    localStorage.setItem('apps', apps);
  }

  public getAll() {
    let apps: Application[] = this.populateApps();
    return new Promise(good => {
      good(apps);
    });
  }

  public getBy(appId) {
    let apps: Application[] = this.populateApps();

    return new Promise(good => {
      let foundApp = apps.filter(app => app.id === appId);
      good(foundApp[0]);
    });
  }

  public getMyApps() {
    let apps: Application[] = this.populateApps();

    return new Promise(good => {
      let myApps = apps.filter(app => app.mine === true);
      good(myApps);
    });
  }

  public addApp(app) {
    let apps: Application[] = this.populateApps();
    app.id = apps[apps.length - 1].id + 1;
    
    console.log(app);
    console.log(apps);
    console.log('doing stuff');

    apps.push(app);
    localStorage.setItem('apps', JSON.stringify(apps));
  }
}
