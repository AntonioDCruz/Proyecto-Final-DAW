import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoFinanzasComponent } from './listado-finanzas.component';

describe('ListadoFinanzasComponent', () => {
  let component: ListadoFinanzasComponent;
  let fixture: ComponentFixture<ListadoFinanzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoFinanzasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
