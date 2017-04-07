import { Component, Input } from '@angular/core';

@Component({
  selector: 'stache-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class StacheMediaComponent {
  @Input()
  public mediaTitle: string;

  @Input()
  public imageSrc: string;
}
