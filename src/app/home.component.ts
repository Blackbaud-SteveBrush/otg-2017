import { Component, OnInit } from '@angular/core';

import { Application } from './shared/models/application';
import { AppService } from './shared/services/app.service';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  public apps: Application[] = [];

  constructor(
    private appService: AppService) { }

  public ngOnInit() {
    this.appService.getAll().then(data => {
      console.log(data);
      this.apps = data as Application[];
    });
  }
}
