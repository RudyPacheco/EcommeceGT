import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguiminetoPedidosComponent } from './seguimineto-pedidos.component';

describe('SeguiminetoPedidosComponent', () => {
  let component: SeguiminetoPedidosComponent;
  let fixture: ComponentFixture<SeguiminetoPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguiminetoPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguiminetoPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
