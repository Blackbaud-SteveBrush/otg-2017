import { Injectable } from '@angular/core';

import { Applications } from '../mocks-apps';

@Injectable()
export class AppService {
  public getAll() {
    let apps: any[] = JSON.parse(localStorage.getItem('apps')) || Applications;
    return new Promise(good => {
      good(apps);
    });
  }

  public getById(appId) {
    let apps: any[] = JSON.parse(localStorage.getItem('apps')) || Applications;
    return new Promise(good => {
      let foundApp = apps.filter(app => app.id === appId);
      good(foundApp);
    });
  }
}
