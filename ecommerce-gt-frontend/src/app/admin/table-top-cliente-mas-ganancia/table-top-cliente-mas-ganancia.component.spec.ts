import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTopClienteMasGananciaComponent } from './table-top-cliente-mas-ganancia.component';

describe('TableTopClienteMasGananciaComponent', () => {
  let component: TableTopClienteMasGananciaComponent;
  let fixture: ComponentFixture<TableTopClienteMasGananciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTopClienteMasGananciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTopClienteMasGananciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
