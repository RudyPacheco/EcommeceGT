import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTop10ProdMasVendidoComponent } from './table-top10-prod-mas-vendido.component';

describe('TableTop10ProdMasVendidoComponent', () => {
  let component: TableTop10ProdMasVendidoComponent;
  let fixture: ComponentFixture<TableTop10ProdMasVendidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTop10ProdMasVendidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTop10ProdMasVendidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
