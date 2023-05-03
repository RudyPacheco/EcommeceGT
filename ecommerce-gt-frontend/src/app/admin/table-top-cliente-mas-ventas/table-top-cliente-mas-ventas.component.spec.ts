import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTopClienteMasVentasComponent } from './table-top-cliente-mas-ventas.component';

describe('TableTopClienteMasVentasComponent', () => {
  let component: TableTopClienteMasVentasComponent;
  let fixture: ComponentFixture<TableTopClienteMasVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTopClienteMasVentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTopClienteMasVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
