import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPaqueteriaComponent } from './navbar-paqueteria.component';

describe('NavbarPaqueteriaComponent', () => {
  let component: NavbarPaqueteriaComponent;
  let fixture: ComponentFixture<NavbarPaqueteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarPaqueteriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarPaqueteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
