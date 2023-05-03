import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTop10ClientesMasPedidosComponent } from './table-top10-clientes-mas-pedidos.component';

describe('TableTop10ClientesMasPedidosComponent', () => {
  let component: TableTop10ClientesMasPedidosComponent;
  let fixture: ComponentFixture<TableTop10ClientesMasPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTop10ClientesMasPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTop10ClientesMasPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
