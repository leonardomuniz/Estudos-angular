import { Component, OnInit } from '@angular/core';
import { itemList } from './interfaces/helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public destroy: boolean = true;
  public addValue: number = 10;
  public getDatas: any;

  constructor() {}

  ngOnInit(): void {
    console.log('Ligar motores');
  }

  public destroyComponent(): void {
    this.destroy = false;
  }
  public add(): void {
    this.addValue += 1;
  }

  public subtract(): void {
    this.addValue -= 1;
  }

  public setDatas(input: itemList | Event): void {
    this.getDatas = input;
  }
}
