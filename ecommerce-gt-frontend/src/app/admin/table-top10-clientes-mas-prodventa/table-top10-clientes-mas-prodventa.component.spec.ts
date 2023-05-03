import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTop10ClientesMasProdventaComponent } from './table-top10-clientes-mas-prodventa.component';

describe('TableTop10ClientesMasProdventaComponent', () => {
  let component: TableTop10ClientesMasProdventaComponent;
  let fixture: ComponentFixture<TableTop10ClientesMasProdventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTop10ClientesMasProdventaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTop10ClientesMasProdventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
