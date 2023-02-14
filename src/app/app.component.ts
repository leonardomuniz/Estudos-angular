import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public destroy: boolean = true;

  constructor() {}

  ngOnInit(): void {
    console.log('Ligar motores');
  }

  public destroyComponent(): void {
    this.destroy = false;
  }
}
