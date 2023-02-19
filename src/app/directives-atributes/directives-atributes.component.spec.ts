import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesAtributesComponent } from './directives-atributes.component';

describe('DirectivesAtributesComponent', () => {
  let component: DirectivesAtributesComponent;
  let fixture: ComponentFixture<DirectivesAtributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesAtributesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesAtributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
