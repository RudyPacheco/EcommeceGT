import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePaqueteriaComponent } from './home-paqueteria.component';

describe('HomePaqueteriaComponent', () => {
  let component: HomePaqueteriaComponent;
  let fixture: ComponentFixture<HomePaqueteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePaqueteriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePaqueteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
