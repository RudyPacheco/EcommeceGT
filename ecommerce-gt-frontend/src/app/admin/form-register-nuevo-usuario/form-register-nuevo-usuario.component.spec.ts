import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterNuevoUsuarioComponent } from './form-register-nuevo-usuario.component';

describe('FormRegisterNuevoUsuarioComponent', () => {
  let component: FormRegisterNuevoUsuarioComponent;
  let fixture: ComponentFixture<FormRegisterNuevoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegisterNuevoUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegisterNuevoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
