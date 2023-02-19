import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-atributes',
  templateUrl: './directives-atributes.component.html',
  styleUrls: ['./directives-atributes.component.scss'],
})
export class DirectivesAtributesComponent implements OnInit {
  public value: boolean = true;
  public date: Date = new Date();

  ngOnInit(): void {
    setInterval(() => (this.value = !this.value), 500);
  }
}
