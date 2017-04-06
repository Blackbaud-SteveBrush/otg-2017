import { Injectable } from '@angular/core';

import { Application } from './application';
import { Applications } from './mocks-apps';

@Injectable()
export class MarketplaceDataService {
    getApplications() {
         // array in local storage for registered apps
        let apps: any[] = JSON.parse(localStorage.getItem('apps')) || Applications;

        return apps;
    }

    getApplication(applicationId) {
        let apps: any[] = JSON.parse(localStorage.getItem('apps')) || Applications;

        let filteredapps = apps.filter(app => {
            return app.id === applicationId;
        });

        return filteredapps[0];
    }
}