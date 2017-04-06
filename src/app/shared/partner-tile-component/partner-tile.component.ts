import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-partner-tile',
  templateUrl: './partner-tile.component.html',
  styleUrls: ['./partner-tile.component.scss']
})
export class AppPartnerTileComponent {
  @Input()
  public apps: any[];
 }
