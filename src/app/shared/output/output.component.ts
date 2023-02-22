import { Component, EventEmitter, Output } from '@angular/core';
import { itemList } from 'src/app/interfaces/helpers';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent {
  public list: Array<itemList> = [
    { name: 'Léo', yearBirth: 24 },
    { name: 'Carlos', yearBirth: 42 },
    { name: 'Luiza', yearBirth: 32 },
  ];
  @Output() public sendDatas = new EventEmitter();

  constructor() {}

  public getData(index: number): void {
    this.sendDatas.emit(this.list[index]);
  }
}
