import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEntrenamientosComponent } from './listado-entrenamientos.component';

describe('ListadoEntrenamientosComponent', () => {
  let component: ListadoEntrenamientosComponent;
  let fixture: ComponentFixture<ListadoEntrenamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoEntrenamientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEntrenamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
