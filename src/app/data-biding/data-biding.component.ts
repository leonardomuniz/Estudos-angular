import { Component } from '@angular/core';
import { mousePosition } from '../interfaces/helpers';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss'],
})
export class DataBidingComponent {
  public mousePosition: mousePosition = { x: 0, y: 0 };
  public boxColor: string = 'rgb(1,1,1)';

  constructor() {}

  public alertInfo(value: MouseEvent): void {
    console.log(value);
  }

  public mouseMoveEvent(value: MouseEvent): void {
    this.mousePosition = {
      x: value.offsetX,
      y: value.offsetY,
    };

    this.boxColor = `rgb(${this.mousePosition.x},0,${this.mousePosition.y})`;
  }
}
