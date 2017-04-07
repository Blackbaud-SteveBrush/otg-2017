import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-partner-tile',
  templateUrl: './partner-tile.component.html',
  styleUrls: ['./partner-tile.component.scss']
})
export class AppPartnerTileComponent {
  @Input()
  public app: any;

  @Output()
  public openModal: EventEmitter<number> = new EventEmitter<number>();

  public open() {
    this.openModal.emit(this.app.id);
  }
}
