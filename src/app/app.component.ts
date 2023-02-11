import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    {{ valor }}
    <button (click)="adicionar()">Adicionar</button>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent
  implements
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked
{
  public valor: number = 1;

  public adicionar(): number {
    return (this.valor += 1);
  }
  ngOnInit(): void {
    console.log('Ligar motores');
  }

  ngDoCheck(): void {
    console.log('Checando propulsores');
  }

  ngAfterContentInit(): void {
    console.log('Iniciando decolagem');
  }

  ngAfterContentChecked(): void {
    console.log('Estamos em pleno voo');
  }

  ngAfterViewInit(): void {
    console.log('Iremos chegar no espaço em 3 . . . 2  . . . 1 . . .');
  }

  ngAfterViewChecked(): void {
    console.log(
      'Um pequeno paço para um homem mas um grande paço para a humandia'
    );
  }
}
