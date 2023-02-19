import { Component, OnInit } from '@angular/core';
import { itemList } from '../interfaces/helpers';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
})
export class StructuralDirectivesComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<itemList> = [
    { name: 'Glauber Onofre', yearBirth: 98 },
    { name: 'Julio Cesar', yearBirth: 74 },
  ];
  public name: string = '';

  constructor() {}

  ngOnInit(): void {
    setInterval(() => (this.condition = !this.condition), 2000);
  }

  public onClick(): void {
    this.conditionClick = !this.conditionClick;
  }

  public onClickAdd(input: itemList): void {
    this.list.push(input);
  }

  public removeItem(input: number): void {
    this.list.splice(input, 1);
  }
}
